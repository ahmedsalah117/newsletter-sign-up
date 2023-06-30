import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function FormInfo() {
  return (
    <div className="form-info mx-auto">
      <div className="">
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on :</p>
      </div>
      <ul className="form-info__list ">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="25%" stop-color="#ff5969" />
                <stop offset="100%" stop-color="#fd6347" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            />
          </svg>
          &nbsp; Product discovery and building what matters
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="25%" stop-color="#ff5969" />
                <stop offset="100%" stop-color="#fd6347" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            />
          </svg>
          &nbsp; Measuring to ensure updates are a success.
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="25%" stop-color="#ff5969" />
                <stop offset="100%" stop-color="#fd6347" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            />
          </svg>
          &nbsp; And much more!
        </li>
      </ul>
    </div>
  );
}

export default FormInfo;
