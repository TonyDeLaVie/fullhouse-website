import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import LogoStrip from './components/LogoStrip.jsx'
import FocusRolesSection from './components/FocusRolesSection.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import ResultsSection from './components/ResultsSection.jsx'
import AboutUsSection from './components/AboutUsSection.jsx'
import CompetitiveAdvantageSection from './components/CompetitiveAdvantageSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LogoStrip />
      <FocusRolesSection />
      <HowItWorks />
      <ResultsSection />
      <AboutUsSection />
      <CompetitiveAdvantageSection />
      <Footer />
    </div>
  );
}

