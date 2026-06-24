import { motion } from "framer-motion";

const images = [
  { src: "/gallery-1.png", alt: "Nigerian rice fields at sunset", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery-2.png", alt: "Nigerian agricultural commodities", span: "" },
  { src: "/gallery-3.png", alt: "Cashew farm in Nigeria", span: "" },
  { src: "/gallery-4.png", alt: "Nigerian farmers at harvest", span: "" },
  { src: "/gallery-5.png", alt: "Cocoa pods on a Nigerian farm", span: "" },
  { src: "/gallery-6.png", alt: "Agricultural storage facility", span: "" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            From the Field
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into the farms, harvests, and landscapes behind every Sweet Mama Farms product.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[220px]">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-default ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
