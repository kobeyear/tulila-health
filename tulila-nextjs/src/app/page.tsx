import { AnimatedHero } from "@/components/ui/animated-hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedHero />
      
      {/* World-Class Design Preview */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 shadow-xl border border-purple-100">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ✨ World-Class Design System <span className="text-purple-600 italic">Complete!</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The complete site design is ready with aurora-themed sections, glass morphism, 
                and premium medical branding throughout.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">🎨 Design Features:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ <strong>Aurora hero</strong> with animated text</li>
                    <li>✅ <strong>Subtle aurora sections</strong> for consistency</li>
                    <li>✅ <strong>Glass morphism</strong> cards & buttons</li>
                    <li>✅ <strong>Premium typography</strong> hierarchy</li>
                    <li>✅ <strong>Medical authority</strong> white base</li>
                    <li>✅ <strong>Purple accent</strong> system</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">🚀 Complete Sections:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Aurora hero with animated text</li>
                    <li>✅ Whole-body care benefits</li>
                    <li>✅ Treatment options showcase</li>
                    <li>✅ Transparent pricing (3 tiers)</li>
                    <li>✅ Premium CTA section</li>
                    <li>✅ Professional footer</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">🎯 Next Steps:</h3>
                <p className="text-gray-700 mb-6">
                  The complete world-class design is implemented in the HTML version. 
                  Ready to migrate all sections to React components for the Next.js version?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/assessment" 
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-4 rounded-full hover:from-purple-700 hover:to-purple-800 transition shadow-lg"
                  >
                    View Complete Design
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                  <a 
                    href="/pricing" 
                    className="inline-flex items-center justify-center gap-3 bg-white/80 text-purple-700 font-semibold px-8 py-4 rounded-full border border-purple-200 hover:bg-white/90 transition backdrop-blur"
                  >
                    See Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}