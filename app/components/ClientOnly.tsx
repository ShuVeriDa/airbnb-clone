"use client"

import {FC, ReactNode, useEffect, useState} from 'react';

interface IClientOnlyProps {
  children: ReactNode
}

export const ClientOnly: FC<IClientOnlyProps> = ({children}) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, []);

  if(!hasMounted) {
    return null
  }

  return (
    <>{children}</>
  );
};