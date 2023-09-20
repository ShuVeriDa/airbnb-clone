"use client"

import { ReactNode } from 'react';
import {FC} from 'react';


interface IContainerProps {
  children: ReactNode
}

export const Container: FC<IContainerProps> = ({children}) => {
  return (
    <div className="
      max-w-[2250px]
      mx-auto
      xl:px-20
      ms:px-10
      sm:px-2
      px-4
    ">
      {children}
    </div>
  );
};