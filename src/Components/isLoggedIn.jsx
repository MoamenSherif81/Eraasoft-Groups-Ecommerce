import { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { PropTypes } from 'prop-types';

export default function IsLoggedIn({children}) {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth){
      navigate('/login');
    }
  }, [isAuth, navigate])

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

IsLoggedIn.propTypes = {
  children: PropTypes.any
}