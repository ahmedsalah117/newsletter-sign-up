import React, { useContext } from "react";
import { userContext } from "../../Context/Store.js";
import MainCard from "../MainCard/MainCard.jsx";
import Message from "../Message/Message.jsx";

function TransitionComponent() {
  const userContextData = useContext(userContext);
  return <>{userContextData.submitted ? <Message /> : <MainCard />}</>;
}

export default TransitionComponent;
