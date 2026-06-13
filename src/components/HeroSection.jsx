import { ArrowDown, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="top" className="overflow-hidden bg-cream">
      <div className="section-shell grid items-center gap-10 pb-20 pt-12 lg:grid-cols-[1fr_0.95fr] lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow">Mukonoso Spice Curry</p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            ロクパ
            <span className="mt-2 block text-2xl font-black text-spice sm:text-3xl">rogspa</span>
          </h1>
          <p className="mt-6 text-2xl font-black leading-snug sm:text-3xl">
            厳選スパイスが織りなす、
            <span className="block text-spice">一皿で3つの味わい。</span>
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink/75">
            豆カレー、花山椒カレー、そして日替わり。こだわりのスパイスカレーをワンプレートでご提供。
            19時からは夜カレーと特製ビリヤニもご用意しております。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="tel:09020143735" className="button-primary">
              <Phone size={19} />
              電話で予約する
            </a>
            <a href="#menu" className="button-secondary">
              メニューを見る
              <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="absolute -left-4 top-8 h-20 w-20 rounded-full bg-turmeric/50 blur-3xl" />
          <img
            src="./images/hero-curry.svg"
            alt="3種のカレーを盛り合わせたワンプレートのイメージ"
            className="relative mx-auto aspect-square w-full max-w-[520px] rounded-[2rem] object-cover shadow-warm"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-4 shadow-warm backdrop-blur sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="text-sm font-black text-spice">夜は特製ビリヤニ</p>
            <p className="mt-1 text-sm font-bold leading-6 text-ink/75">当日予約は17:00まで。お電話で承ります。</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
