import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f4ebd0] rounded-bl-[100px] md:rounded-bl-[250px] -z-10 opacity-60" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              <Briefcase size={16} />
              <span>Full Service Agri-Business</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 text-foreground tracking-tight">
              Welcome to<br />
              <span className="text-primary">Sweet Mama Farms</span>
            </h1>

            <p className="font-display text-lg md:text-xl italic text-secondary font-semibold mb-6 leading-relaxed">
              "Combining over 100 years of hard work and shared family knowledge"
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              We source food and farm produce from growers and producers and supply these wherever they are required — providing processing, packaging, transportation, and warehousing along the way.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full text-base px-8 h-14 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all group" asChild>
                <a href="#products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 h-14 bg-white/50 backdrop-blur-sm border-border/50 hover:bg-white/80" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-border/50 pt-8">
              <div>
                <div className="font-display font-bold text-3xl text-foreground">100+</div>
                <div className="text-sm text-muted-foreground font-medium">Years of Knowledge</div>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div>
                <div className="font-display font-bold text-3xl text-foreground">20+</div>
                <div className="text-sm text-muted-foreground font-medium">Product Lines</div>
              </div>
              <div className="w-px h-10 bg-border/50 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-display font-bold text-3xl text-foreground">3</div>
                <div className="text-sm text-muted-foreground font-medium">Continents Served</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full max-h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="/hero.png"
                alt="Fresh Nigerian Farm Produce"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-xl border border-white"
              >
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <img src="/sweet-mama-logo.jpg" alt="Sweet Mama Farms" className="h-10 w-10 rounded-full object-contain" />
                </div>
                <div>
                  <div className="font-bold text-foreground font-display">Harvest to Home</div>
                  <div className="text-sm text-muted-foreground">Processing, packaging, logistics — end to end.</div>
                </div>
              </motion.div>
            </div>

            <div className="absolute -z-10 top-1/2 -right-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -z-10 bottom-1/4 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
