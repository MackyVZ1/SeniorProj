import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import {jwtDecode} from 'jwt-decode'

export default function LoginButton({ onPopup }) {
  
  // ฟังก์ชันที่เรียกเมื่อเข้าสู่ระบบสำเร็จ
  const onSuccess = (credentialResponse) => {
    // ดึงข้อมูลผู้ใช้โดยการถอดรหัส token
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Login Successful! User Info:", decoded);
    onPopup(); // เรียกใช้ฟังก์ชัน onPopup
  };

  // ฟังก์ชันที่เรียกเมื่อเข้าสู่ระบบล้มเหลว
  const onFailure = (error) => {
    console.error("Login Failed", error);
  };

  return (
    <GoogleLogin 
      onSuccess={onSuccess}
      onError={onFailure}  // ใช้ `onError` แทน `onFailure`
    />
  );
}
