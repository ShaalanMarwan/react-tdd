import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Footer, InputBase, Header, FormStatusBase } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Required Field',
    passwordError: 'Required Field',
    mainError: ''
  })
  useEffect(() => {
    validation.validate('email', state.email)
  }, [state.email])

  useEffect(() => {
    validation.validate('password', state.password)
  }, [state.password])
  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={ { state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <InputBase type="email" name="email" placeholder="Digite seu e-mail" />
          <InputBase type="password" name="password" placeholder="Digite sua senha" />
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatusBase />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login