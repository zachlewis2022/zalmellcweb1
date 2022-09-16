import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import { AuthButton } from "../molecules/AuthButton";
import { HomeDropDownAuth } from "../molecules/HomeDropDownAuth";
import { HomeDropDownPublic } from "../molecules/HomeDropDownPublic";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <header className="p-3 mb-3">
        <div className="container">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
               <HomeDropDownPublic />   
          </div>
    
        </ul>
        </div>
      </header>
    </>
  );
}
