/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

import { Loader } from "@mantine/core";

export default function Private({ redirect }) {
  const { session } = useContext(AuthContext);

  if (!session[0].ready) {
    return <Loader />;
  }

  if (session[0].ready && !session[0].user) {
    return <Navigate to={redirect} replace />;
  }
  return <Outlet />;
}
