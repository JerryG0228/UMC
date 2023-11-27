import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../../redux/loginRedux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function KakaoRedirect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const sendCode = async () => {
      try {
        const response = await axios.post(`http://localhost:8000/kakao?code=${code}`, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        console.log(response.data);
        dispatch(setName(response.data.result.name));
        navigate('/');
      } catch (error) {
        console.error('오류 발생:', error);
      }
    };

    sendCode();
  }, []);

  return <div>Loading...</div>;
}
