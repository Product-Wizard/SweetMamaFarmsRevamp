import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Adeola Johnson",
    role: "Mother of 3, Lagos",
    text: "Since I discovered Sweet Mama garri and palm oil, I haven't looked back. The quality is exceptional, and it reminds me of the authentic taste from my hometown. It's truly a premium brand.",
  },
  {
    name: "Chuks Emmanuel",
    role: "Restaurant Owner, Abuja",
    text: "As a commercial buyer, consistency is everything. Sweet Mama Farms supplies our restaurant with fresh produce and poultry every week, and the quality has never dropped once.",
  },
  {
    name: "Hajia Fatima Bello",
    role: "Supermarket Manager, Kano",
    text: "Sweet Mama products fly off our shelves. Customers specifically ask for their packaged beans and grains because they are stone-free and cook perfectly. A reliable partner for our retail business.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fbf8f1]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Loved by Nigerian Families
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Hear what our retail customers and commercial partners have to say about the Sweet Mama difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border/40 relative"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 h-16 w-16" />
              
              <div className="flex gap-1 mb-6 text-accent relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 text-lg italic">
                "{test.text}"
              </p>
              
              <div className="mt-auto relative z-10">
                <div className="font-bold text-foreground font-display">{test.name}</div>
                <div className="text-sm text-muted-foreground">{test.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
