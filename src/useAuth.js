import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAuth(code){
  const [accessToken, setAccessToken] = React.useState();
  const [refreshTokenToken, setRefreshToken] = React.useState();
  const [expiresIn, setExpiresIn] = React.useState();

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);
}