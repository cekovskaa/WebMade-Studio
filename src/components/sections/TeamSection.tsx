import Image from "next/image";
import { teamMembers } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "../../styles/components/sections/TeamSection.module.scss";

export function TeamSection() {
  return (
    <section className={styles.section} id="team">
      <div className="container">
        <FadeIn>
          <div className={styles.headingWrap}>
            <SectionHeading
              title="Our Team"
              description="Our crew is obsessed with code, creativity, and client results."
            />
          </div>
        </FadeIn>
        <div className="row g-4 mt-2">
          {teamMembers.map((member, index) => (
            <div className="col-md-6 col-lg-4" key={member.name}>
              <FadeIn delay={index * 0.05}>
                <article className={styles.card}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      width={720}
                      height={720}
                      className={styles.image}
                      sizes="(max-width: 991px) 100vw, 33vw"
                    />
                    <div className={styles.social}>
                      <a
                        href="#"
                        aria-label={`${member.name} on Facebook`}
                        className={styles.socialLink}
                      >
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a
                        href="#"
                        aria-label={`${member.name} on Twitter`}
                        className={styles.socialLink}
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="#"
                        aria-label={`${member.name} on Instagram`}
                        className={styles.socialLink}
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <h3 className={`${styles.name} h5`}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  <p className={styles.bio}>{member.bio}</p>
                </article>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
