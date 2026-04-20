import Image from "next/image";
import { blogPosts } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "../../styles/components/sections/BlogSection.module.scss";

export function BlogSection() {
  return (
    <section className={styles.section} id="blog">
      <div className="container">
        <SectionHeading title="Blog Posts" />
        <div className="row g-4 mt-2">
          {blogPosts.map((post) => (
            <div className="col-md-6 col-lg-4" key={post.title}>
              <article className={styles.card}>
                <div className={styles.cover}>
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className={styles.coverImage}
                    sizes="(max-width: 991px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className={styles.meta}>
                    <span>{post.author}</span>
                    <span className={styles.separator} aria-hidden="true">
                      ·
                    </span>
                    <span>{post.date}</span>
                    <span className={styles.separator} aria-hidden="true">
                      ·
                    </span>
                    <span>{post.category}</span>
                  </p>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <p className={styles.readMoreWrap}>
                    <a href="#" className={styles.readMore}>
                      Continue Reading...
                    </a>
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
