import React, { FC, PropsWithChildren } from 'react';

import OrgSidebar from '@/components/org-sidebar';
import Sidebar from '@/components/sidebar';
import NavBar from '@/components/navbar';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='h-full w-full'>
      <Sidebar />
      <div className='pl-[60px] h-full'>
        <div className='flex gap-x-3 h-full'>
          <OrgSidebar />
          <div className='w-full h-full flex-1'>
            <NavBar />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;
