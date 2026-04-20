"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/components/sections/HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.section} id="home">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className={`col-12 col-md-6 ${styles.heroCopy}`}>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Make Your Business More Profitable Online
            </motion.h1>
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              WebMade Studio crafts high-converting websites, landing pages, and
              digital experiences for businesses that are ready to grow. We
              handle the tech — you handle the success.
            </motion.p>
            <motion.div
              className={styles.ctaWrap}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <a href="#features" className={styles.cta}>
                Get Started
              </a>
            </motion.div>
          </div>
          <div className="col-12 col-md-6">
            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src="/images/undraw_investing_7u74.svg"
                alt="Business growth illustration"
                width={760}
                height={570}
                className={styles.heroImage}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
