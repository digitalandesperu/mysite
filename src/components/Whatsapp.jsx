import WhatsAppIcon from "@/assets/icons/Whatsapp";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/51998994999"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-10 right-10 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg transition-all z-50 animate-bounce"
  >
    <WhatsAppIcon />
  </a>
);

export default WhatsAppButton;
