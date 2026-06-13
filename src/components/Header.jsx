import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '#concept', label: 'コンセプト' },
  { href: '#menu', label: 'メニュー' },
  { href: '#access', label: 'アクセス' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-rice/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex flex-col leading-none" onClick={closeMenu}>
          <span className="text-lg font-black">ロクパ</span>
          <span className="mt-1 text-xs font-bold tracking-[0.24em] text-spice">rogspa</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-ink/75 transition hover:text-spice">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="tel:09020143735" className="button-primary hidden px-5 py-2.5 md:inline-flex">
          <Phone size={18} />
          電話で予約
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="メニューを開閉"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-rice px-5 py-4 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2" aria-label="モバイルナビゲーション">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-bold text-ink/80 hover:bg-cream"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:09020143735" className="button-primary mt-2" onClick={closeMenu}>
              <Phone size={18} />
              電話で予約する
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
