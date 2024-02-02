import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Nav } from './Nav';
import { Loader } from './LoaderSpinner/LoaderSpinner';
import { Container, Header, Logo, WrapLogo } from './AppLayout.styled';


export const AppLayout = () => {
  return (
    <Container>
      <Header>
        <Nav />
        <WrapLogo>
          <Logo>
            Auto Rental Service
          </Logo>
        </WrapLogo>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Container>
  );
};