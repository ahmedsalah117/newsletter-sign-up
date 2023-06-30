import React from "react";
import FormInfo from "../FormInfo/FormInfo.jsx";
import Form from "../Form/Form.jsx";
import { ReactComponent as IconPc } from "./../../assets/images/illustration-sign-up-desktop.svg";
import { ReactComponent as IconMob } from "./../../assets/images/illustration-sign-up-mobile.svg";
function MainCard() {
  return (
    <div className="m-auto bg-white mainCard p-4">
      <div className="row gx-0">
        <div className="col-md-5 col-xs-12 mainCard__img-sec--mobile">
          <IconMob />
        </div>
        <div className="col-md-7 col-xs-12 mainCard__form-sec">
          <div className="d-flex align-items-center h-100 justify-content-center">
            <div className="">
              <FormInfo />
              <Form />
            </div>
          </div>
        </div>

        <div className="col-md-5 col-xs-12 mainCard__img-sec--pc">
          <IconPc />
        </div>
      </div>
    </div>
  );
}

export default MainCard;
