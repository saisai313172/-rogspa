import { ExternalLink, Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const details = [
  ['店舗名', 'ロクパ rogspa'],
  ['住所', '〒661-0033 兵庫県尼崎市南武庫之荘1丁目5−15−102'],
  ['アクセス', '尼崎市 武庫之荘駅周辺'],
  ['営業日', '金〜水曜日'],
  ['昼', '11:30〜19:00'],
  ['夜', '19:00〜21:00'],
  ['定休日', '木曜日'],
];

export default function AccessSection() {
  return (
    <section id="access" className="bg-rice">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">Access</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">店舗情報 / アクセス</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-white">
              {details.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-ink/10 px-5 py-4 last:border-b-0">
                  <dt className="text-sm font-black text-spice">{label}</dt>
                  <dd className="text-sm font-bold leading-6 text-ink/78">{value}</dd>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="tel:09020143735" className="button-primary">
                <Phone size={18} />
                090-2014-3735
              </a>
              <a
                href="https://www.instagram.com/rogspa/?hl=ja"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <Instagram size={18} />
                Instagram
                <ExternalLink size={16} />
              </a>
              <a href="https://www.facebook.com/rogspa" target="_blank" rel="noreferrer" className="button-secondary">
                <Facebook size={18} />
                Facebook
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="min-h-[420px] overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-sm">
            <iframe
              title="ロクパ rogspa Google Map"
              src="https://www.google.com/maps?q=%E3%80%92661-0033%20%E5%85%B5%E5%BA%AB%E7%9C%8C%E5%B0%BC%E5%B4%8E%E5%B8%82%E5%8D%97%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%981%E4%B8%81%E7%9B%AE5%E2%88%9215%E2%88%92102&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="sr-only">
              <MapPin />
              Google Map
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
