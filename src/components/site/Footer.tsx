import { Mail, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-14 mt-10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold text-foreground text-lg">
            <span className="size-7 rounded bg-gradient-brand shadow-glow" />
            ComplxSimple
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Premium DevOps & Cloud Engineering Bootcamp specializing in AWS & Microsoft Azure.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-foreground mb-3">Contact</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-brand" />
              <a href="mailto:jamesnnadi50@gmail.com" className="hover:text-foreground">
                jamesnnadi50@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-brand" />
              <a
                href="https://wa.me/0000000000"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-foreground mb-3">Follow</h4>
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="size-10 grid place-items-center rounded-lg border border-border bg-surface hover:border-brand/50 transition"
              >
                <Icon className="size-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-border text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} ComplxSimple. All rights reserved.
      </div>
    </footer>
  );
}
