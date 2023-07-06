import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import userState from '../../recoil/userState';
const { VITE_APP_KEY, VITE_REDIRECT_URI } = import.meta.env;

const AuthCallback = () => {
  const params = new URL(document.location.toString()).searchParams;
  const CODE = params.get('code');
  const navigation = useNavigate();
  const setNamesState = useSetRecoilState(userState);

  async function getToken() {
    const CLIENT_ID = VITE_APP_KEY;
    const REDIRECT_URI = VITE_REDIRECT_URI;
    const res = await fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${CODE}`,
      {
        headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      }
    );
    const { access_token } = await res.json();

    if (access_token) {
      const res = await fetch(`https://kapi.kakao.com/v2/user/me`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
      const { id } = await res.json();
      const request = JSON.stringify({
        id: String(id),
      });
      const { token } = await (
        await fetch(`/api/oauth-redirect`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: request,
        })
      ).json();

      const userData = await (
        await fetch(`/api/oauth-test`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        })
      ).json();
      setNamesState(userData);

      navigation('/home');
    } else {
      alert('유효하지 않은 카카오 ID 입니다!');
      navigation('/login');
    }
  }

  getToken();

  return <></>;
};

export default AuthCallback;
