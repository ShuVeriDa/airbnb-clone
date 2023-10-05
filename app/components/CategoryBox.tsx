"use client"

import {FC, useCallback} from 'react';
import {IconType} from "react-icons";
import {useRouter, useSearchParams} from "next/navigation";
import qs from 'query-string'

interface ICategoryBoxProps {
  label: string
  icon: IconType
  selected?: boolean
}

export const CategoryBox: FC<ICategoryBoxProps> = (
  {icon: Icon, selected, label}
) => {
  const router = useRouter()
  const params = useSearchParams()

  // обновление URL-адреса страницы
  const handleClick = useCallback(() => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, {skipNull: true})

    router.push(url)
  }, [label, params, router])

  return (
    <div className={` 
          flex
          flex-col
          items-center
          justify-center
          gap-2
          p-3
          border-b-2
          hover:text-neutral-800
          transition
          cursor-pointer
          ${selected ? "border-b-neutral-800" : "border-transparent"}
          ${selected ? "text-neutral-800" : "text-neutral-500"}
          `}
         onClick={handleClick}
    >
      <Icon size={26}/>
      <div className='font-medium text-sm'>
        {label}
      </div>
    </div>
  );
};