import React, { useState } from 'react';
import { Popover } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Form from '../../componets/Form';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {

  const [authType, setAuthType] = useState('login');
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)

    //Login and signup logic goes here..

    navigate('/products')

    

  } 

  const signUpFields = [{
    name: 'username',
    required: true,
    label: 'Username',
    type: 'text',
    registerOptions: { required: 'Username is required' },
  }, {
    name: 'email',
    required: true,
    label: 'Email',
    type: 'email',
    registerOptions: { required: 'Email is required' },
  },
  {
    name: 'password',
    required: true,
    label: 'Password',
    type: 'password',
    registerOptions: { required: 'Password is required' },
  },]

  const loginFields = [{
    name: 'email',
    required: true,
    label: 'Email',
    type: 'email',
    registerOptions: { required: 'Email is required' },
  },
  {
    name: 'password',
    required: true,
    label: 'Password',
    type: 'password',
    registerOptions: { required: 'Password is required' },
  },]

  const button = {
    label: 'Submit',
    type: 'submit',
  };


  return (
    <div className="relative overflow-hidden bg-gray-800 h-screen">
      <div className="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
        <svg
          className="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  {/* <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt=""
                  /> */}
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex">
              <Link
                to="/"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
              >
                Log in
              </Link>
            </div>
          </nav>
        </Popover>

        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div>
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Foodie
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam finibus quam at pellentesque. Praesent vehicula a odio nec porta.
                  </p>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-8 sm:px-10">
                    <div className="mt-6">
                      <Form className="space-y-6" fields={authType === 'login' ? loginFields : signUpFields} onSubmit={onSubmit} button={button}/>

                      <p className='text-sm mt-5 cursor-pointer underline' onClick={authType === 'login' ? () => setAuthType('signUp') : () => setAuthType('login')}>
                        {authType === 'login' ? 'Dont have an account? Create One' : 'Already have an account? Login'}
                        
                         </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
