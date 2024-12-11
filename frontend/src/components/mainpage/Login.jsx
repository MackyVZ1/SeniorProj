import React from 'react'
import { useState, useEffect } from 'react'
import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'
import axios from 'axios'

export default function Login() {
  // ตัวแปรเก็บข้อมูล user
  const [user, setUser] = useState({
    name: null,
    email: null,
    hd: null,
    role: null,
  });

  // id ที่ใช้เชื่อมกับการทำ Google Authenticator
  const clientId =
    '1055730967869-baqfhf1uo2k26e6i4i5k65onev345fqn.apps.googleusercontent.com';

  // ฟังก์ชันเมื่อ login สำเร็จ
  const onSuccess = async (credentialResponse) => {
    try {
      console.log('Login Success.');

      // ตรวจสอบว่ามี credential หรือไม่
      if (credentialResponse.credential) {
        // Decode ข้อมูลจาก credential
        const credentialDecoded = jwtDecode(credentialResponse.credential);
         
        
        // มาแก้ตรงนี้ต่อ
        // อัปเดตข้อมูลผู้ใช้ใน state
        const updatedUser = {
          name: credentialDecoded.name,
          email: credentialDecoded.email,
          hd: credentialDecoded.hd,
          role: credentialDecoded.hd === 'nu.ac.th' ? 'Guest' : 'Unverified',
        };
        setUser(updatedUser);

        // ตรวจสอบว่า hd = 'nu.ac.th' หรือไม่ ก่อนส่งข้อมูลไป backend
        if (updatedUser.hd === 'nu.ac.th') {
          try {
            // ส่งข้อมูลไป backend
            const response = await axios.post('http://localhost:5000/api/usersignup', {
              email: updatedUser.email,
              username: updatedUser.name,
              role: updatedUser.role,
            });
            console.log('Signup response:', response.data);
          } catch (err) {
            console.error('Error signing up user:', err);
          }
        }
      }
    } catch (error) {
      console.error('Error during login success handling:', error);
    }
  };

  // ฟังก์ชันเมื่อ login ไม่สำเร็จ
  const onError = () => {
    console.log('Login Failure.');
  };

  // ดูการเปลี่ยนแปลงของ user
  useEffect(() => {
    if (user.name) {
      console.log(
        `User: ${user.name}, Email: ${user.email}, Hd: ${user.hd}, Role: ${user.role}`
      );
    }
  }, [user]);

  return (
    <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={onSuccess} onError={onError}/>
    </GoogleOAuthProvider>
  )
}
