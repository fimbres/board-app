"use client";

import React, { FC } from 'react'
import Image from 'next/image'
import {
  useOrganization,
  useOrganizationList,
} from '@clerk/nextjs';
import { cn } from '@/lib/utils';

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item: FC<ItemProps> = ({ id, name, imageUrl }) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();
  const isActive = organization?.id === id;

  const onClick = () => {
    if(!isActive) return;

    setActive?.({ organization: id });
  }

  return (
    <div className='aspect-square relative'>
      <Image
        fill
        alt={name}
        src={imageUrl}
        onClick={console.log}
        className={cn(
          "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
          isActive && "opacity-100"
        )}
      />
    </div>
  )
}

export default Item
