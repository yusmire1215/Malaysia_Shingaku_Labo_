export default function MarqueeBar() {
  const items = [
    "INTI University",
    "Sunway University",
    "Monash University",
    "Taylor's University",
    "Malaysia Study",
    "Free Consultation",
    "English Education",
    "ASEAN Hub",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="bg-navy-950 py-4 overflow-hidden border-y border-navy-900">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-8">
            <span className="label-tag text-white/40 tracking-widest3">{item}</span>
            <span className="w-1 h-1 rounded-full bg-gold-400 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
