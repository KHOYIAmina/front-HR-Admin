import axios from 'axios';
import Cookies from 'js-cookie';
import { RouterPathEnum } from '../constants/constants';

type AccessToken = string;
type RefreshToken = string;

interface TokenData {
  token: AccessToken;
  refreshToken: RefreshToken;
  message: string;
  statusCode:number
}

export const loginSubmit = async (
  event: React.FormEvent, 
  emailRef: React.RefObject<HTMLInputElement>, 
  passwordRef: React.RefObject<HTMLInputElement>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setErrorUndefined: React.Dispatch<React.SetStateAction<string>>
) => {
  event.preventDefault();

  const email = emailRef.current?.value;
  const password = passwordRef.current?.value;

  if (!email || !password) {
    setError('Veuillez remplir tous les champs.');
    return;
  }

  try {
    const response = await axios.post<TokenData>('http://localhost:8080/auth/signin', {
      profEmail: email,
      password,
    });
    const { statusCode, token, refreshToken, message } = response.data;

    if (statusCode === 200) {
      Cookies.set('token', token, { expires: 2 / 1440 });
      Cookies.set('refreshToken', refreshToken, { expires: 7 });
      return { success: true }; 
      
    } else if (statusCode === 500) {
      setErrorUndefined('Email ou mot de passe incorrect');
      return { success: false };
    }
  } catch (error) {
    console.error('Login error:', error);
    setErrorUndefined('An unexpected error occurred');
  }
};
