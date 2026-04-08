"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { calculateHRTScore, getCandidacyColor, getCandidacyText, type AssessmentData, type ScoringResult } from '@/lib/assessment-scoring';

interface FormData {
  age_range: string;
  menstrual_status: string;
  symptoms: string[];
  symptom_severity: string;
  previous_treatments: string[];
  medical_history: string[];
  first_name: string;
  email: string;
  phone: string;
}

export function MenopauseAssessment() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    age_range: '',
    menstrual_status: '',
    symptoms: [],
    symptom_severity: '',
    previous_treatments: [],
    medical_history: [],
    first_name: '',
    email: '',
    phone: ''
  });
  const [results, setResults] = useState<ScoringResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const totalSteps = 7;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.age_range !== '';
      case 2: return formData.menstrual_status !== '';
      case 3: return formData.symptoms.length > 0;
      case 4: return formData.symptom_severity !== '';
      case 5: return formData.previous_treatments.length > 0;
      case 6: return formData.medical_history.length > 0;
      case 7: return formData.first_name !== '' && formData.email !== '';
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Calculate HRT score
      const assessmentData: AssessmentData = {
        age_range: formData.age_range,
        menstrual_status: formData.menstrual_status,
        symptoms: formData.symptoms,
        symptom_severity: formData.symptom_severity,
        previous_treatments: formData.previous_treatments,
        medical_history: formData.medical_history
      };
      
      const scoringResult = calculateHRTScore(assessmentData);
      setResults(scoringResult);
      
      // Save to database
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          hrt_score: scoringResult.score,
          hrt_candidacy: scoringResult.candidacy,
          summary: scoringResult.summary
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to save assessment');
      }
      
      // Move to results view
      setCurrentStep(8);
      
    } catch (err) {
      setError('Failed to process assessment. Please try again.');
      console.error('Assessment submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleArrayItem = (array: string[], item: string) => {
    if (array.includes(item)) {
      return array.filter(i => i !== item);
    } else {
      return [...array, item];
    }
  };

  // Step 1: Age
  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What is your age?</h2>
        <p className="text-gray-600 mb-8">Select the range that applies to you.</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {['35-39', '40-44', '45-49', '50-54', '55-59', '60+'].map((age) => (
          <button
            key={age}
            onClick={() => setFormData({...formData, age_range: age})}
            className={`p-6 rounded-2xl border-2 text-left font-medium transition-all duration-200 ${
              formData.age_range === age
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
            }`}
          >
            {age}
          </button>
        ))}
      </div>
    </div>
  );

  // Step 2: Menstrual Status
  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Which best describes your current menstrual status?
        </h2>
        <p className="text-gray-600 mb-8">This helps us understand where you are in the transition.</p>
      </div>
      
      <div className="space-y-4">
        {[
          { value: 'regular', label: 'Regular periods' },
          { value: 'irregular', label: 'Irregular periods (sometimes skip months, unpredictable timing)' },
          { value: '6-12-months', label: "Haven't had a period in 6–12 months" },
          { value: '12-months', label: 'No period for 12+ months' },
          { value: 'hysterectomy', label: 'Had a hysterectomy' }
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => setFormData({...formData, menstrual_status: option.value})}
            className={`w-full p-6 rounded-2xl border-2 text-left transition-all duration-200 ${
              formData.menstrual_status === option.value
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  // Step 3: Symptoms
  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What symptoms are you experiencing?
        </h2>
        <p className="text-gray-600 mb-8">Select all that apply.</p>
      </div>
      
      <div className="space-y-3">
        {[
          { value: 'hot-flashes', label: 'Hot flashes / night sweats' },
          { value: 'sleep-issues', label: 'Difficulty sleeping / insomnia' },
          { value: 'brain-fog', label: 'Brain fog / trouble concentrating' },
          { value: 'mood-swings', label: 'Mood swings / irritability' },
          { value: 'anxiety', label: 'Anxiety or depression' },
          { value: 'weight-gain', label: 'Weight gain (especially around midsection)' },
          { value: 'low-energy', label: 'Low energy / fatigue' },
          { value: 'low-libido', label: 'Low libido / decreased sexual desire' },
          { value: 'vaginal-dryness', label: 'Vaginal dryness or pain during intercourse' },
          { value: 'joint-pain', label: 'Joint pain or stiffness' }
        ].map((symptom) => (
          <button
            key={symptom.value}
            onClick={() => setFormData({
              ...formData, 
              symptoms: toggleArrayItem(formData.symptoms, symptom.value)
            })}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
              formData.symptoms.includes(symptom.value)
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <span>{symptom.label}</span>
            {formData.symptoms.includes(symptom.value) && (
              <CheckCircle className="w-5 h-5 text-purple-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );

  // Step 4: Severity  
  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          How severely do your symptoms affect your daily life?
        </h2>
        <p className="text-gray-600 mb-8">Be honest — there&rsquo;s no wrong answer.</p>
      </div>
      
      <div className="space-y-4">
        {[
          { value: 'mild', label: 'Mildly — noticeable but manageable' },
          { value: 'moderate', label: 'Moderately — affecting my work, sleep, or relationships' },
          { value: 'severe', label: 'Severely — significantly impacting my quality of life' },
          { value: 'struggling', label: "I'm struggling and need help now" }
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => setFormData({...formData, symptom_severity: option.value})}
            className={`w-full p-6 rounded-2xl border-2 text-left transition-all duration-200 ${
              formData.symptom_severity === option.value
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  // Step 5: Previous Treatments
  const renderStep5 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Have you tried any treatments for your symptoms?
        </h2>
        <p className="text-gray-600 mb-8">Select all that apply.</p>
      </div>
      
      <div className="space-y-3">
        {[
          { value: 'hormone-therapy', label: 'Hormone therapy (current or past)' },
          { value: 'antidepressants', label: 'Antidepressants prescribed for menopause symptoms' },
          { value: 'supplements', label: 'Over-the-counter supplements (black cohosh, evening primrose, etc.)' },
          { value: 'lifestyle', label: 'Lifestyle changes (exercise, diet, meditation)' },
          { value: 'nothing', label: "Nothing yet — I don't know where to start" },
          { value: 'dismissed', label: 'My doctor dismissed my symptoms' }
        ].map((treatment) => (
          <button
            key={treatment.value}
            onClick={() => setFormData({
              ...formData,
              previous_treatments: toggleArrayItem(formData.previous_treatments, treatment.value)
            })}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
              formData.previous_treatments.includes(treatment.value)
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <span>{treatment.label}</span>
            {formData.previous_treatments.includes(treatment.value) && (
              <CheckCircle className="w-5 h-5 text-purple-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );

  // Step 6: Medical History
  const renderStep6 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Do you have any of the following?
        </h2>
        <p className="text-gray-600 mb-8">This helps us ensure your safety. Select all that apply.</p>
      </div>
      
      <div className="space-y-3">
        {[
          { value: 'breast-cancer', label: 'History of breast cancer' },
          { value: 'blood-clots', label: 'History of blood clots (DVT, PE)' },
          { value: 'liver-disease', label: 'Active liver disease' },
          { value: 'vaginal-bleeding', label: 'Unexplained vaginal bleeding' },
          { value: 'heart-stroke', label: 'History of stroke or heart attack' },
          { value: 'none', label: 'None of the above' }
        ].map((condition) => (
          <button
            key={condition.value}
            onClick={() => {
              let newHistory;
              if (condition.value === 'none') {
                newHistory = ['none'];
              } else {
                newHistory = toggleArrayItem(
                  formData.medical_history.filter(h => h !== 'none'), 
                  condition.value
                );
              }
              setFormData({...formData, medical_history: newHistory});
            }}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
              formData.medical_history.includes(condition.value)
                ? condition.value === 'none' 
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <span>{condition.label}</span>
            {formData.medical_history.includes(condition.value) && (
              condition.value === 'none' ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )
            )}
          </button>
        ))}
      </div>
    </div>
  );

  // Step 7: Contact Information
  const renderStep7 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Almost there!</h2>
        <p className="text-gray-600 mb-8">Enter your details to see your personalized results.</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
          <input
            type="text"
            value={formData.first_name}
            onChange={(e) => setFormData({...formData, first_name: e.target.value})}
            placeholder="Your first name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="your@email.com"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone <span className="text-gray-500">(optional)</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="(555) 555-5555"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );

  // Results Step
  const renderResults = () => {
    if (!results) return null;

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Assessment Results
          </h2>
          <p className="text-gray-600">
            Based on your responses, here&rsquo;s your personalized evaluation:
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100">
          <div className="text-center mb-6">
            <div className={`inline-block px-6 py-3 rounded-full text-lg font-semibold ${getCandidacyColor(results.candidacy)}`}>
              {getCandidacyText(results.candidacy)}
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold text-purple-600">{results.score}</span>
              <span className="text-gray-500 ml-2">/ 100</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-6">
            <p className="text-gray-700 leading-relaxed text-lg">{results.summary}</p>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-4 rounded-full hover:from-purple-700 hover:to-purple-800 transition shadow-lg">
              Book Free Consultation
            </button>
            <p className="text-sm text-gray-500 mt-3">
              Speak with a menopause specialist about your results
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      case 6: return renderStep6();
      case 7: return renderStep7();
      case 8: return renderResults();
      default: return renderStep1();
    }
  };

  if (currentStep === 8) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderResults()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
              initial={{ width: "14%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            {renderCurrentStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {currentStep < 8 && (
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-purple-600 hover:text-purple-700'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            <button
              onClick={nextStep}
              disabled={!isStepValid() || loading}
              className={`px-8 py-4 rounded-full font-semibold transition ${
                isStepValid() && !loading
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {loading ? 'Processing...' : currentStep === totalSteps ? 'Get Results' : 'Continue'}
            </button>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}