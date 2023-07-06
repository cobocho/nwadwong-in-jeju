const { VITE_APP_KEY, VITE_REDIRECT_URI } = import.meta.env;

export default function Login() {
  function loginWithKakao() {
    const CLIENT_ID = VITE_APP_KEY;
    const REDIRECT_URI = VITE_REDIRECT_URI;
    const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = AUTH_URL;
  }

  return <button onClick={loginWithKakao}>카카오 로그인</button>;
}
