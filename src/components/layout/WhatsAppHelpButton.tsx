
import { getWhatsAppSupportLink } from "@/lib/whatsapp/support-link";

export default function WhatsAppHelpButton() {
  const whatsappLink = getWhatsAppSupportLink();

  if (!whatsappLink) {
    return null;
  }

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact WheelsChess support on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-bold text-white shadow-lg transition hover:bg-green-700"
    >
      <span aria-hidden="true">💬</span>
      WhatsApp Help
    </a>
  );
}
