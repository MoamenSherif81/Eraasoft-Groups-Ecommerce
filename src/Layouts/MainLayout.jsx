import { Fragment } from 'react';
import MainNavBar from '../Components/MainNavBar/MainNavBar';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <Fragment>
      <MainNavBar />
      <Outlet />
    </Fragment>
  )
}
