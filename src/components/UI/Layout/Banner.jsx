import mountain from "../../../assets/mountain.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative w-full h-[110vh] flex flex-col items-center justify-center text-center overflow-hidden">
      <img
        src={mountain}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-90"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-6"
      >
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-2xl mb-4">
          Collect moments, not things
        </h1>
        <h3 className="text-white/90 text-lg md:text-2xl font-medium tracking-wide drop-shadow-md">
          Build your perfect travel itinerary with ease
        </h3>
      </motion.div>
    </section>
  );
};

export default Banner;
