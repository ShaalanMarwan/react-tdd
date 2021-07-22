import Styles from "./form-status-styles.scss";
import Spinner from "@/presentation/components/spinner/spinner";

import React, { useContext } from "react";
import Context from "@/presentation/contexts/form/form-context";
type Props = {
  state: any;
};
// { state }: Props
const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context);
  // const { isLoading, mainError } = state
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && (
        <span data-testid="main-error" className={Styles.error}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default FormStatus;
