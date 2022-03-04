import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav>
      <h1>waves</h1>
      <button>
        Library
        <FontAwesomeIcon className="skip-back" icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
