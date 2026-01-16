import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContactCards from '@/components/ContactCards';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <HeroSection />
      <ContactCards />
      <Footer />
    </div>
  );
};

export default Index;
