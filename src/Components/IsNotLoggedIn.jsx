import { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { PropTypes } from 'prop-types';

export default function IsNotLoggedIn({children}) {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuth){
      console.log('Here');
      navigate('/');
    }
  }, [isAuth, navigate])

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

IsNotLoggedIn.propTypes = {
  children: PropTypes.any
}