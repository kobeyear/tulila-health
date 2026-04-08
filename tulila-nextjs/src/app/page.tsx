import { AnimatedHero } from "@/components/ui/animated-hero";
import { MenopauseAssessment } from "@/components/menopause-assessment";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <AnimatedHero />
      
      {/* ASSESSMENT SECTION */}
      <section id="assessment" className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-purple-600 uppercase tracking-wider font-medium mb-4">
              PERSONALIZED MENOPAUSE EVALUATION
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Take Your <span className="text-purple-600">Free Assessment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get personalized insights about your menopause symptoms and discover if hormone therapy is right for you. 
              Takes 2-3 minutes, completely confidential.
            </p>
          </div>
          
          <MenopauseAssessment />
        </div>
      </section>

      {/* WHOLE-BODY CARE SECTION */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-4">
            <p className="text-xs text-purple-600 uppercase tracking-wider font-medium">CARE DESIGNED FOR WOMEN&apos;S HEALTH</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Benefits List */}
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-800 mb-8 leading-tight">
                Whole-body care for <span className="text-purple-600">her balance, vitality, and confidence</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Hormone balance optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Sleep quality improvement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Energy & mood support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Cognitive clarity restoration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Sexual health revitalization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Bone density protection</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="#assessment" 
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-4 rounded-full hover:from-purple-700 hover:to-purple-800 transition shadow-lg"
                >
                  Start Free Assessment
                </a>
              </div>
            </div>
            
            {/* Lifestyle Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-6 max-w-lg">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8 shadow-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Energy</h3>
                      <p className="text-sm text-gray-600">Feel vibrant again</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-3xl p-8 shadow-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Clarity</h3>
                      <p className="text-sm text-gray-600">Think clearly</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-8 shadow-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a4 4 0 014 4v2a4 4 0 01-4 4H9m0-10V9a4 4 0 014-4h2a4 4 0 014 4v1m0 0V9a4 4 0 00-4-4H9a4 4 0 00-4 4v2a4 4 0 004 4h6z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Sleep</h3>
                      <p className="text-sm text-gray-600">Rest peacefully</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-3xl p-8 shadow-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Confidence</h3>
                      <p className="text-sm text-gray-600">Be yourself again</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS SECTION */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-purple-600 uppercase tracking-wider font-medium mb-4">PERSONALIZED TREATMENT</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Treatment options designed <span className="text-purple-600 italic">just for you</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based hormone therapy with medical supervision every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Essential Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential</h3>
                <p className="text-gray-600 mb-6">Core hormone therapy for symptom relief</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$89</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Monthly doctor consultation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Hormone therapy medication</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Free shipping</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
                <a href="#assessment" className="block w-full bg-purple-100 text-purple-700 font-semibold py-4 rounded-2xl hover:bg-purple-200 transition text-center">
                  Get Started
                </a>
              </div>
            </div>

            {/* Comprehensive Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive</h3>
                <p className="text-gray-600 mb-6">Complete care with lifestyle support</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$129</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Everything in Essential</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Bi-weekly check-ins</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Nutrition guidance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Exercise recommendations</span>
                  </li>
                </ul>
                <a href="#assessment" className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition text-center">
                  Get Started
                </a>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <p className="text-gray-600 mb-6">Concierge-level personalized care</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$169</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Everything in Comprehensive</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Weekly consultations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">24/7 on-demand support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Hormone optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Custom supplement protocol</span>
                  </li>
                </ul>
                <a href="#assessment" className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-4 rounded-2xl hover:from-yellow-600 hover:to-yellow-700 transition text-center">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 mb-4">
              All plans include a 30-day satisfaction guarantee
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>HIPAA-compliant • Secure • Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-purple-600 uppercase tracking-wider font-medium mb-4">PATIENT STORIES</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real women. <span className="text-purple-600 italic">Real results.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from women who took control of their menopause journey with Tulila.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex text-yellow-400 text-lg mb-4">
                  ★★★★★
                </div>
                <p className="text-gray-700 italic mb-6">
                  &ldquo;After 6 months of struggling with night sweats and brain fog, Tulila gave me my life back. 
                  The doctor actually listened and the treatment worked within weeks.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">SJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah J.</p>
                  <p className="text-sm text-gray-500">Age 47, Texas</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex text-yellow-400 text-lg mb-4">
                  ★★★★★
                </div>
                <p className="text-gray-700 italic mb-6">
                  &ldquo;My previous doctor said &apos;it&apos;s just aging&apos; but Tulila showed me it was treatable. 
                  I feel like myself again for the first time in years.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria R.</p>
                  <p className="text-sm text-gray-500">Age 52, California</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex text-yellow-400 text-lg mb-4">
                  ★★★★★
                </div>
                <p className="text-gray-700 italic mb-6">
                  &ldquo;The convenience of having everything delivered and the ongoing support from my doctor 
                  made all the difference. I wish I&apos;d found Tulila sooner.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">LK</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Linda K.</p>
                  <p className="text-sm text-gray-500">Age 49, Florida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to feel like <span className="italic">yourself</span> again?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join thousands of women who&apos;ve transformed their menopause experience with personalized hormone therapy.
          </p>
          
          <div className="space-y-4 mb-8">
            <a 
              href="#assessment" 
              className="inline-block bg-white text-purple-700 font-bold text-lg px-10 py-4 rounded-full hover:bg-purple-50 transition shadow-xl"
            >
              Take Free Assessment
            </a>
            <p className="text-sm opacity-75">
              2-minute assessment • Free consultation • No commitment • 30-day guarantee
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-85">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>HIPAA-compliant & secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Licensed doctors in 50 states</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <span>Free nationwide shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Tulila<span className="text-purple-400">.</span></h3>
              <p className="text-sm mb-6 leading-relaxed">
                Evidence-based menopause care delivered with compassion and expertise. 
                Helping women reclaim their vitality and confidence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.017 0H7.983C3.606 0 0 3.606 0 7.983v4.034C0 16.394 3.606 20 7.983 20h4.034C16.394 20 20 16.394 20 12.017V7.983C20 3.606 16.394 0 12.017 0zM10 15a5 5 0 110-10 5 5 0 010 10zm6.5-11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Our Doctors</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Clinical Studies</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Patient Portal</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Insurance</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Pharmacy</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">HIPAA Notice</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Refund Policy</a></li>
                <li><a href="#" className="text-sm hover:text-white transition">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">
                © 2024 Tulila Health. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-4 md:mt-0">
                Made with ❤️ for women&apos;s health
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}