import { motion } from "framer-motion";
import { ShieldCheck, Globe, Package, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: HeartHandshake,
    title: "100+ Years of Knowledge",
    description: "Combining over a century of shared family expertise in Nigerian agriculture, agri-trade, and food supply — we know this industry from the ground up.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "We export cash crops to Europe and Asia, serving commodity trading firms and manufacturers who rely on our consistent quality and reliable supply.",
  },
  {
    icon: Package,
    title: "End-to-End Supply Chain",
    description: "From sourcing directly with growers to processing, packaging, branding, warehousing, and final delivery — we manage every step so you don't have to.",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    description: "We supply donor agencies, food manufacturers, retailers, and distributors who demand uncompromising standards. Every shipment is traceable, verified, and certified.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#fbf8f1] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Sweet Mama Farms?
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just supply food. We bridge Nigeria's productive farmlands with businesses and families that need reliable, quality produce — at home and across the world.
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
              <p className="text-muted-foreground leading-relaxed text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
