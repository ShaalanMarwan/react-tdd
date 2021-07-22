import React from "react";
import {
  Footer,
  FormStatusBase,
  Header,
  InputBase,
  
} from "@/presentation/components/";
import Styles from "./login-styles.scss";
const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <InputBase type="email" className="form-control" placeholder="email" />
        <InputBase
          type="password"
          className="form-control"
          placeholder="password"
        />
        <button type="submit" className={Styles.submit}>
          Enter
        </button>
        <span className={Styles.link}>Create an account</span>
        <FormStatusBase />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
