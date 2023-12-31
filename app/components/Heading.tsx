"use client"

import {FC} from 'react';

interface IHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

export const Heading: FC<IHeadingProps> = ({center, subtitle, title}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className={"text-2xl font-bold"}>
        {title}
      </div>
      <div className={'font-light text-neutral-500 mt-2'}>
        {subtitle}
      </div>
    </div>
  );
};