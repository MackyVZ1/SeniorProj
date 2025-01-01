import React, { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

export default function Login({ setUser, setOpenLogin }) {
  const clientId = "1055730967869-baqfhf1uo2k26e6i4i5k65onev345fqn.apps.googleusercontent.com";

  const onSuccess = async (credentialResponse) => {
    try {
      console.log("Login Success.");

      if (credentialResponse.credential) {
        const credentialDecoded = jwtDecode(credentialResponse.credential);

        const updatedUser = {
          name: credentialDecoded.name,
          email: credentialDecoded.email,
        };

        // ส่งข้อมูลไปยัง Backend
        await axios.post("http://localhost:5000/api/usersignin", {
          email: updatedUser.email,
          username: updatedUser.name
        });

        // อัปเดตข้อมูลผู้ใช้ใน Navbar
        setUser(updatedUser);

        // ปิดหน้าต่าง Google Authentication
        setOpenLogin(false);
      }
    } catch (error) {
      console.error("Error during login success handling:", error);
    }
  };

  const onError = () => {
    console.log("Login Failure.");
  };


  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </GoogleOAuthProvider>
  );
}