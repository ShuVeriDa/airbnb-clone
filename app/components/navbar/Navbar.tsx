"use client"

import {FC} from 'react';
import {Container} from "@/app/components/Container";
import {Logo} from "@/app/components/navbar/Logo";
import {Search} from "@/app/components/navbar/Search";
import {UserMenu} from "@/app/components/navbar/UserMenu";
import {User} from "@prisma/client";
import {SafeUserType} from "@/app/types";

interface INavbarProps {
  currentUser?: SafeUserType | null
}

export const Navbar: FC<INavbarProps> = ({currentUser}) => {
  return (
    <div className={"fixed w-full bg-white z-10 shadow-sm"}>
      <div className="
        py-4
        border-b-[1px]
      ">
      <Container >
        <div className='
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0
        '>
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser}/>
        </div>
      </Container>
      </div>
    </div>
  );
};