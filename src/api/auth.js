import Cookies from "js-cookie";
//import api from "./axios";
import axios from "axios";
//console.log("creds", CREDS);
// Google signin

export const apiGSignin = async (data) => {
  try {
    let response = await axios.post(
      `${import.meta.env.VITE_KAPI_URL}/auth/gsignin`,
      data
    );
    console.log(response);
    const { message, redirect, user, token } = response.data;
    //console.log(message, redirect, user, token);
    if (token) Cookies.set("token", token);

    return { message, redirect, user, token };
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};
