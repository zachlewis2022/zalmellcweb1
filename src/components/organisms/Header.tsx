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
      <HomeDropDownPublic />
    </>
  );
}
