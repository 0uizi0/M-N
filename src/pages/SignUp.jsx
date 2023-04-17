import React, { useEffect, useState } from 'react';
import InfoArea from './components/SignUp/InfoArea';
import styled from 'styled-components';
import SocialInfo from './components/SignUp/SocialInfo';
import SignUpSuccess from './components/SignUp/SignUpSuccess';
import axios from 'axios';
import { isDisabled } from '@testing-library/user-event/dist/utils';
// Color Variables
const mainColor = '#623AD6';
const hoverMainColor = '#7855DB';
const prevColor = '#333333';
const hoverPrevColor = '#6E6E6E';
const btnFontColor = '#fff';
// Styled Components
const MyStageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 20px 0 30px 0;
`;
const MyEmptyArea = styled.div`
  width: 50px;
`;
const MyPageBtn = styled.button`
  padding: 10px 10px;
  width: 110px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.backgroundColor};
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;
export default function SignUp() {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);

  const changeState = () => {
    setShow(prev => !prev);
  };
  const prevChange = () => {
    setNum(prev => prev - 1);
  };
  const nextChange = () => {
    setNum(prev => prev + 1);
    if (num !== 0 && num !== 2) {
      signUpSign();
    }
  };
  const [userData, setUserData] = useState({
    user_id: '',
    user_password1: '',
    user_password2: '',
    user_name: '',
    user_email_1: '',
    user_email_2: '',
    tel: '',
  });
  const [confirmPW, setConfirmPW] = useState('');

  let [checkNum, setCheckNum] = useState(0);
  const idOnChage = e => {
    setUserData({ ...userData, user_id: e.target.value });
    setCheckNum(checkNum + 1);
  };
  const PWOnchange = e => {
    setUserData({ ...userData, user_password1: e.target.value });
    setCheckNum(checkNum + 1);
  };
  const PWCFOnchange = e => {
    setUserData({ ...userData, user_password2: e.target.value });
    setCheckNum(checkNum + 1);
  };
  const nameOnchage = e => {
    setUserData({ ...userData, user_name: e.target.value });
    setCheckNum(checkNum + 1);
  };
  const telOnChage = e => {
    setUserData({ ...userData, tel: e.target.value });
    setCheckNum(checkNum + 1);
  };
  const onChnageEmail2 = e => {
    setUserData({ ...userData, user_email_2: e.target.value });
    setCheckNum(checkNum + 1);
  };
  const onChageEmail1 = e => {
    setUserData({ ...userData, user_email_1: e.target.value });
    setCheckNum(checkNum + 1);
  };

  const [isDisabled, setIsDisabled] = useState(true);
  const btnActive = () => {
    setIsDisabled(false);
  };

  useEffect(() => {
    if (checkNum === 6) btnActive();
  }, [checkNum]);

  const add = () => {
    userData.useremail = `${userData.user_email_1}@${userData.user_email_2}`;
  };
  add();
  console.log(userData);
  const emailList = ['naver.com', 'kakao.com', 'github.com'];

  const [idErrMsg, setIdErrMsg] = useState(''); // id 에러 메세지
  const [idCheckMsg, setIdCheckMsg] = useState(''); // id 사용가능 메세지

  const idValidation = e => {
    const regExp = `{6,104}$`;
    if (!regExp.test(e.target.value)) {
      setIdErrMsg('아이디는 4~10자로 작성해주세요요.');
    } else {
      setIdErrMsg('');
      axios
        .post('http://192.168.0.222:5500/user/signup', userData)
        .then(res => {
          const resMessge = res.data.message;
          if (resMessge === '사용 가능한 아이디입니다.') {
            setIdErrMsg('');
            setIdCheckMsg('사용 가능한 아이디입니다.');
          } else if (resMessge === '이미 사용중인 아이디입니다.') {
            setIdErrMsg('이미 사용중인 아이디입니다.');
            setIdCheckMsg('');
          }
        });
    }
  };

  const PW2 = e => {
    setConfirmPW(e.target.value);
  };
  const handleCheck = (password1, password2) => {
    if (password1 === '' || password2 === '') {
      alert('비밀 번호를 입력해 주세요.');
    } else if (password1 === password2) {
      alert('비밀번호가 일치합니다');
      setConfirmPW(true);
    } else {
      alert('비밀번호가 서로 다릅니다');
    }
  };
  const idCheck = async () => {
    axios
      .post('http://192.168.30.155:5500/user/checkid', {
        user_id: userData.user_id,
      })
      .then(res => {
        if (res.status === 200) {
          alert('이미 가입된 회원입니다.');
        } else if (res.status === 201) {
          alert('사용 가능한 아이디 입니다.');
        }
      })
      .catch(res => {
        alert('다시 입력해주세요.');
      });
  };
  const signUpSign = () => {
    add();
    axios
      .post('http://localhost:5500/user/signup', userData, {
        withCredentials: true,
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div style={{ padding: '5% 25%' }}>
      {num === 0 && (
        <>
          <h1>회원가입</h1>
          <p>소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
          <hr />
          <SocialInfo
            show={show}
            changeState={changeState}
            nextChange={nextChange}
          />
        </>
      )}
      {num === 1 && (
        <>
          <h1>회원가입</h1>
          <p>소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
          <hr />
          <InfoArea
            userData={userData}
            idOnChage={idOnChage}
            PWOnchange={PWOnchange}
            PWCFOnchange={PWCFOnchange}
            nameOnchage={nameOnchage}
            telOnChage={telOnChage}
            onChnageEmail2={onChnageEmail2}
            onChageEmail1={onChageEmail1}
            emailList={emailList}
            PW2={PW2}
            handleCheck={handleCheck}
            num={num}
            idCheck={idCheck}
          />
        </>
      )}
      {num === 2 && <SignUpSuccess />}
      {num !== 0 && num !== 2 && (
        <MyStageArea>
          <MyPageBtn
            backgroundColor={prevColor}
            color={btnFontColor}
            hoverColor={hoverPrevColor}
            onClick={prevChange}
          >
            이전
          </MyPageBtn>
          <MyEmptyArea />
          <MyPageBtn
            backgroundColor={mainColor}
            color={btnFontColor}
            hoverColor={hoverMainColor}
            onClick={nextChange}
            disabled={isDisabled}
          >
            다음 단계로
          </MyPageBtn>
        </MyStageArea>
      )}
    </div>
  );
}
