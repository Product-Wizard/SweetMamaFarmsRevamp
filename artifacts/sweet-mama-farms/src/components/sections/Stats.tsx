import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Years Combined Knowledge", desc: "Of shared family expertise" },
  { value: "20+", label: "Product Lines", desc: "Across grains, oils & cash crops" },
  { value: "3", label: "Continents Reached", desc: "Africa, Europe and Asia" },
  { value: "6", label: "Core Services", desc: "End-to-end agri-business" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#0f291e] relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center px-4 ${index % 2 === 0 ? "border-l-0 lg:border-l" : ""} ${index === 0 ? "lg:border-l-0" : ""}`}
            >
              <div className="font-display font-bold text-5xl md:text-6xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-white/60 text-sm">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
