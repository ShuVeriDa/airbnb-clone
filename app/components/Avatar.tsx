"use client"

import {FC} from 'react';
import Image from "next/image";

interface IAvatarProps {
  src?: string | null | undefined
}

export const Avatar: FC<IAvatarProps> = ({src}) => {
  return (
    <div>
      <Image className={"rounded-full"}
             height={30}
             width={30}
             src={src || '/images/placeholder.jpg'}
             alt={'Avatar'}
      />
    </div>
  );
};