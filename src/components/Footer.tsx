import logo from '@/assets/logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 border-t border-border/50 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary-foreground rounded flex items-center justify-center p-1">
            <img 
              src={logo} 
              alt="DMA Executive Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-heading text-lg font-medium tracking-wide">
            Azienda NCC
          </span>
        </div>
        <p className="text-xs text-primary-foreground/60 tracking-wide">
          © {currentYear} Azienda NCC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
