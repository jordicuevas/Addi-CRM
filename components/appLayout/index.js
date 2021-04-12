import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AppLayout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>ADDI CRM </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="s-layout">
        <div className="s-layout__sidebar">
          <a className="s-sidebar__trigger" href="#0">
            <GiHamburgerMenu className="hamburguer-menu" />
          </a>

          <nav className="s-sidebar__nav">
            <ul>
              <li className="system-title">
                <span>
                  {" "}
                  <img src="../../logo-addi.webp" />
                </span>
              </li>
              <li className={router.pathname == "/" ? "active" : ""}>
                <Link href="/">
                  <a className="s-sidebar__nav-link">
                    <em>Leads</em>
                  </a>
                </Link>
              </li>
              <li className={router.pathname == "/prospects" ? "active" : ""}>
                <Link activeClassName="active" href="/prospects">
                  <a className="s-sidebar__nav-link">
                    <em>Prospects</em>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="s-layout__content">
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </>
  );
}
