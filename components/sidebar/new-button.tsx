"use client"

import React from 'react'
import { Plus } from 'lucide-react'
import { CreateOrganization } from '@clerk/nextjs'

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';

function NewButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='aspect-square'>
          <button className='bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 transition-opacity hover:opacity-100'>
            <Plus className='text-white' />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className='flex flex-col justify-center items-center p-0 bg-transparent border-none max-w-[400px]'>
        <DialogTitle className='text-transparent'>Create Org</DialogTitle>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  )
}

export default NewButton