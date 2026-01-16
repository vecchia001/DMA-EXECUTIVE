import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpeg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <img 
          src={logo} 
          alt="DMA Executive Logo" 
          className="h-32 sm:h-44 w-auto mx-auto mb-8 object-contain"
        />
        
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-wide text-foreground mb-4">
          Azienda NCC
        </h1>
        
        <p className="font-heading text-lg sm:text-xl text-muted-foreground tracking-widest uppercase mb-8">
          {t.tagline}
        </p>
        
        <div className="w-16 h-px bg-primary/30 mx-auto mb-8" />
        
        <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          {t.description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
