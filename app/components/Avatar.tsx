"use client"

import {FC} from 'react';
import Image from "next/image";

interface IAvatarProps {
}

export const Avatar: FC<IAvatarProps> = () => {
  return (
    <div>
      <Image className={"rounded-full"}
             height={30}
             width={30}
             src={'/images/placeholder.jpg'}
             alt={'Avatar'}
      />
    </div>
  );
};