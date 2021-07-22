import React from "react";
import Spinner from "@/presentation/components/spinner/spinner";
import Styles from "./login-styles.scss";
import Logo from "@/presentation/components/logo/logo";
import Header from "@/presentation/components/login-header/login-header";
const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <input type="email" className="form-control" placeholder="email" />
        <span>XX</span>
        <input
          type="password"
          className="form-control"
          placeholder="password"
        />
        {/* <Spinner /> */}
        <button type="submit" className="btn b">
          Enter
        </button>
      </form>
      <footer className={Styles.footer}></footer>
    </div>
  );
};

export default Login;
