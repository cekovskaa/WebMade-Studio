"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import styles from "../../styles/components/sections/HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.section} id="home">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className={`col-12 col-md-6 ${styles.heroCopy}`}>
            <FadeIn y={20}>
              <h1 className={styles.title}>Make Your Business More Profitable Online</h1>
            </FadeIn>
            <FadeIn delay={0.15} y={20}>
              <p className={styles.subtitle}>
                WebMade Studio crafts high-converting websites, landing pages, and
                digital experiences for businesses that are ready to grow. We
                handle the tech — you handle the success.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} y={12} className={styles.ctaWrap}>
              <a href="#features" className={styles.cta}>
                Get Started
              </a>
            </FadeIn>
          </div>
          <div className="col-12 col-md-6">
            <FadeIn delay={0.2} y={20} className={styles.heroVisual}>
              <Image
                src="/images/undraw_investing_7u74.svg"
                alt="Business growth illustration"
                width={760}
                height={570}
                className={styles.heroImage}
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
