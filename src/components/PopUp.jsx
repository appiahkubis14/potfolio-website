import React from "react";
import CloseSvg from "../assets/images/svg/colan-icon.svg";
import PopUpImg from "../assets/images/pop-up-img1.jpg";
import PopUpImg2 from "../assets/images/pop-up-img2.jpg";

const Popup = ({ isVisible, onClose }) => {
  return (
    <div className={`popup-wrap ${isVisible ? "visible" : ""}`}>
      <div className="popup-box transform-in">
        <img className="pop-up-img1" src={PopUpImg} alt="pop-up-img1" />
        <a className="close-btn popup-close" href="#" onClick={onClose}>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.16998 14.83L14.83 9.17004"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.83 14.83L9.16998 9.17004"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>{" "}
        </a>
        <p className="corpo">Corporate Branding</p>
        <p className="corpo-sub">CONTENT</p>
        <div className="corporate_main">
          <div className="cuberto_main">
            <p className="created_by">Created By:</p>
            <p className="cuberto">Cuberto</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Date:</p>
            <p className="cuberto">20/12/2024</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Client:</p>
            <p className="cuberto">Rayan Patrick</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Categories:</p>
            <p className="cuberto">Content</p>
          </div>
        </div>
        <p className="Ornare">
          Ornare sagittis blandit imperdiet cursus risus. Amet proin cras mattis
          arcu pellentesque lorem sagittis. Mauris facilisis id est duis eget
          sed cras curabitur faucibus. Lectus eu eu quis amet. Ultrices morbi
          bibendum risus nisi sapien id ut egestas. Et fermentum fermentum
          faucibus sed quis in eget. Quis cursus eu in sit cras sit elementum
          nibh sit.
        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg2} alt="pop-up-img2" />
        </div>
        <p className="Ornare p-0">
          Non vel eget pharetra vestibulum orci amet feugiat mi cras. Neque ac
          duis sed viverra volutpat. Natoque habitasse sit in interdum ut in
          pharetra proin amet. Non id egestas tellus enim nisi proin. Vel neque
          gravida sed nunc. Scelerisque vulputate sit tellus dui. Sollicitudin
          id nec amet porttitor id. In condimentum id id phasellus eu lobortis
          quis porta nisi.
        </p>
      </div>
    </div>
  );
};

export default Popup;
