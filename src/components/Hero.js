import * as React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
// import { ChevronRightIcon } from '@heroicons/react/solid'
import heroimg from './../images/hero2vector.png'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Contact Us', href: '#contact' }
]

export default function Hero() {
  return (
    <div id="home" className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="bg-white pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <div className="">
                  <a href="#home" className="text-base font-bold text-gray-800">
                    Charles Roberts Design
                  </a>
                </div>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-teal-200 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#about" className="text-base font-medium text-gray-800 hover:text-gray-300">
                About
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-secondary hover:ring-offset-white"
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div className="text-base font-bold text-gray-800">
                  <Popover.Button>
                    <a href="#home" className="text-base font-bold text-gray-800">
                      Charles Roberts Design
                    </a>
                  </Popover.Button>
                </div>
                <div className="-mr-2 ">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <Popover.Button key={item.name} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-secondary hover:text-white">
                      <a
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </Popover.Button>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-800 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Beautiful Websites</span>
                    <span className="block text-secondary">that get Results</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Every business can benefit from a web presence in this day and age. Let me help bring your vision to life with a fast loading, beautiful site, custom built to your specific needs.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <a
                      href="#contact"
                      className="py-3 px-4 rounded-md shadow bg-secondary text-white font-medium hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-secondary hover:ring-offset-white"
                    >
                      Get in touch
                    </a>
                  </div>

                  
                  {/* <div className="mt-10 sm:mt-12">
                    <div action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        {/* <div className="">
                          {/* <div >
                            If you think I can help yopur business
                          </div> */}
                          {/* <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-gray-900"
                          /> */}
                        {/* </div> *
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <a
                            href="#contact"
                            className="block w-full py-3 px-4 rounded-md shadow bg-secondary text-white font-medium hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-secondary hover:ring-offset-white"
                          >
                            Get in touch
                          </a>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                        our{' '}
                        <a href="#" className="font-medium text-gray-800">
                          terms of service
                        </a>
                        .
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="mt-12 mb-16 sm:mb-48 lg:m-12 lg:relative">
                <div className="mx-auto my-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={heroimg}
                    alt="Illustration of designing a webpage."
                  />
                  {/* <div className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'> */}
                    {/* {heroimg()} */}

                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}