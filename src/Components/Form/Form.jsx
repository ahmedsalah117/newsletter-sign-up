import React, { useContext } from "react";
import Joi from "joi";
import { userContext } from "../../Context/Store.js";

function Form() {
  const userContextData = useContext(userContext);

  function validateEmail() {
    const schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });
    const validationResult = schema.validate(userContextData.enteredEmail);
    return validationResult;
  }

  function emailHandler(e) {
    userContextData.setEnteredEmail({ email: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();

    const validationResult = validateEmail(userContextData.enteredEmail);
    if (validationResult.error) {
      userContextData.setHasError(true);
      userContextData.setSubmitted(false);
    } else {
      userContextData.setHasError(false);
      userContextData.setSubmitted(true);
      userContextData.setEnteredEmail({ email: "" });
    }
  }

  return (
    <form onSubmit={submitHandler} className="mt-5 form">
      <div className="m-auto form__container ">
        <div className=" d-flex justify-content-between align-items-center mb-2">
          <span className=" text-start m-0 d-block">
            <label htmlFor="email" className="form__label">
              Email address
            </label>
          </span>
          <span className=" text-end form__error m-0 d-block">
            {userContextData.hasError ? "Valid email required" : ""}
          </span>
        </div>
        <input
          onChange={emailHandler}
          className={`form-control  ${
            userContextData.hasError ? "input-error" : ""
          }`}
          type="email"
          placeholder="email@company.com"
          id="email"
        />
        <button className="mt-4 button-form">
          Subscribe to monthly newsletter
        </button>
      </div>
    </form>
  );
}

export default Form;
