"use client"

import {FC} from 'react';
import Image from 'next/image'
import {useRouter} from "next/navigation";


interface ILogoProps {
}

export const Logo: FC<ILogoProps> = () => {
  const router = useRouter()
  return (
    <Image onClick={() => router.push('/')}
           alt={'logo'}
           className={"hidden md:block cursor-pointer"}
           height={'100'}
           width={"100"}
           src={'/images/logo.png'}
    />
  );
};