"use client";

import React from 'react'
import Link from 'next/link';
import { OrganizationSwitcher } from '@clerk/nextjs';
import { LayoutDashboard, LayoutDashboardIcon, StarIcon, Table2Icon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { Button } from './ui/button';

function OrgSidebar() {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className='hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5'>
      <Link href='/'>
        <div className='flex items-center gap-x-2'>
          <Table2Icon className='text-emerald-400' size={35} />
          <span className='font-semibold text-2xl'>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher 
        hidePersonal
      />
      <div className='space-y-1 w-full'>
        <Button asChild size='lg' variant='ghost' className='font-normal justify-start px-2 w-full'>
          <Link href='/'>
            <LayoutDashboardIcon className='h-4 w-4 mr-2' />
            Team Boards
          </Link>
        </Button>
        <Button asChild size='lg' variant='ghost' className='font-normal justify-start px-2 w-full'>
          <Link 
            href={{
              href: '/',
              query: {
                favorites: true,
              }
            }}
          >
            <StarIcon className='h-4 w-4 mr-2' />
            Favorite Boards
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default OrgSidebar;
