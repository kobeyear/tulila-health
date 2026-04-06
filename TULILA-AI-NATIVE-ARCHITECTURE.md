# TULILA AI-NATIVE ARCHITECTURE
*Based on Jack Dorsey's "From Hierarchy to Intelligence" Framework*

**Last Updated:** March 2, 2026  
**Implementation Status:** Pre-Launch Design Phase

---

## 🎯 EXECUTIVE SUMMARY

Tulila Health will be built as an AI-native company from day one, replacing traditional management coordination layers with intelligent automation layers. Using Dorsey's four-layer framework and Eric Siu's real-world implementation experience, we're designing a telehealth company where AI agents handle patient onboarding, clinical coordination, content creation, compliance monitoring, and growth optimization.

**The Moat:** Months of accumulated patient journey data creates a world model that competitors cannot replicate quickly, regardless of budget.

---

## 🏗️ THE FOUR LAYERS

### **LAYER 1: CAPABILITIES**
*The AI Foundation*

**Models & Infrastructure:**
- **Primary Model:** Claude Sonnet 4+ for most operations (large context window critical)
- **Specialized Models:** 
  - Gemini Deep Think for heavy clinical reasoning
  - Haiku 3.5 for lightweight heartbeats and monitoring
  - Local inference capability for cost optimization (Eric Siu's 70% savings)

**Key Capabilities Required:**
- **Medical Context Understanding:** Models must understand HRT protocols, menopause symptoms, drug interactions
- **Regulatory Awareness:** FDA regulations, state licensing, HIPAA compliance, CPOM laws
- **Content Generation:** TikTok scripts, educational content, patient communications
- **Pattern Recognition:** Symptom-to-treatment matching, viral content optimization

**Hardware Strategy:**
- Start with cloud APIs for speed-to-market
- Plan migration to local inference (Mac Minis, NVIDIA hardware) by Month 6
- Vector database infrastructure (Pinecone → self-hosted as we scale)

---

### **LAYER 2: WORLD MODEL (THE "SINGLE BRAIN")**
*Tulila's Living Memory*

**Data Ingestion Every 15 Minutes:**
```
Patient Intake Data ──┐
Symptom Tracking ──────┤
Provider Notes ────────┤──→ TULILA SINGLE BRAIN ──→ Agent Queries
TikTok Analytics ──────┤     (Vector Database)         Decisions
Affiliate Metrics ─────┤                               Actions
Regulatory Updates ─────┤                               Learning
Clinical Outcomes ─────┘
```

**Core Data Categories:**
1. **Patient Journey Data**
   - Intake forms & symptom profiles
   - Treatment responses & adherence
   - Satisfaction scores & retention
   - Communication preferences

2. **Clinical Intelligence**
   - Provider consultation notes
   - Prescription patterns & outcomes
   - Lab results & follow-ups
   - Adverse event tracking

3. **Content Performance**
   - TikTok/IG/YouTube analytics
   - Hook performance & viral patterns
   - Conversion rates by content type
   - Audience engagement metrics

4. **Business Metrics**
   - Customer acquisition cost by channel
   - Lifetime value by patient segment
   - Affiliate/referral performance
   - Unit economics & cohort analysis

5. **Regulatory Environment**
   - State law changes
   - FDA updates
   - Telehealth regulation shifts
   - Compliance audit results

**Vector Search Examples:**
- "Find patients struggling with sleep issues" (matches "insomnia," "can't fall asleep," "waking up at night")
- "Show viral content about hot flashes" (semantic matching across all content)
- "Identify patients likely to churn" (pattern recognition across behavior)

**Security Layers:**
- **Public:** General health education, marketing content
- **Clinical:** Patient-specific data, provider-only access
- **Executive:** Financial data, strategic metrics, regulatory issues

---

### **LAYER 3: INTELLIGENCE LAYER (AGENT FLEET)**
*AI Agents That Decide & Act*

#### **WORLD AGENT** *(Organizational Brain)*
- **Role:** Orchestrates all agents, resolves conflicts, sees full picture
- **Key Functions:**
  - Coordinate patient handoffs between agents
  - Resolve scheduling conflicts (provider time vs. patient preferences)
  - Balance growth targets with clinical quality
  - Flag regulatory risks across all operations

#### **ATHENA AGENT** *(Patient Intelligence)*
- **Role:** Patient onboarding, symptom matching, journey optimization
- **Daily Actions:**
  - Process new patient intakes
  - Match symptoms to optimal HRT protocols
  - Generate personalized treatment recommendations
  - Monitor adherence and satisfaction
  - Trigger retention workflows for at-risk patients

#### **HYGEIA AGENT** *(Clinical Operations)*
- **Role:** Provider coordination, clinical workflow, medication management
- **Daily Actions:**
  - Schedule consultations based on complexity and provider expertise
  - Prepare clinical briefs for each appointment
  - Monitor prescription patterns and outcomes
  - Coordinate lab orders and follow-ups
  - Flag adverse events or concerning patterns

#### **VIRAL AGENT** *(Content & Acquisition)*
- **Role:** Content creation, TikTok strategy, organic growth
- **Daily Actions:**
  - Generate video scripts based on trending symptoms/questions
  - Optimize posting schedules across 3 TikTok accounts
  - A/B test hooks and content formats
  - Monitor viral performance and iterate
  - Mine patient conversations for content ideas

#### **COMPLIANCE AGENT** *(Regulatory & Security)*
- **Role:** HIPAA compliance, state regulations, audit preparation
- **Daily Actions:**
  - Monitor regulatory changes in target states
  - Audit patient data access and security
  - Generate compliance reports for legal team
  - Flag potential violations before they occur
  - Maintain provider licensing status

#### **GROWTH AGENT** *(Acquisition & Retention)*
- **Role:** Affiliate program, referrals, conversion optimization
- **Daily Actions:**
  - Score and prioritize leads from all channels
  - Optimize affiliate commission structures
  - Identify high-value referral patterns
  - Monitor conversion rates by source
  - Generate acquisition forecasts and budgets

**Agent Coordination:**
- All agents query the Single Brain for context
- World Agent mediates conflicts (e.g., Growth pushing timeline Clinical says is unsafe)
- Shared communication through Slack channels
- Daily standup via automated reports to team

---

### **LAYER 4: SURFACES**
*Where Humans Touch the System*

**Patient-Facing:**
- **Intake Portal:** Guided symptom assessment, seamlessly feeds Athena Agent
- **Patient Dashboard:** Treatment progress, medication reminders, educational content
- **Mobile App:** Symptom tracking, appointment scheduling, secure messaging

**Provider-Facing:**
- **Clinical Dashboard:** Hygeia Agent prepares patient briefs, treatment recommendations
- **Consultation Interface:** AI-suggested questions, real-time protocol guidance
- **Outcome Tracking:** Post-visit data collection, treatment response monitoring

**Team-Facing:**
- **Slack Integration:** Agents communicate through dedicated channels
- **Executive Dashboard:** Key metrics, agent insights, strategic recommendations
- **Content Creation Interface:** Viral Agent collaborates with content team

**Affiliate-Facing:**
- **Partner Portal:** Growth Agent manages commissions, provides performance analytics
- **Marketing Materials:** Auto-generated content for affiliate distribution

---

## 🔄 THE COMPOUNDING FLYWHEEL

### **Month 1: Setup & Pain**
- Agents hallucinate, data integration breaks
- More time fixing than time saved
- Basic patient onboarding functional but clunky
- Content creation requires heavy human oversight

### **Month 2: Early Patterns**
- Single Brain accumulates enough data for basic insights
- Athena Agent identifies: certain symptom combinations → higher satisfaction
- Viral Agent notices: educational content outperforms transformation stories
- Hygeia Agent flags: patients over 50 need longer consultation slots

### **Month 3: Flywheel Starts**
- Clinical recommendations improve based on Month 1-2 outcomes
- Content strategy refines based on actual conversion data
- Patient journey optimization based on satisfaction and retention
- Cross-agent insights: viral content topics correlate with patient questions

### **Month 4+: Compounding Intelligence**
- Agents catch patterns humans miss
- Automated processes run without oversight
- Cross-department insights emerge automatically
- System becomes predictive rather than reactive

**Examples of Compounding:**
- **Clinical:** "Patients mentioning 'brain fog' in intake need cognitive assessment added to protocol"
- **Content:** "Videos posted 3-5pm PST get 2.3x engagement from target demographic"  
- **Growth:** "Referrals from existing patients convert 5x higher when made during Month 3-6 of treatment"

---

## 🛡️ IMPLEMENTATION LESSONS FROM ERIC SIU

### **Build Security from Day One**
- **Multi-tier data access:** Public, Clinical, Executive levels
- **Agent permissions:** Strict scope limitations, audit trails
- **HIPAA compliance:** Built into agent design, not retrofitted

### **Expect Agent Conflicts**
- **Growth vs. Clinical:** Growth wants faster onboarding, Clinical wants thorough assessment
- **Content vs. Compliance:** Viral Agent wants edgy content, Compliance Agent flags risks
- **Resolution:** World Agent has final say, learns from conflict patterns

### **Ground Agents in Real Data**
- **Minimize hallucinations:** All recommendations must cite Single Brain data
- **Regular validation:** Human review of agent outputs until trust builds
- **Feedback loops:** Track agent recommendation success rates

### **Plan for Month 1 Pain**
- **Expect 2-4 weeks of net negative productivity**
- **Have human backup for critical processes**
- **Gradual agent deployment, not all-at-once**

---

## 📈 SUCCESS METRICS

### **Layer 1: Capabilities**
- Model response time < 3 seconds
- Context window utilization (aim for 80%+ of available tokens)
- Local inference cost savings vs. cloud APIs

### **Layer 2: World Model**
- Data freshness (15-minute ingestion target)
- Vector search relevance scores
- Cross-reference accuracy between data sources

### **Layer 3: Intelligence**
- Agent action success rate (% of recommendations followed)
- Cross-agent conflict frequency (should decrease over time)
- Human intervention required (should trend down after Month 1)

### **Layer 4: Surfaces**
- User adoption rates (patients, providers, team)
- Surface uptime and response speed
- Friction metrics (steps to complete key actions)

### **Business Impact**
- **Month 4 Target:** 50% reduction in manual coordination tasks
- **Month 6 Target:** Patient satisfaction 85%+, provider efficiency +30%
- **Month 12 Target:** Predictive insights driving 20% improvement in clinical outcomes

---

## 🚀 IMPLEMENTATION ROADMAP

### **Phase 1: Foundation (Weeks 1-4)**
- Deploy vector database infrastructure
- Build basic Single Brain data pipeline
- Create Athena Agent (patient onboarding only)
- Implement basic security layers

### **Phase 2: Core Agents (Weeks 5-8)**
- Deploy Hygeia Agent (clinical workflows)
- Add Viral Agent (content creation)
- Implement agent communication system
- Begin data accumulation for patterns

### **Phase 3: Intelligence (Weeks 9-12)**
- Deploy Compliance and Growth agents
- Implement World Agent coordination
- Build advanced analytics and insights
- Begin automated decision-making

### **Phase 4: Optimization (Month 4+)**
- Fine-tune agent interactions
- Implement predictive capabilities
- Optimize for compounding effects
- Scale based on pattern recognition

---

## 🔮 THE TULILA ADVANTAGE

**Why This Creates an Unbeatable Moat:**

1. **Accumulated Patient Data:** Months of symptom-to-outcome patterns that competitors can't replicate quickly
2. **Clinical Intelligence:** Provider decision-making enhanced by aggregated treatment success data
3. **Content Optimization:** Viral strategy refined by actual patient conversion data
4. **Regulatory Agility:** Compliance monitoring that adapts to changing rules automatically
5. **Network Effects:** Each patient improves the system for all future patients

**Bottom Line:** Any competitor can copy the technology. They cannot copy months of accumulated intelligence from your specific patient population and business operations.

---

*"The model isn't the AI. The model is the data structure that lets the AI understand your specific business."* - Eric Siu

**Next Step:** Begin Phase 1 implementation with vector database setup and Athena Agent MVP.