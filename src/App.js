import { useContext, useEffect } from "react";
import MainCard from "./../src/Components/MainCard/MainCard.jsx";
import Message from "./Components/Message/Message";
import UserContextProvider, { userContext } from "./Context/Store.js";
import TransitionComponent from "./Components/TransitionComponent/Test.jsx";
function App() {
  return (
    <UserContextProvider>
      <section className="vh-100 main-sec d-flex justify-content-center align-items-center">
        <TransitionComponent />
      </section>
    </UserContextProvider>
  );
}

export default App;
