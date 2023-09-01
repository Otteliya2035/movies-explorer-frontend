import React, {useEffect} from 'react';
import './ProtectedView.css';
import {useLocation, useNavigate} from "react-router-dom";

const ProtectedView = ({children, isLoggedIn, isPublicPage}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if ((isLoggedIn && pathname === '/signin') || (isLoggedIn && pathname === '/signup')) {
      navigate('/');
    } else if (!isPublicPage && !isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, isPublicPage, pathname, navigate]);
  // if(isLoggedIn && pathname === '/signin' || isLoggedIn && pathname === '/signup') {
  //   return (<div className={'center'}>
  //     <h1>У вас нет доступа к этой страничке</h1>
  //   </div>)
  // }
  return !isPublicPage ? (
    isLoggedIn ? (
      <>{children}</>
    ) : (
      <div className={'center'}>
        <h1>У вас нет доступа к этой страничке</h1>
      </div>
    )
  ) : (
    <>{children}</>
  );
};

export default ProtectedView;
