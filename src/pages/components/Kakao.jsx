import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { login } from '../../store/modules/user';
const Kakao = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const CODE = new URLSearchParams(location.search).get('code');
    const GRANT_TYPE = 'authorization_code';
    const KAKAO_CLIENT_ID = 'c37163557aa622477d21aee2d6f6dbdc';
    const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback'; // 빈페이지로 보내서
    async function loginFetch() {
      const tokenResponse = await fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${CODE}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      );
      //해킹 문제 -> 인가코드 잘라서 백엔드로 인가코드 넘겨주라고 / jwt 까지
      if (tokenResponse.status === 200) {
        const tokenData = await tokenResponse.json();
        const userResponese = await fetch(`https://kapi.kakao.com/v2/user/me`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        });
        if (userResponese.status === 200) {
          const userKaKaoInfo = await userResponese.json();
          const userLoginInfo = {
            type: 'kakao',
            user_id: userKaKaoInfo.kakao_account.email, //
          };
          const registerResponse = await fetch(
            'http://localhost:8001/user/kakaologin',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userLoginInfo),
            }
          );
          if (registerResponse.status === 200) {
            dispatch(login(userLoginInfo));
            localStorage.setItem('user_id', userKaKaoInfo.kakao_account.email);
            localStorage.setItem('accessToken', tokenData.access_token);
            window.location.replace('/workspace');
            // localStorage.setItem('accessToken');
          } else {
            alert('회원 등록 이상');
            window.location.href = '/'; // Navigate to /login
          }
        } else {
          alert('카카오 로그인 회원 정보 획득 실패');
          window.location.href = '/'; // Navigate to /login
        }
      } else {
        alert('카카오 로그인 토큰 발행 실패');
        window.location.href = '/'; // Navigate to /login
      }
    }
    loginFetch();
  }, [dispatch, location.search]);
  return null; // Return null since this component doesn't have any UI
};
export default Kakao;
