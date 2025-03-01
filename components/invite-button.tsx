"use client"

import React from 'react'
import { Plus } from 'lucide-react'
import { OrganizationProfile } from '@clerk/nextjs'

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Button } from './ui/button';

function InviteButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          Invite
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className='flex flex-col justify-center items-center p-0 bg-transparent border-none max-w-[800px]'>
        <DialogTitle className='text-transparent'>Create Org</DialogTitle>
        <OrganizationProfile/>
      </DialogContent>
    </Dialog>
  )
}

export default InviteButton