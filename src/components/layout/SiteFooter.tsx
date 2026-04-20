import { navItems } from "@/data/content";
import styles from "../../styles/components/layout/SiteFooter.module.scss";

const socialLinks = [
  { label: "LinkedIn", icon: "bi-linkedin", href: "#" },
  { label: "Instagram", icon: "bi-instagram", href: "#" },
  { label: "Twitter", icon: "bi-twitter-x", href: "#" },
  { label: "Facebook", icon: "bi-facebook", href: "#" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} py-5`}>
      <div className="container">
        <p className={styles.tagline}>
          © {year} WebMade Studio. All rights reserved.
        </p>

        <div className={styles.socialRow}>
          {socialLinks.map((item) => (
            <a href={item.href} key={item.label} aria-label={item.label} className={styles.socialLink}>
              <i className={`bi ${item.icon}`} />
            </a>
          ))}
        </div>

        <nav className={styles.footerNav} aria-label="Footer">
          {navItems.map((item, index) => (
            <span key={item.href} className={styles.navItem}>
              {index > 0 ? <span className={styles.dot} aria-hidden="true"> · </span> : null}
              <a href={item.href} className={styles.footerLink}>
                {item.label}
              </a>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
