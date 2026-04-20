import { features } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "../../styles/components/sections/FeaturesSection.module.scss";

export function FeaturesSection() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <FadeIn>
          <SectionHeading
            title="WebMade Features"
            description="A complete creative toolkit that helps your idea launch, convert, and scale."
          />
        </FadeIn>

        <div className={`row g-3 g-lg-4 ${styles.cards}`}>
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-4" key={feature.title}>
              <FadeIn delay={index * 0.06}>
                <article className={styles.card}>
                  <span className={styles.icon}>
                    <i className={`bi ${feature.icon}`} />
                  </span>
                  <h3 className={styles.title}>{feature.title}</h3>
                  <p className={styles.text}>{feature.description}</p>
                </article>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
