import React from "react";
import Styles from "./input-styles.scss";
type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWarp}>
      <input {...props} />
      <span className={Styles.status}>X</span>
    </div>
  );
};

export default Input;
