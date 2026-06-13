import { AlertCircle, Clock, Moon, Sun } from 'lucide-react';

const menus = [
  {
    title: '昼のメニュー',
    time: '11:30〜19:00',
    body: 'カレーのワンプレートのみ',
    icon: Sun,
    image: './images/curry-plate.svg',
  },
  {
    title: '夜のメニュー',
    time: '19:00〜21:00',
    body: '夜カレー ＆ 特製ビリヤニ',
    icon: Moon,
    image: './images/biryani.svg',
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-cream">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Menu</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">昼はワンプレート、夜はビリヤニも。</h2>
          <p className="mt-4 text-base leading-8 text-ink/75">
            まずは3種のカレーを一皿で。夜の時間帯には、香り高い特製ビリヤニもご用意しています。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {menus.map(({ title, time, body, icon: Icon, image }) => (
            <article key={title} className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
              <img src={image} alt={`${title}のイメージ`} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-turmeric/25 text-spice">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl font-black">{title}</h3>
                </div>
                <p className="mt-5 flex items-center gap-2 text-base font-black text-ink">
                  <Clock size={19} className="text-spice" />
                  {time}
                </p>
                <p className="mt-3 text-base leading-7 text-ink/75">{body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border-2 border-spice bg-white p-5 shadow-warm sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-spice text-white">
              <AlertCircle size={26} />
            </div>
            <div>
              <p className="text-xl font-black leading-8 text-spice sm:text-2xl">
                ビリヤニの当日ご予約の締め切りは17:00まで・お電話でのご注文になっております
              </p>
              <a href="tel:09020143735" className="button-primary mt-5">
                今すぐ電話で予約する
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
