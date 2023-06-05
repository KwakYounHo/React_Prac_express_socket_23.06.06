import React from "react";
import styles from "./header.module.css";

interface Props {
  children: React.ReactNode;
}
const Header = ({ children }: Props): JSX.Element => {
  return <div className={styles.header}>{children}</div>;
};

export default Header;
