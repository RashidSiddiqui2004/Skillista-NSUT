
import React, { useEffect } from 'react'
import Wrapper from './Wrapper';
import LoginPage from './LoginPage';

const Login = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Wrapper>
      <>
        <LoginPage />
      </>
    </Wrapper>
  )
}

export default Login