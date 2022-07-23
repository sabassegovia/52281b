import { UserCircleIcon } from "@heroicons/react/outline";
import React from "react";
import SearchInput from "./Search";
import "../css/navbar.scss";

function Navbar() {
  return (
    <div className="navbarWrapper">
      <h1 className="title">Hatchways Times</h1>
      <br/>
      <p>Now featuring pagination</p>
      <div style={{ display: "flex" }}>
        <SearchInput />
        <button type="button" className="subscribeButton">
          <UserCircleIcon className="icon" />
          <p>Bork</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
