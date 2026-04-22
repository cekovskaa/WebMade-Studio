"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { highlights } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import styles from "../../styles/components/sections/HighlightsSection.module.scss";

export function HighlightsSection() {
  return (
    <section className={styles.section} aria-label="Feature highlights">
      <div className="container">
        {highlights.map((item, index) => (
          <div
            className={`row align-items-center g-5 ${styles.block}`}
            key={item.author}
          >
            <div className={`col-lg-7 ${item.reverse ? "order-lg-2" : ""}`}>
              <FadeIn delay={0.05 * index}>
                <div className={styles.imageWrap}>
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="img-fluid"
                  />
                </div>
              </FadeIn>
            </div>
            <div className={`col-lg-5 ${item.reverse ? "order-lg-1" : ""}`}>
              <FadeIn delay={0.08 * index}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.description}</p>
                <motion.div
                  className={styles.quoteCard}
                  initial={{ x: item.reverse ? -68 : 68 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.62,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.06,
                  }}
                >
                  <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                  <p className={styles.author}>{item.author}</p>
                  <p className={styles.role}>{item.role}</p>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
