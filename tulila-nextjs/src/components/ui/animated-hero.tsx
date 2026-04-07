"use client"

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["life-changing", "transformative", "empowering", "liberating", "revolutionary"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleGetStarted = () => {
    // Scroll to assessment or trigger assessment
    const assessmentSection = document.getElementById('assessment');
    if (assessmentSection) {
      assessmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AuroraBackground className="min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          
          {/* Badge */}
          <div>
            <Button variant="outline" size="sm" className="gap-4 bg-white/80 text-purple-700 hover:bg-white/90 border-purple-200 backdrop-blur">
              When doctors say &ldquo;it&rsquo;s just aging&rdquo;
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Main Heading with Animation */}
          <div className="flex gap-4 flex-col text-center">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
              <span className="text-gray-900">Menopause care that&rsquo;s</span>
              <div className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 h-[1.2em]">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-purple-600 w-full text-center"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </div>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-700 max-w-3xl mx-auto">
              Doctor-prescribed hormone therapy delivered to your door. Join 50,000+ women who chose to 
              feel like themselves again. <strong className="text-gray-900">No more dismissive doctors. No more suffering in silence.</strong>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gap-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
              onClick={handleGetStarted}
            >
              Take Free Assessment
              <MoveRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              className="gap-4 bg-white/80 hover:bg-white/90 text-purple-700 border-purple-200 backdrop-blur" 
              variant="outline"
            >
              Talk to a provider
              <PhoneCall className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-700 mt-8">
            <div className="flex items-center gap-2">
              <div className="flex text-purple-500 text-xs">★★★★★</div>
              <span>4.9/5 • 50,000+ patients</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🏥 Licensed providers in 50 states</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🚚 Free shipping nationwide</span>
            </div>
          </div>

        </div>
      </div>
    </AuroraBackground>
  );
}

export { AnimatedHero };