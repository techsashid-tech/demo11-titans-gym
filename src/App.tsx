import { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Programs from './components/Programs';
import Membership from './components/Membership';
import BmiCalculator from './components/BmiCalculator';
import RotatingGallery from './components/RotatingGallery';
import Reviews from './components/Reviews';
import FaqSection from './components/FaqSection';
import LocationMaps from './components/LocationMaps';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import TrialModal from './components/TrialModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [ambientActive, setAmbientActive] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const handleOpenTrial = (plan?: string) => {
    setSelectedPlan(plan);
    setTrialModalOpen(true);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative ${
        isLightMode ? 'bg-[#f4f4f7] text-stone-900' : 'bg-[#070709] text-stone-100'
      } ${ambientActive ? 'arena-glow' : ''}`}
    >
      {/* 3D Intro Preloader matching Screenshot 1 */}
      <Preloader />

      {/* Global Navbar with Dark/Light Mode, Sound, and Ambient Flashes */}
      <Navbar
        onOpenTrial={() => handleOpenTrial()}
        ambientActive={ambientActive}
        onToggleAmbient={() => setAmbientActive(!ambientActive)}
        isLightMode={isLightMode}
        onToggleTheme={() => setIsLightMode(!isLightMode)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenTrial={() => handleOpenTrial()} isLightMode={isLightMode} />
        <About isLightMode={isLightMode} />
        <Facilities isLightMode={isLightMode} />
        <Programs onOpenTrial={() => handleOpenTrial()} isLightMode={isLightMode} />
        <Membership onSelectPlan={(plan) => handleOpenTrial(plan)} isLightMode={isLightMode} />
        <BmiCalculator onOpenTrial={() => handleOpenTrial()} isLightMode={isLightMode} />

        {/* 
          TITANS 3D GALLERY SECTION WITH "OPEN FULL GOOGLE PHOTOS GALLERY" BUTTON 
          AND 3D LIGHT-PASSING EFFECT
        */}
        <RotatingGallery isLightMode={isLightMode} />

        {/* REVIEWS SECTION WITH DIRECT GOOGLE MAPS REVIEW URL */}
        <Reviews isLightMode={isLightMode} />

        {/* FAQ SECTION MATCHING SCREENSHOT 8 */}
        <FaqSection isLightMode={isLightMode} />

        {/* STRATEGIC LOCATION & GOOGLE MAPS SECTION MATCHING SCREENSHOT 9 */}
        <LocationMaps isLightMode={isLightMode} />

        {/* CONTACT SECTION WITH STYLISH PRIVACY POLICY CHECKBOX MATCHING SCREENSHOT 10 */}
        <ContactSection
          onOpenPrivacy={() => setPrivacyModalOpen(true)}
          isLightMode={isLightMode}
        />
      </main>

      {/* FOOTER MATCHING SCREENSHOT 11 WITH PRIVACY POLICY MODAL TRIGGER */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        isLightMode={isLightMode}
      />

      {/* FLOATING SOCIAL ACTIONS & DIRECT CALL HUBS MATCHING SCREENSHOT 12 */}
      <FloatingActions />

      {/* PASS & TRIAL BOOKING MODAL */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        selectedPlan={selectedPlan}
      />

      {/* STYLISH PRIVACY POLICY MODAL AS REQUESTED */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        isLightMode={isLightMode}
      />
    </div>
  );
}
