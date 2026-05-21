"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 5000, suffix: "+", label: "Happy renters" },
  { target: 320,  suffix: "+", label: "Cars available" },
  { target: 98,   suffix: "%", label: "Satisfaction rate" },
  { target: 24,   suffix: "/7", label: "Customer support" },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const increment = Math.ceil(target / (1800 / 16));
      let current = 0;
      const tick = () => {
        current = Math.min(current + increment, target);
        setCount(current);
        if (current < target) requestAnimationFrame(tick);
      };
      tick();
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl font-semibold text-blue-600">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">DriveFleet in numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-white py-10 px-6 text-center">
              <Counter target={s.target} suffix={s.suffix} />
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}