"use client";

import { UserButton } from '@clerk/nextjs';
import React from 'react'
import SearchInput from './search-input';
import InviteButton from './invite-button';

function NavBar() {
  return (
    <div className='flex items-center gap-x-4 p-5'>
      <div className='hidden lg:flex lg:flex-1'>
        <SearchInput />
      </div>
      <InviteButton />
      <UserButton />
    </div>
  )
}

export default NavBar