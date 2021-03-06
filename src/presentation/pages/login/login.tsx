import React, { useState, useEffect } from "react";
import Styles from "./login-styles.scss";
import {
  Footer,
  FormStatusBase,
  Header,
  InputBase,
} from "@/presentation/components";
import Context from "@/presentation/contexts/form/form-context";
import { Validation } from "@/presentation/protocols/validation";
import { Authentication } from "@/domain/usecases";
import { Link, useHistory } from "react-router-dom";

type Props = {
  validation: Validation;
  authentication: Authentication;
};

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const history=useHistory();

  const [state, setState] = useState({
    isLoading: false,
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    mainError: "",
  });

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate("email", state.email),
      passwordError: validation.validate("password", state.password),
    });
  }, [state.email, state.password]);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return;
      }
      setState({ ...state, isLoading: true });
      const account = await authentication.auth({
        email: state.email,
        password: state.password,
      });
      localStorage.setItem("accessToken", account.accessToken);
      history.push("/");
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message,
      });
    }
  };

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form
          data-testid="form"
          className={Styles.form}
          onSubmit={handleSubmit}
        >
          <h2>Login</h2>
          <InputBase type="email" name="email" placeholder="Type your e-mail" />
          <InputBase
            type="password"
            name="password"
            placeholder="Type your password"
          />
          <button
            data-testid="submit"
            disabled={!!state.emailError || !!state.passwordError}
            className={Styles.submit}
            type="submit"
          >
            Enter
          </button>
          <Link to="/register">
            <span data-testid="signup" className={Styles.link}>
              Create an account
            </span>
          </Link>
          <FormStatusBase />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
