import React from "react";

type Props = {
  children: React.ReactNode;
  styles: string;
};
const MagicBox = ({ children, styles }: Props): JSX.Element => {
  return <div className={styles}>{children}</div>;
};

export default MagicBox;