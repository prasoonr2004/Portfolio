import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import LoadingScreen from '@/components/ui/LoadingScreen'
import Marquee from '@/components/ui/Marquee'
import HeroSection from '@/components/sections/HeroSection'
import ShowreelSection from '@/components/sections/ShowreelSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import WhySection from '@/components/sections/WhySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <LoadingScreen />
      <Navbar />

      <main>
        <HeroSection />
        <Marquee />
        <ShowreelSection />
        <ServicesSection />
        <PortfolioSection />
        <WhySection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
