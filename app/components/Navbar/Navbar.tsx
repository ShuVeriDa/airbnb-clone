"use client"

import {FC} from 'react';
import {Container} from "@/app/components/Container";
import {Logo} from "@/app/components/Navbar/Logo";
import {Search} from "@/app/components/Navbar/Search";
import {UserMenu} from "@/app/components/Navbar/UserMenu";

interface INavbarProps {
}

export const Navbar: FC<INavbarProps> = () => {
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
          <UserMenu />
        </div>
      </Container>
      </div>
    </div>
  );
};