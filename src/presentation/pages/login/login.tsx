import React, { useState } from "react";
import {
  Footer,
  FormStatusBase,
  Header,
  InputBase,
  
} from "@/presentation/components/";
import Styles from "./login-styles.scss";
import Context from '@/presentation/contexts/form/form-context' 
type StateProps ={
  isLoading: boolean,
  errorMessage:string
}
const Login: React.FC = () => {
  const [state]=useState<StateProps>({
    isLoading:false,
    errorMessage:""
  })
  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={state}>

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
      </Context.Provider>

      <Footer />
    </div>
  );
};

export default Login;
