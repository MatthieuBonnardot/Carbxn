/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { auth } from "../api/user";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const { data: user } = useQuery(["auth"], auth, {
      keepPreviousData: true,
      onSuccess: (response) => {
        if (!response.isAuth) {
          if (option) {
            props.history.push("/login");
          }
          //Loggined in Status
        } else {
          //supposed to be Admin page, but not admin person wants to go inside
          if (adminRoute && !response.isAdmin) {
            props.history.push("/");
          }
          //Logged in Status, but Try to go into log in page
          else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      },
    });

    return <SpecificComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
}
