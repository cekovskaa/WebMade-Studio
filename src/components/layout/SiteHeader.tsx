"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { navItems } from "@/data/content";
import styles from "../../styles/components/layout/SiteHeader.module.scss";

const backdropTransition = { duration: 0.32, ease: [0.4, 0, 0.2, 1] as const };

/** Spring slide from the top */
const panelSpring = {
  type: "spring" as const,
  damping: 36,
  stiffness: 400,
  mass: 0.82,
};

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    const closeOnDesktop = () => {
      if (mq.matches) setIsOpen(false);
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navInner}`}>
        <div className={styles.bar}>
          <a className={styles.brand} href="#home" onClick={closeMenu}>
            <Image
              src="/images/webmade_studio_logo.svg"
              alt="WebMade Studio"
              width={240}
              height={64}
              className={styles.logo}
              priority
            />
          </a>

          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.desktopList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className={styles.navLink} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars" aria-hidden="true" />
          </button>
        </div>
      </div>

      {portalTarget
        ? createPortal(
            <AnimatePresence
              onExitComplete={() => {
                document.body.style.overflow = "";
              }}
            >
              {isOpen ? (
                <motion.div
                  key="mobile-menu"
                  className={styles.overlayBackdrop}
                  id="mobile-menu"
                  role="presentation"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={backdropTransition}
                  onClick={closeMenu}
                >
                  <motion.div
                    className={styles.overlayPanel}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile menu"
                    initial={{ y: "-104%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-104%" }}
                    transition={panelSpring}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={`container ${styles.overlayInner}`}>
                      <div className={styles.overlayTop}>
                        <a className={styles.overlayBrand} href="#home" onClick={closeMenu}>
                          <Image
                            src="/images/webmade_studio_logo.svg"
                            alt="WebMade Studio"
                            width={240}
                            height={64}
                            className={styles.overlayLogo}
                          />
                        </a>
                        <button
                          type="button"
                          className={styles.iconBtn}
                          onClick={closeMenu}
                          aria-label="Close menu"
                        >
                          <i className="fa-solid fa-xmark" aria-hidden="true" />
                        </button>
                      </div>

                      <div className={styles.overlayDivider} />

                      <nav className={styles.overlayNav} aria-label="Mobile">
                        <ul className={styles.overlayList}>
                          {navItems.map((item) => (
                            <li key={item.href} className={styles.overlayItem}>
                              <a className={styles.overlayLink} href={item.href} onClick={closeMenu}>
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            portalTarget,
          )
        : null}
    </header>
  );
}
