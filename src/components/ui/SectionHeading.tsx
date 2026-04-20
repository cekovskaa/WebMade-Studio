import styles from "../../styles/components/ui/SectionHeading.module.scss";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "start" | "center";
  /** Light text for dark / image backgrounds (e.g. contact section) */
  tone?: "default" | "onDark";
};

export function SectionHeading({
  title,
  description,
  align = "center",
  tone = "default",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "text-center mx-auto" : "text-start";

  return (
    <div
      className={`${styles.wrapper} ${alignmentClass} ${tone === "onDark" ? styles.onDark : ""}`}
    >
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
