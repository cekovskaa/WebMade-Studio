import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "../../styles/components/sections/AboutSection.module.scss";

export function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <FadeIn>
          <SectionHeading title="About Us" />
        </FadeIn>
        <div className="row align-items-center g-5 mt-2">
          <div className="col-lg-6">
            <FadeIn>
              <div className={styles.imagePanel}>
                <Image
                  src="/images/undraw_bookmarks_r6up.svg"
                  alt="About us illustration"
                  width={760}
                  height={570}
                  className={styles.aboutImage}
                />
              </div>
            </FadeIn>
          </div>
          <div className={`col-lg-6 ${styles.textColumn}`}>
            <FadeIn delay={0.08}>
              <h3 className={styles.title}>Our Mission</h3>
              <p className={styles.text}>
                We believe every business deserves a powerful online presence —
                not just the big ones. WebMade Studio was built to give small
                and mid-sized businesses access to the same caliber of web
                design and digital strategy that enterprise brands rely on.
              </p>
              <ul className={styles.list}>
                <li>
                  We build on platforms like WordPress, Webflow, and custom
                  React/Next.js stacks
                </li>
                <li>We care about your results, not just deliverables</li>
                <li>
                  Every project gets dedicated support and post-launch care
                </li>
              </ul>
              <a href="#contact" className={styles.cta}>
                Learn More
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
