import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Grains & Cereals",
    description: "Premium grade rice, beans, maize, and millet sourced directly from the finest farms.",
    image: "/grains.png",
    color: "bg-amber-100",
  },
  {
    title: "Poultry & Eggs",
    description: "Farm-fresh eggs and healthy poultry raised in hygienic, free-range environments.",
    image: "/poultry.png",
    color: "bg-orange-100",
  },
  {
    title: "Fresh Vegetables",
    description: "Vibrant, nutrient-rich tomatoes, peppers, and greens hand-picked for quality.",
    image: "/vegetables.png",
    color: "bg-green-100",
  },
  {
    title: "Processed Foods",
    description: "Hygienically processed garri, yam flour, and plantain flour for quick, wholesome meals.",
    image: "/processed.png",
    color: "bg-stone-100",
  },
  {
    title: "Red Palm Oil",
    description: "Rich, unadulterated red palm oil extracted traditionally for that authentic home taste.",
    image: "/palm.png",
    color: "bg-red-100",
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Wholesome Goodness,<br />
              <span className="text-secondary">From Our Farms to You.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We cultivate, process, and package the finest agricultural products. Every item bearing the Sweet Mama name is a promise of quality, purity, and authentic Nigerian taste.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-white">
            Download Catalog
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-[2rem] overflow-hidden bg-card border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <div className={`absolute inset-0 opacity-20 ${product.color} mix-blend-multiply z-10`} />
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center text-secondary font-semibold text-sm group/btn cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-[2rem] bg-primary p-8 flex flex-col justify-center text-white shadow-xl shadow-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <h3 className="font-display text-3xl font-bold mb-4 relative z-10">
              Need bulk supply for your business?
            </h3>
            <p className="text-white/80 mb-8 relative z-10 text-lg">
              We partner with distributors, restaurants, and retailers across Nigeria to supply premium produce at scale.
            </p>
            <Button variant="secondary" size="lg" className="rounded-full w-fit bg-white text-primary hover:bg-white/90 relative z-10 font-bold" asChild>
              <a href="#contact">Become a Partner</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
