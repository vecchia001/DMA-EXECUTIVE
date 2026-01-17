import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactCards = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: Phone,
      label: t.phoneLabel,
      value: "+39 XXX XXX XXXX",
      href: "tel:+39XXXXXXXXXX",
    },
    {
      icon: Mail,
      label: t.emailLabel,
      value: t.email,
      href: `mailto:${t.email}`,
    },
    {
      icon: MapPin,
      label: t.locationLabel,
      value: t.location,
      href: null,
    },
  ];

  return (
    <section className="w-full py-12 px-6 border-t border-border/50 bg-secondary/30">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {contacts.map((contact, index) => {
          const CardContent = (
            <>
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                <contact.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {contact.label}
              </span>
              <span className="font-body text-sm text-foreground">
                {contact.value}
              </span>
            </>
          );

          if (contact.href) {
            return (
              <a
                key={index}
                href={contact.href}
                className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer"
              >
                {CardContent}
              </a>
            );
          }

          return (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/50 shadow-sm"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactCards;
