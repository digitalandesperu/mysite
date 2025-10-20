import WhatsAppIcon from "@/assets/icons/Whatsapp";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/51998994999"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp - Digital Andes Perú"
    className="fixed bottom-10 right-10 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition-all z-50 animate-bounce focus:outline-none focus:ring-2 focus:ring-green-400"
  >
    <WhatsAppIcon />
  </a>
);

export default WhatsAppButton;
