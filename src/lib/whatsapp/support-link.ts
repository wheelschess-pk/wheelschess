
export function getWhatsAppSupportLink(
  message = "Assalam-o-Alaikum, mujhe WheelsChess ke bare mein madad chahiye."
): string | null {
  const rawNumber = process.env.WHATSAPP_SUPPORT_NUMBER;

  if (!rawNumber) {
    return null;
  }

  const phone = rawNumber.replace(/\D/g, "");

  if (phone.length < 10 || phone.length > 15) {
    return null;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
