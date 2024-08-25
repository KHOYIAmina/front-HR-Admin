
import { RouterPathEnum } from '../constants/constants';
import {Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from '../pages/auth/signIn';
import RHPage from '../pages/rh/RHPage';
import Dashboard from '../pages/dashboard';
import Departement from '../pages/departement';
import RHP from '../pages/rh/RHP';
import EmployePage from '../pages/rh/employePage';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const RoutesComponent = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(RouterPathEnum.SIGNIN);
    }
  }, [token, navigate]);

  return (
    <>
      <Routes>
      <Route path={RouterPathEnum.SIGNIN} element={<SignIn />} />
        <Route path={RouterPathEnum.Dashboard} element={<Dashboard />} />
        <Route path={RouterPathEnum.Département} element={<Departement />} />
        <Route path={RouterPathEnum.RHS} element={<RHPage />} />
        <Route path={RouterPathEnum.Employe} element={<EmployePage />} />
        <Route path={RouterPathEnum.Employees} element={<RHP />} />

      </Routes>
    </>
  );
};

export default RoutesComponent;
