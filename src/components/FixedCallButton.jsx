import { Phone } from 'lucide-react';

export default function FixedCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-spice/20 bg-rice/95 px-4 py-3 shadow-[0_-10px_30px_rgba(102,63,22,0.12)] backdrop-blur md:hidden">
      <a href="tel:09020143735" className="flex items-center justify-center gap-3 rounded-full bg-spice px-5 py-3 text-white">
        <Phone size={21} />
        <span className="flex flex-col leading-tight">
          <span className="text-base font-black">電話する</span>
          <span className="text-xs font-bold text-white/90">ビリヤニ予約は17:00まで</span>
        </span>
      </a>
    </div>
  );
}
