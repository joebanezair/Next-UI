"use-client";
import React from 'react'
import { useAuth } from '../authfirebase/AuthContext';
import { Navbar } from '@/components/navbar';

const NavBarSelector = () => {
  const { currentUser } = useAuth();
  return (<>
    {currentUser ? <Navbar /> : <div><Navbar />  !Logged</div>}
  </>)
}

export default NavBarSelector