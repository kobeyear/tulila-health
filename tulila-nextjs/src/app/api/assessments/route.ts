import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-simple';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'age_range', 'menstrual_status', 'symptoms', 'symptom_severity',
      'previous_treatments', 'medical_history', 'first_name', 'email',
      'hrt_score', 'hrt_candidacy', 'summary'
    ];
    
    for (const field of requiredFields) {
      if (!body[field] && body[field] !== 0) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Get client IP and user agent for tracking
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const userAgent = request.headers.get('user-agent') || '';
    
    // Get Supabase admin client
    const supabaseAdmin = supabase;
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }
    
    // Insert assessment into database
    const { data, error } = await supabaseAdmin
      .from('assessments')
      .insert([
        {
          age_range: body.age_range,
          menstrual_status: body.menstrual_status,
          symptoms: body.symptoms,
          symptom_severity: body.symptom_severity,
          previous_treatments: body.previous_treatments,
          medical_history: body.medical_history,
          first_name: body.first_name,
          email: body.email,
          phone: body.phone || null,
          hrt_score: body.hrt_score,
          hrt_candidacy: body.hrt_candidacy,
          summary: body.summary,
          ip_address: ip,
          user_agent: userAgent
        }
      ])
      .select()
      .single();
    
    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to save assessment' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true,
      assessment_id: data.id,
      message: 'Assessment saved successfully' 
    });
    
  } catch (error) {
    console.error('Assessment API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get Supabase admin client
    const supabaseAdmin = supabase;
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }
    
    // Get recent assessments (for admin/analytics)
    const { data, error } = await supabaseAdmin
      .from('assessments')
      .select('id, first_name, email, hrt_score, hrt_candidacy, created_at')
      .order('created_at', { ascending: false })
      .limit(50);
    
    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch assessments' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ assessments: data });
    
  } catch (error) {
    console.error('Assessment GET API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}