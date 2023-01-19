"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface LoginInputs {
  email: string;
  password: string | number;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  return (
    <div className='max-w-[700px] mx-auto'>
      <form className='bg-red-500 mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl'>
        <p className='text-lg font-medium'>Log in to your account</p>

        <div>
          <label htmlFor='email' className='text-sm font-medium'>
            Email
          </label>

          <div className='relative mt-1'>
            <input
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA_Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter valid email",
                },
              })}
              type='email'
              id='email'
              className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
              placeholder='Enter email'
            />
            {errors.email && (
              <span className='text-red-500 pt-1'>{errors.email.message}</span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor='password' className='text-sm font-medium'>
            Password
          </label>

          <div className='relative mt-1'>
            <input
              {...register("password", {
                required: "Please enter your password",
              })}
              type='password'
              id='password'
              className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
              placeholder='Enter password'
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
        </div>

        <button
          type='submit'
          className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
        >
          Sign in
        </button>

        <p className='text-center text-sm text-gray-500'>
          No account?
          <Link className='underline' href='/signup'>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
