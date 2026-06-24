import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://whatsapp.com/channel/0029VbCRprfFSAsvmQSiqZ1L"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full grid place-items-center shadow-glow bg-[#25D366] hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-7 text-white" />
    </a>
  );
}
