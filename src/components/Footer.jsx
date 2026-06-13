import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream pb-24 md:pb-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-black">ロクパ rogspa</p>
          <p className="mt-2 text-sm font-bold text-ink/65">武庫之荘のスパイスカレー・ビリヤニ</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/rogspa/?hl=ja"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition hover:text-spice"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/rogspa"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition hover:text-spice"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
