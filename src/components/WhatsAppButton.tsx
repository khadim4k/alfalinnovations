import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "221784066315";

const getGreeting = () => {
  // Get current hour in Africa/Dakar timezone (UTC+0 / WAT)
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    hour12: false,
    timeZone: "Africa/Dakar",
  };
  const hour = parseInt(new Intl.DateTimeFormat("fr-FR", options).format(now));

  if (hour >= 6 && hour < 12) {
    return "Bonjour";
  } else if (hour >= 12 && hour < 18) {
    return "Bon après-midi";
  } else {
    return "Bonsoir";
  }
};

const getWhatsAppLink = (customMessage?: string) => {
  const greeting = getGreeting();
  const defaultMessage =
    customMessage ||
    `${greeting} ! Je vous contacte depuis le site Alfalinnovation. Je souhaite avoir des informations sur vos services.`;
  const encodedMessage = encodeURIComponent(defaultMessage);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
      
      {/* Pulse animation */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full" />
    </a>
  );
};

export { getWhatsAppLink, PHONE_NUMBER, getGreeting };
export default WhatsAppButton;
