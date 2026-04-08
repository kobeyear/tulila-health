// Assessment scoring algorithm for HRT candidacy
export interface AssessmentData {
  age_range: string;
  menstrual_status: string;
  symptoms: string[];
  symptom_severity: string;
  previous_treatments: string[];
  medical_history: string[];
}

export interface ScoringResult {
  score: number;
  candidacy: 'excellent' | 'good' | 'marginal' | 'poor' | 'contraindicated';
  summary: string; // General summary, not medical recommendations
  breakdown: {
    ageScore: number;
    menstrualScore: number;
    symptomsScore: number;
    severityMultiplier: number;
    treatmentScore: number;
    contraindicationScore: number;
  };
}

export function calculateHRTScore(data: AssessmentData): ScoringResult {
  let score = 0;
  const breakdown = {
    ageScore: 0,
    menstrualScore: 0,
    symptomsScore: 0,
    severityMultiplier: 1,
    treatmentScore: 0,
    contraindicationScore: 0
  };

  // 1. Age scoring (optimal HRT window)
  const ageScores: Record<string, number> = {
    '45-49': 25,  // Peak perimenopause
    '50-54': 25,  // Early postmenopause  
    '40-44': 20,  // Early perimenopause
    '55-59': 20,  // Still good window
    '35-39': 10,  // Too early usually
    '60+': 15     // Later but still beneficial
  };
  breakdown.ageScore = ageScores[data.age_range] || 10;
  score += breakdown.ageScore;

  // 2. Menstrual status (timing indicator)
  const menstrualScores: Record<string, number> = {
    'irregular': 25,      // Perfect perimenopause timing
    '6-12-months': 30,    // Ideal early postmenopause
    '12-months': 20,      // Standard postmenopause
    'regular': 15,        // Early but acceptable
    'hysterectomy': 20    // Surgical menopause
  };
  breakdown.menstrualScore = menstrualScores[data.menstrual_status] || 10;
  score += breakdown.menstrualScore;

  // 3. Symptoms scoring (more symptoms = higher need)
  const symptomScores: Record<string, number> = {
    'hot-flashes': 20,        // Classic HRT indication
    'night-sweats': 20,       // Same as hot flashes
    'sleep-issues': 15,       // Major quality of life
    'brain-fog': 15,          // Cognitive symptoms
    'mood-swings': 15,        // Mood symptoms
    'anxiety': 12,            // Mental health impact
    'depression': 12,         // Mental health impact  
    'low-energy': 10,         // Energy/vitality
    'weight-gain': 8,         // Metabolic symptoms
    'low-libido': 12,         // Sexual health
    'vaginal-dryness': 15,    // Genitourinary symptoms
    'joint-pain': 8           // Musculoskeletal
  };
  
  breakdown.symptomsScore = data.symptoms.reduce((total, symptom) => {
    return total + (symptomScores[symptom] || 5);
  }, 0);
  score += breakdown.symptomsScore;

  // 4. Severity multiplier (affects symptom score)
  const severityMultipliers: Record<string, number> = {
    'mild': 1.0,
    'moderate': 1.3,
    'severe': 1.6,
    'struggling': 2.0
  };
  breakdown.severityMultiplier = severityMultipliers[data.symptom_severity] || 1.0;
  
  // Apply severity multiplier to symptom score only
  const severityBonus = breakdown.symptomsScore * (breakdown.severityMultiplier - 1);
  score += severityBonus;

  // 5. Previous treatments (shows medical need and gaps)
  const treatmentScores: Record<string, number> = {
    'nothing': 15,            // Underserved - needs help
    'dismissed': 20,          // Medical gaslighting - definitely needs help
    'supplements': 5,         // Tried alternatives, limited success
    'lifestyle': 5,           // Good self-care, may need more
    'antidepressants': 10,    // Inappropriate treatment for menopause
    'hormone-therapy': -5     // Already tried HRT (may need optimization)
  };
  
  breakdown.treatmentScore = data.previous_treatments.reduce((total, treatment) => {
    return total + (treatmentScores[treatment] || 0);
  }, 0);
  score += breakdown.treatmentScore;

  // 6. Medical contraindications (major safety deductions)
  const contraindicationScores: Record<string, number> = {
    'breast-cancer': -60,         // Absolute contraindication
    'blood-clots': -50,           // High risk contraindication
    'liver-disease': -40,         // Significant contraindication
    'vaginal-bleeding': -30,      // Must investigate first
    'heart-stroke': -45,          // Cardiovascular contraindication
    'none': 10                    // Bonus for no contraindications
  };
  
  breakdown.contraindicationScore = data.medical_history.reduce((total, condition) => {
    return total + (contraindicationScores[condition] || 0);
  }, 0);
  score += breakdown.contraindicationScore;

  // Determine candidacy and general summary (NO MEDICAL RECOMMENDATIONS)
  let candidacy: ScoringResult['candidacy'];
  let summary: string;

  if (score >= 85) {
    candidacy = 'excellent';
    summary = 'Based on your responses, you may be a strong candidate for hormone therapy. Your symptoms and timing suggest you could benefit from professional medical evaluation.';
  } else if (score >= 65) {
    candidacy = 'good';
    summary = 'Your assessment suggests you could be a good candidate for hormone therapy. A healthcare provider can help determine the best approach for your situation.';
  } else if (score >= 45) {
    candidacy = 'marginal';
    summary = 'Your results indicate you may benefit from hormone therapy, but individual evaluation is important. A specialist can review your full medical picture.';
  } else if (score >= 20) {
    candidacy = 'poor';
    summary = 'Based on your assessment, hormone therapy may not be the best option right now. A healthcare provider can discuss alternative approaches for your symptoms.';
  } else {
    candidacy = 'contraindicated';
    summary = 'Your medical history suggests hormone therapy may not be appropriate. A specialist can discuss safe alternatives for managing your symptoms.';
  }

  // Add contraindication note without specific medical advice
  const hasContraindications = data.medical_history.some(condition => 
    ['breast-cancer', 'blood-clots', 'liver-disease', 'vaginal-bleeding', 'heart-stroke'].includes(condition)
  );
  
  if (hasContraindications && candidacy !== 'contraindicated') {
    summary += ' Your medical history will be important for your doctor to review.';
  }

  return {
    score: Math.round(score),
    candidacy,
    summary,
    breakdown
  };
}

// Helper function to get candidacy color for UI
export function getCandidacyColor(candidacy: ScoringResult['candidacy']): string {
  const colors = {
    'excellent': 'text-green-600 bg-green-50',
    'good': 'text-blue-600 bg-blue-50', 
    'marginal': 'text-yellow-600 bg-yellow-50',
    'poor': 'text-orange-600 bg-orange-50',
    'contraindicated': 'text-red-600 bg-red-50'
  };
  return colors[candidacy];
}

// Helper function to get user-friendly candidacy text
export function getCandidacyText(candidacy: ScoringResult['candidacy']): string {
  const texts = {
    'excellent': 'Excellent Candidate',
    'good': 'Good Candidate',
    'marginal': 'May Benefit', 
    'poor': 'Limited Benefit',
    'contraindicated': 'Not Recommended'
  };
  return texts[candidacy];
}