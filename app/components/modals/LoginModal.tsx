"use client"

import {FC, useState} from 'react';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {Modal} from "@/app/components/modals/Modal";
import {Heading} from "@/app/components/Heading";
import {Input} from "@/app/components/inputs/Input";
import toast from "react-hot-toast";
import {Button} from "@/app/components/Button";
import {FcGoogle} from "react-icons/fc";
import {AiFillGithub} from "react-icons/ai";
import {useLoginModal} from "@/app/hooks/useLoginModal";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

interface ILoginModalProps {
}

export const LoginModal: FC<ILoginModalProps> = () => {
  const router = useRouter()
  const {isOpen, onOpen, onClose} = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false
    })
      .then((callback) => {
          setIsLoading(false)

          if (callback?.ok) {
            toast.success('Logged in')
            router.refresh()
            onClose()
          }

          if(callback?.error) {
            toast.error(callback.error)
          }

        }
      )
  }

  const bodyContent = (
    <div className={'flex flex-col gap-4'}>
      <Heading title={'Welcome back'}
               subtitle={"Login to your account"}
      />
      <Input id={'email'}
             label={"Email"}
             register={register}
             errors={errors}
             disabled={isLoading}
             required
      />
      <Input id={'password'}
             label={"Password"}
             type={'password'}
             register={register}
             errors={errors}
             disabled={isLoading}
             required
      />
    </div>
  )

  const footerContent = (
    <div className={"flex flex-col gap-4 mt-3"}>
      <hr/>
      <Button outline
              label={"Continue with Google"}
              icon={FcGoogle}
              onClick={() => {
              }}
      />
      <Button outline
              label={"Continue with GitHub"}
              icon={AiFillGithub}
              onClick={() => signIn('github')}
      />
      <div className='
              text-neutral-500
              text-center
              mt-4
              font-light
      '>
        <div className="
                justify-center
                flex
                flex-row
                items-center
                gap-2
              "
        >
          <div>
            Already have an account?
          </div>
          <div onClick={onClose}
               className='text-neutral-800
                 cursor-pointer
                 hover:underline
               '
          >
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal disabled={isLoading}
           isOpen={isOpen}
           title={"Login"}
           actionLabel={'Continue'}
           onClose={onClose}
           onSubmit={handleSubmit(onSubmit)}
           body={bodyContent}
           footer={footerContent}
    />
  );
};