import ButtonSubmit from '@/components/ButtonSubmit'
import InputComponent from '@/components/AuthInput'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import { saveAction } from '@/redux/features/authSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useForm from '@/utils/useForm'

export default function Register() {

  const initialValues = {
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };
  
  const dispatch = useAppDispatch();

  const submitForm = () => {
    const payload = {
      username: values.username,
      phoneNumber: values.phoneNumber,
      password: values.password,
    }

    dispatch(saveAction(payload))
  };

  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: submitForm
  });

  
  useEffect(() => {
    console.log(values.username)
  }, [values]);

  return (
    <div className='bg-blueSecondary dark:bg-orangePrimary w-full'>
        <div className="flex flex-col items-center justify-center max-w-11/12">
            <div className="flex justify-end w-full bg-white">
                <ToggleDarkMode />
            </div>
            <div className="flex-1 mt-20">
                <div className="mx-auto w-fit text-white">
                    <p className="text-4xl font-extrabold">
                        Daftarkan Akun
                    </p>
                    <p className="text-sm mt-6">
                        Daftar akun anda dengan mengisi form dibawah
                    </p>
                    <form className="mt-8" onSubmit={handleSubmit}>
                      <InputComponent name="username" type="text" placeholder="Username anda ..." value={values.username} onChange={handleChange} isWhite={true} />
                      <InputComponent name="phoneNumber" type="text" placeholder="Nomor handphone anda ..." value={values.phoneNumber} onChange={handleChange} isWhite={true} />
                      <InputComponent name="password" type="password" placeholder="Masukkan password anda ..." value={values.password} onChange={handleChange} isWhite={true} />
                      <InputComponent name="confirmPassword" type="password" placeholder="Masukkan kembali password anda ..." value={values.confirmPassword} onChange={handleChange} isWhite={true} />
                    <div className="mt-10">
                        <ButtonSubmit value="Masuk Sekarang" isWhiteBackground={true} />
                    </div>
                    </form>
                    <p className="text-white text-center text-sm mt-6 font-semibold mb-12">
                        Sudah punya akun? 
                        <Link href="/accounts/login"> LogIn Sekarang</Link> 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
