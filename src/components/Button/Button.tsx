import { ReactNode } from "react";
import "./Button.module.css"
import styles from './Button.module.css';

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  //return <button type="button" className={'btn btn-' + color} onClick={ onClick }>{children}</button>;
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
