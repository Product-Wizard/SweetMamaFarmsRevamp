import { motion } from "framer-motion";
import { Briefcase, Globe, ShoppingBag, Truck, Heart, Wheat } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Corporate Trade",
    description:
      "We process and supply dry foods and edible oils in customised packaging to donor agencies and emergency/relief food distribution operators. We also supply bulk grains and cereals as ingredients to food and beverage manufacturers.",
    color: "bg-amber-50 text-amber-700 border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: Globe,
    title: "Export",
    description:
      "We export cash crops to Europe and Asia. Our customers include commodity trading firms and manufacturers who depend on our reliable quality and timely delivery.",
    color: "bg-green-50 text-green-700 border-green-100",
    iconBg: "bg-green-100",
  },
  {
    icon: ShoppingBag,
    title: "Wholesale & Distribution",
    description:
      "We distribute our own label and other brands of food cupboard staples and everyday groceries to supermarkets, bulk-breakers, and other stockists across Nigeria.",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: Truck,
    title: "Transport & Logistics",
    description:
      "We provide packaging, kitting, branding, marking, warehousing, transportation, distribution, and other logistics services — tailored for agri-businesses and food supply chains.",
    color: "bg-orange-50 text-orange-700 border-orange-100",
    iconBg: "bg-orange-100",
  },
  {
    icon: Heart,
    title: "Healthy & Organic Foods",
    description:
      "Through our Mimi's Health Food Stores initiative, we provide a wide range of food items catering for special dietary requirements — meeting the growing Nigerian demand for healthy and organic food.",
    color: "bg-rose-50 text-rose-700 border-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    icon: Wheat,
    title: "Animal Feed",
    description:
      "We process a wide range of raw materials for the animal feed industry including rice bran, maize offal, cassava chip, bonemeal, GNC, and PKC.",
    color: "bg-stone-50 text-stone-700 border-stone-100",
    iconBg: "bg-stone-200",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#fbf8f1] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide most services required between the place of harvest or production and our customer — from corporate supply to export, logistics to specialist retail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/40"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6`}>
                <service.icon size={26} strokeWidth={1.5} className="text-foreground/70" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
