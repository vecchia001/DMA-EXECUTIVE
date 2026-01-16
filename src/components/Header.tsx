import LanguageSelector from './LanguageSelector';
import logo from '@/assets/logo.jpeg';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 sm:px-8 flex justify-between items-center border-b border-border/50">
      <div className="flex items-center gap-4">
        <img 
          src={logo} 
          alt="DMA Executive Logo" 
          className="h-10 w-auto object-contain"
        />
        <span className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-foreground">
          Azienda NCC
        </span>
      </div>
      <LanguageSelector />
    </header>
  );
};

export default Header;
