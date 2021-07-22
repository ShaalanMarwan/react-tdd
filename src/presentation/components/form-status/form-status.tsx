import Styles from './form-status-styles.scss'
import Spinner  from '@/presentation/components/spinner/spinner'

import React from 'react'

type Props = {
  state: any
}
// { state }: Props
const FormStatus: React.FC = () => {
  // const { isLoading, mainError } = state
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {/* {isLoading &&  */}
      <Spinner className={Styles.spinner} />
      {/* // } */}
      {/* {mainError &&  */}
      <span data-testid="main-error" className={Styles.error}>{""}</span>
      {/* } */}
    </div>
  )
}

export default FormStatus