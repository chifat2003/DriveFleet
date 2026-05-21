export default function WhyChooseUs() {
  const features = [
    { icon: "shield-check", title: "Verified vehicles", desc: "Every car is inspected and certified before listing. You rent with full confidence." },
    { icon: "clock", title: "24/7 support", desc: "Our team is available around the clock for bookings, emergencies, and anything in between." },
    { icon: "coin", title: "Transparent pricing", desc: "No hidden fees, no surprises. The price you see is the price you pay — always." },
    { icon: "map-pin", title: "Flexible pickup", desc: "Pick up from the most convenient location near you. Returns are just as simple." },
    { icon: "certificate", title: "Top rated cars", desc: "Our fleet is rated by real renters. Choose based on genuine reviews and honest feedback." },
    { icon: "bolt", title: "Instant booking", desc: "Book in seconds. No lengthy approvals — your car is confirmed immediately." },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
          ★ Why choose us
        </span>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Everything you need for a seamless rental experience
        </h2>
        <p className="text-gray-500 text-sm mb-12 max-w-lg">
          From verified vehicles to round-the-clock support, DriveFleet is built to make every journey effortless.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-lg">◈</span>
              </div>
              <p className="font-medium text-gray-900 mb-1.5">{f.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}