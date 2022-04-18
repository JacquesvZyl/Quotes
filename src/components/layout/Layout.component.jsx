import React from "react";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation.component";
function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </>
  );
}

export default Layout;
