import Image from "next/image";
import { testimonials } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "../../styles/components/sections/TestimonialsSection.module.scss";

export function TestimonialsSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <SectionHeading title="Testimonials" />
        <div id="testimonialsCarousel" className={`carousel slide ${styles.carousel}`} data-bs-interval="false">
          <div className="carousel-inner">
            {testimonials.map((item, index) => (
              <article key={item.name} className={`carousel-item ${index === 0 ? "active" : ""} ${styles.item}`}>
                <div className={styles.avatarWrap}>
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.avatar}
                    sizes="100px"
                  />
                </div>
                <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                <p className={styles.name}>{item.name}</p>
              </article>
            ))}
          </div>
          <div className={`carousel-indicators ${styles.indicators}`}>
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide-to={index}
                className={`${styles.dot} ${index === 0 ? "active" : ""}`}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className={`carousel-control-prev ${styles.control} ${styles.prev}`}
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide="prev"
            aria-label="Previous testimonial"
          >
            <span className={styles.controlIcon} aria-hidden="true">
              <i className="bi bi-chevron-left" />
            </span>
          </button>
          <button
            className={`carousel-control-next ${styles.control} ${styles.next}`}
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide="next"
            aria-label="Next testimonial"
          >
            <span className={styles.controlIcon} aria-hidden="true">
              <i className="bi bi-chevron-right" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
