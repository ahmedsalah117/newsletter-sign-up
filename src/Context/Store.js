import { createContext } from "react";
import { useState } from "react";

export let userContext = createContext(0);

function UserContextProvider(props) {
  const [enteredEmail, setEnteredEmail] = useState({ email: "" });
  const [hasError, setHasError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <userContext.Provider
      value={{
        enteredEmail,
        setEnteredEmail,
        hasError,
        setHasError,
        submitted,
        setSubmitted,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
