import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ConceptSection from './components/ConceptSection.jsx';
import MenuSection from './components/MenuSection.jsx';
import AccessSection from './components/AccessSection.jsx';
import FixedCallButton from './components/FixedCallButton.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-rice text-ink">
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <MenuSection />
        <AccessSection />
      </main>
      <Footer />
      <FixedCallButton />
    </div>
  );
}
