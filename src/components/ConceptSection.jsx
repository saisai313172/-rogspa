import { Leaf, Sparkles, Utensils } from 'lucide-react';

const points = [
  { icon: Leaf, title: '豆カレー', text: 'やさしい旨みを土台に、毎日食べたくなる穏やかな味わい。' },
  { icon: Sparkles, title: '花山椒カレー', text: '香りとしびれがふわりと広がる、ロクパらしい個性。' },
  { icon: Utensils, title: '日替わり', text: 'その日の素材とスパイスで仕立てる、出会いの一皿。' },
];

export default function ConceptSection() {
  return (
    <section id="concept" className="bg-rice">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Concept</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">ルーではなく、スパイスから考えるカレー。</h2>
          </div>
          <p className="text-base leading-8 text-ink/75 sm:text-lg">
            ロクパは、日替わりのルーだけに頼るのではなく、スパイス自体を自ら厳選して一皿を組み立てるスパイスカレー店です。
            ワンプレートには「豆」「花山椒」「日替わり」の3種のカレー。香り、辛み、旨みの重なりを少しずつ混ぜながら、
            最後のひと口まで違う表情で楽しめます。
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {points.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-ink/10 bg-cream p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-turmeric/25 text-spice">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
