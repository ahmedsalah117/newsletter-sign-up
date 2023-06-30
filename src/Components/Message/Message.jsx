import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userContext } from "../../Context/Store.js";
function Message() {
  const userContextData = useContext(userContext);

  function dismissHandler() {
    userContextData.setSubmitted(false);
    console.log(userContextData.submitted, "from message");
  }
  return (
    <>
      <div className="message-success-card bg-white rounded-5 p-5">
        <FontAwesomeIcon
          className="mb-3"
          icon="fa-solid fa-circle-check"
          color="#ff5969"
          fontSize={"3rem"}
        />
        <h1>Thanks for subscribing !</h1>
        <p className="mt-3">
          A confirmation email has been sent to {}. Please open it and click the
          button inside to confirm your subscription.{" "}
        </p>
        <div className="text-center">
          <button
            onClick={dismissHandler}
            className="button-form px-5 mt-4 w-75"
          >
            Dismiss message
          </button>
        </div>
      </div>
    </>
  );
}

export default Message;
