import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import blackEyedBeansImg from "@assets/black-eyed-beans_1783109927249.jpg";
import iodizedSaltImg from "@assets/Iodized-Salt_1783109927252.jpg";
import maizeImg from "@assets/Maize-1-300x209_1783109927255.jpg";
import milletImg from "@assets/Millet-1_1783109927257.jpg";
import palmOilImg from "@assets/Palm-oil-300x169_1783109927258.jpg";
import riceImg from "@assets/Rice-300x169_1783109927260.jpg";
import sorghumImg from "@assets/sorghum-300x169_1783109927263.jpg";
import vegetableOilImg from "@assets/Vegetable-oil-2-300x209_1783109927264.jpg";
import sweetMamaRiceImg from "@assets/Sweet_mama_rice_1783101257458.jpg";
import rawCashewImg from "@assets/Raw-cashew-nuts-300x226_1783101257454.jpg";
import hibiscusImg from "@assets/Hibiscus-dry-300x200_1783101257453.jpg";
import driedGingerImg from "@assets/Dried-ginger-300x225_1783101257452.jpeg";
import sunflowerSeedsImg from "@assets/Sunflower-seeds_1783101257457.jpg";
import chickPeasImg from "@assets/chick-peas_1783101257449.jpg";
import soyBeansImg from "@assets/soy-beans-300x195_1783101257456.jpg";
import sheaNutsImg from "@assets/Shea-nut-300x169_1783101257455.jpg";
import cocoaImg from "@assets/Cocoa-300x200_1783101257451.jpg";

const exportCommodities = [
  { name: "Sweet Mama Rice", image: sweetMamaRiceImg },
  { name: "Raw Cashew Nuts", image: rawCashewImg },
  { name: "Hibiscus", image: hibiscusImg },
  { name: "Sesame Seeds", image: null },
  { name: "Dried Split Ginger", image: driedGingerImg },
  { name: "Sunflower Seeds", image: sunflowerSeedsImg },
  { name: "Chick Peas", image: chickPeasImg },
  { name: "Soy Beans", image: soyBeansImg },
  { name: "Shea Nuts", image: sheaNutsImg },
  { name: "Cocoa", image: cocoaImg },
  { name: "Peanuts", image: null },
];

const otherCommodities = [
  { name: "Rice", image: riceImg },
  { name: "Black-eyed Beans", image: blackEyedBeansImg },
  { name: "Sorghum", image: sorghumImg },
  { name: "Millet", image: milletImg },
  { name: "Maize / Corn", image: maizeImg },
  { name: "Iodized Salt", image: iodizedSaltImg },
  { name: "Bulk Palm Oil", image: palmOilImg },
  { name: "Vegetable Oil", image: vegetableOilImg },
];

const tabs = ["Export Commodities", "Other Commodities"];

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
              key={tab}
              data-testid={`tab-${i}`}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                active === i
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active === 0 ? (
            <motion.div
              key="export"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm border border-primary/20">
                  Export Commodities
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {exportCommodities.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    data-testid={`export-product-${index}`}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm leading-snug drop-shadow">
                        {item.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="other"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm border border-primary/20">
                  Other Commodities
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {otherCommodities.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    data-testid={`other-product-${index}`}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm leading-snug drop-shadow">
                        {item.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
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
