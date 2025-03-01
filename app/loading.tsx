import React from 'react'
import { Loader2Icon } from 'lucide-react';

function loading() {
  return (
    <div className='h-full w-full flex flex-col gap-y-4 jusityf-center items-center'>
      <Loader2Icon className='text-primary animate-spin' />
    </div>
  )
}

export default loading