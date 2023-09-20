"use client"

import {FC} from 'react';
import Image from 'next/image'

interface ILogoProps {
}

export const Logo: FC<ILogoProps> = () => {
  return (
   <Image alt={'logo'}
          className={"hidden md:block cursor-pointer"}
          height={'100'}
          width={"100"}
          src={'/images/logo.png'}
   />
  );
};