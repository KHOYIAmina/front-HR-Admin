import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { RouterPathEnum } from '../constants/constants';

interface RefreshTokenResponse {
  token: string;
  refreshToken: string;
}

const useTokenRefresh = () => {
  useEffect(() => {
    const refreshAuthToken = async () => {
      const CookierefreshToken = Cookies.get('refreshToken'); 
      console.log('old token : ',Cookies.get('token'))
      console.log('old token : ',CookierefreshToken)
      if (CookierefreshToken) {
        try {
          const response = await axios.post<RefreshTokenResponse>('http://localhost:8080/auth/refresh', {
            token: CookierefreshToken,
            withCredentials: true
          });

          const { token: accessToken, refreshToken: newRefreshToken } = response.data;

          Cookies.set('token', accessToken, { secure: true, sameSite: 'strict', expires: 2 / 1440 });
          Cookies.set('refreshToken', newRefreshToken, { secure: true, sameSite: 'strict', expires: 7 });
          console.log('new token : ',accessToken)
          console.log('new token : ',newRefreshToken)
        } catch (error) {
          console.error('Failed to refresh token:', error);
          
          window.location.href = RouterPathEnum.SIGNIN
        }
      }
    };

    const intervalId = setInterval(() => {
      refreshAuthToken();
    }, 120000); // 2 min

    return () => clearInterval(intervalId);
  }, []);
};

export default useTokenRefresh;
