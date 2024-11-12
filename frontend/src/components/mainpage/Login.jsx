import React from 'react'
import { useState, useEffect } from 'react'
import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'

export default function Login() {
  // ตัวแปรเก็บข้อมูล user
  const [user, setUser] = useState({
    name: null,
    email: null,
    hd: null,
    picture: null
  })


  // id ที่ใช้เชื่อมกับการทำ Google Authenticator
  const clientId =
  "1055730967869-baqfhf1uo2k26e6i4i5k65onev345fqn.apps.googleusercontent.com";

  // ฟังก์ชันเมื่อ login สำเร็จ
  const onSuccess = (credentialResponse) => {
    try{
      console.log("Login Success.")
      // ได้รับ credential มั้ย
      if(credentialResponse.credential){
        const credentialDecoded = jwtDecode(credentialResponse.credential)
        // console.log(credentialDecoded)
        setUser({
          name: credentialDecoded.name,
          email: credentialDecoded.email,
          hd: credentialDecoded.hd,
          picture: credentialDecoded.picture
        })
      }
      
    }catch(error){
      console.log(error)
    }
  }

  // ฟังก์ชันเมื่อ login ไม่สำเร็จ
  const onError = () => {
    console.log("Login Failure.")
  }

  useEffect(() => {
    console.log(`User: ${user.name}, Email: ${user.email}, Hd: ${user.hd}, Picture: ${user.picture} `)
  }, [user])

  return (
    <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={onSuccess} onError={onError}/>
    </GoogleOAuthProvider>
  )
}
