"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { TextReveal } from "./text-animations";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -40]); // parallax
  const float = {
    initial: { y: 0 },
    animate: { y: [0, -12, 0] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24">
      {/* Background gradient animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[10%] right-[0%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[100px]"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 md:grid-cols-2 md:items-center md:gap-20 md:pb-32">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border bg-background/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-md"
          >
            <span className="mr-2 flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            v2.0 is now live
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <TextReveal
              className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl leading-[1.1]"
              text="Build faster with a premium template"
              delayPerWord={0.06}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-lg text-lg text-muted-foreground md:text-xl leading-relaxed"
            >
              {siteConfig.description} Designed for startups who demand excellence.
              Production-ready code, stunning design, and seamless animations.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-12 px-8 text-base font-medium shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30"
            >
              <a href="#pricing">Get Started</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base font-medium backdrop-blur-sm hover:bg-accent/50"
            >
              <a href="#features">View Demo</a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-background bg-muted"
                  style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`, backgroundSize: 'cover' }}
                />
              ))}
            </div>
            <p>Trusted by 1,000+ developers</p>
          </motion.div>
        </div>

        {/* Right Content (Mockup) */}
        <motion.div
          style={{ y }}
          initial="initial"
          animate="animate"
          variants={float}
          className="relative mx-auto w-full max-w-[600px] md:max-w-none"
        >
          <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md dark:bg-black/20">
            <div className="overflow-hidden rounded-xl border border-white/5 bg-background shadow-inner">
              <motion.img
                src="/product-dashboard-mockup.png"
                alt="Dashboard Preview"
                className="h-full w-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, delay: 5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
