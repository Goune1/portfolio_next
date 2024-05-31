"use client"
import { useState } from 'react'
import React, { FormEvent, ChangeEvent } from 'react';
import axios from 'axios'
import Socials from '@/components/socials'
import { useToast } from "@/components/ui/use-toast"


function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export default function Example() {
  const { toast } = useToast()

  const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
  };
  
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://api-portfolio.gounevps.com/api/portfolioEmail', formData);
      console.log(res);
      // Réinitialiser le formulaire après un envoi réussi
      setFormData(initialFormData);
      // Afficher le message de succès
      setSuccessMessage('Votre email a été envoyé avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl flex flex-col items-center justify-center">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white">Contact me !</h2>
        <p className="mt-2 text-lg leading-8 text-white">
        Send me an Email or contact me on socials media.
        </p>

        <div className='mt-4'>
            <Socials/>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-white">
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                autoComplete="phone"
                className="block w-full rounded-md border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="block w-full rounded-md border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>      
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
                toast({
                  title: "Votre mail a bien été envoyé !",
                })
            }}
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
