"use client"

import {FC, useState} from 'react';
import {useRegisterModal} from "@/app/hooks/useRegisterModal";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {Modal} from "@/app/components/modals/Modal";
import {Heading} from "@/app/components/Heading";
import {Input} from "@/app/components/inputs/Input";
import toast from "react-hot-toast";
import {Button} from "@/app/components/Button";
import {FcGoogle} from "react-icons/fc";
import {AiFillGithub} from "react-icons/ai";
import {signIn} from "next-auth/react";

interface IRegisterModalProps {
}

export const RegisterModal: FC<IRegisterModalProps> = () => {
  const {isOpen, onOpen, onClose} = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: "",
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post('/api/register', data)
      .then(() => {
        onClose()
      })
      .catch((error) => {
        toast.error("Something went wrong")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContent = (
    <div className={'flex flex-col gap-4'}>
      <Heading title={'Welcome to Airbnb'}
               subtitle={"Create an account"}
      />
      <Input id={'email'}
             label={"Email"}
             register={register}
             errors={errors}
             disabled={isLoading}
             required
      />
      <Input id={'name'}
             label={"Name"}
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
              onClick={() => signIn("github")}
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
            Log in 1:50:00
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal disabled={isLoading}
           isOpen={isOpen}
           title={"Register"}
           actionLabel={'Continue'}
           onClose={onClose}
           onSubmit={handleSubmit(onSubmit)}
           body={bodyContent}
           footer={footerContent}
    />
  );
};