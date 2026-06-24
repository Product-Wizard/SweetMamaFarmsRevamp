import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="/grains.png"
                alt="Sweet Mama Farms Heritage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl max-w-[280px] hidden md:block">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-primary text-xl">100+</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Years of Knowledge</h4>
                  <p className="text-sm text-muted-foreground mt-1">Combined family expertise in agriculture.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rooted in Heritage, <br />
              <span className="text-accent">Built for the Future.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sweet Mama Farms is a full service agri-business with over a century of combined family knowledge behind every decision we make. We source food and farm produce directly from growers and producers — and handle every step between harvest and customer delivery.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our integrated supply chain covers processing, packaging, transportation, and warehousing, enabling us to serve donor agencies, food manufacturers, retailers, and export markets across Europe and Asia.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Direct sourcing from trusted Nigerian growers",
                "Full supply chain: harvest to final delivery",
                "Customised packaging for every client type",
                "Export-ready across Europe and Asia",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary h-6 w-6 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <div className="w-16 h-1 bg-primary rounded-full" />
              <p className="font-display font-bold text-xl italic text-foreground/80">
                "Combining over 100 years of hard work and shared family knowledge."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
