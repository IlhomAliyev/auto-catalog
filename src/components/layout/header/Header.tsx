import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Link
        className={
          pathname === "/" ? `${styles.link} ${styles.active}` : styles.link
        }
        href="/"
      >
        Home
      </Link>
      <Link
        className={
          pathname === "/about"
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
        href="/about"
      >
        About Us
      </Link>
    </header>
  );
};

export default Header;
