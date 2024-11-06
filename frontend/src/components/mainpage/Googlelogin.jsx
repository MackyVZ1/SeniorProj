import {React , useState} from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginButton from './LoginButton';

export default function Googlelogin({onPopup}) {
  const [profile, setProfile] = useState([]); // เก็บข้อมูล profile
  // id ที่ใช้เชื่อมกับการทำ Google Authenticator
  const clientId =
    "1055730967869-baqfhf1uo2k26e6i4i5k65onev345fqn.apps.googleusercontent.com";

  return (
      <GoogleOAuthProvider clientId={clientId}>
        <LoginButton onPopup={() => {onPopup()}}/>
      </GoogleOAuthProvider>
  );
}
