import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import TrustedBy from './components/TrustedBy'
import Tracks from './components/Tracks'
import Curriculum from './components/Curriculum'
import Support from './components/Support'
import Mentors from './components/Mentors'
import Testimonials from './components/Testimonials'
import ForYou from './components/ForYou'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <TrustedBy />
        <Tracks />
        <Curriculum />
        <Support />
        <Mentors />
        <Testimonials />
        <ForYou />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
