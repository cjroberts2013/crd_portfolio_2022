import React from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Contact({option}) {
  return (
    <div id="contact" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            I would love to hear from you and find out how I can be of service. Please fill out the form below or feel free to send me a call or email. I look forward to working with you.
          </p>


          <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-700" aria-hidden="true" />
                  <a href="tel:9796180950" className="ml-3 text-gray-700 hover:text-gray-500">+1 (979) 618-0950</a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-700" aria-hidden="true" />
                  <a href="mailto:cjroberts2013@gmail.com" className="ml-3 text-gray-700 hover:text-gray-500">cjroberts2013@gmail.com</a>
                </dd>
              </div>
        </div>



        <div className="mt-12">
          <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className='sm:col-span-2'>
              <label htmlFor="package" className="block text-sm font-medium text-gray-700">
                Package you are interested in
              </label>
              <div className="mt-1">
                <select
                  id="package"
                  name="package"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
                  defaultValue={option}
                >
                  <option>Professional One-Page Website</option>
                  <option>Website + SEO submissions + Google Map Submission</option>
                  <option>Social Media Management</option>
                  <option>Social Media Management + SEO</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-secondary focus:border-secondary border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-secondary hover:ring-offset-white"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}