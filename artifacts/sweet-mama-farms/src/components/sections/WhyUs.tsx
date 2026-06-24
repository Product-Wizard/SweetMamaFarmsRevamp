import { motion } from "framer-motion";
import { ShieldCheck, Leaf, HeartHandshake, Truck } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No artificial preservatives or harmful chemicals. Just pure, wholesome goodness as nature intended.",
  },
  {
    icon: Truck,
    title: "Farm-to-Table",
    description: "We control the entire supply chain, ensuring absolute freshness from our soil to your family's dining table.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Certified",
    description: "Rigorous quality control processes and NAFDAC certifications guarantee the safety of every product.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted by Families",
    description: "A staple in Nigerian households, we've built a reputation for reliability, taste, and premium value.",
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#fbf8f1] relative overflow-hidden">
      {/* Decorative BG pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Sweet Mama Standard
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just grow food; we cultivate trust. Our commitment to excellence ensures that every meal prepared with our products is safe, nutritious, and delicious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/40"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <pillar.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
