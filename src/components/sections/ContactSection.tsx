import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "../../styles/components/sections/ContactSection.module.scss";

export function ContactSection() {
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <SectionHeading title="Contact Us" tone="onDark" />
        <div className="row justify-content-center mt-4">
          <div className={`col-12 ${styles.formCol}`}>
            <p className={`${styles.intro} pb-4`}>
              Ready to build something great? Drop us a message and we&apos;ll
              get back to you within one business day.
            </p>
            <form className={styles.formCard}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="form-control form-control-sm"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="form-control form-control-sm"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control form-control-sm"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="form-control form-control-sm"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control form-control-sm"
                    rows={5}
                    placeholder="Leave your message here..."
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className={styles.cta}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
