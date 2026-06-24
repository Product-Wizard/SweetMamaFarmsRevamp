import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const exportCommodities = [
  "Sweet Mama Rice",
  "Raw Cashew Nuts",
  "Hibiscus",
  "Sesame Seeds",
  "Dried Split Ginger",
  "Sunflower Seeds",
  "Chick Peas",
  "Soy Beans",
  "Shea Nuts",
  "Cocoa",
  "Peanuts",
];

const otherCommodities = [
  "Rice",
  "Black-eyed Beans",
  "Sorghum",
  "Millet",
  "Maize / Corn",
  "Iodized Salt",
  "Bulk Palm Oil",
  "Vegetable Oil",
];

const tabs = [
  { label: "Export Commodities", items: exportCommodities },
  { label: "Other Commodities", items: otherCommodities },
];

export default function Products() {
  const [active, setActive] = useState(0);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground">
              We source, process, and supply premium commodities to clients across Nigeria, Europe, and Asia. Every product meets strict quality standards — from field to final delivery.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-white" asChild>
            <a href="#contact">Request a Quote</a>
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 bg-muted/40 p-1.5 rounded-2xl w-fit">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              data-testid={`tab-${i}`}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                active === i
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category label */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm border border-primary/20">
                {tabs[active].label}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {tabs[active].items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  data-testid={`product-card-${index}`}
                  className="group flex items-center gap-3 p-5 rounded-2xl border border-border/50 bg-card hover:border-primary/40 hover:bg-primary/5 hover:shadow-md transition-all duration-200 cursor-default"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-medium text-foreground text-sm leading-snug group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 rounded-[2rem] bg-secondary p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="relative z-10 max-w-xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Need bulk supply or customised packaging?
            </h3>
            <p className="text-white/75 text-base">
              We supply bulk grains, oils, and cash crops to food manufacturers, donor agencies, and distributors — in your preferred packaging and specification.
            </p>
          </div>
          <Button size="lg" className="shrink-0 rounded-full bg-white text-secondary hover:bg-white/90 font-bold relative z-10 text-base px-8 h-14" asChild>
            <a href="#contact">Become a Partner</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
