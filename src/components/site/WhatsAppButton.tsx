import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/0000000000?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20the%20DevOps%20%26%20Cloud%20Bootcamp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full grid place-items-center shadow-glow bg-[#25D366] hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-7 text-white" />
    </a>
  );
}
