"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
                  initial={{ opacity: 0, x: item.reverse ? -90 : 90 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: false,
                    amount: "some",
                    margin: "0px 0px -12% 0px",
                  }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
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
