"use client"

import {FC} from 'react';
import {Toaster} from "react-hot-toast";

interface IToasterProviderProps {
}

export const ToasterProvider: FC<IToasterProviderProps> = () => {
  return (
    <div>
      <Toaster />
    </div>
  );
};