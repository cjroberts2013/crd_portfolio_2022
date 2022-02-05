import React, { useState } from 'react';
import {Link} from 'gatsby'
import { CheckIcon } from '@heroicons/react/outline'

const webOffering = [
  {
    name: 'Professional One-Page Website',
    option: 'website',
    priceMonthly: 350,
    description: 'Design and build a beautiful, fast and responsive one page website.',
    features: [
      'Mobile friendly design',
      'Loads quickly',
      'Additional pages available for upcharge',
      'Hosting available for upcharge',
    ],
  },
  {
    name: 'Website + SEO submissions + Google Map Submission',
    option: 'website+seo',
    priceMonthly: 495,
    description: 'Addition of SEO submissions and submitting your business to Google Maps',
    features: [
      'Professional One-Page Website',
      'SEO Optimized',
      'Submit to local directories to increase site ranking',
      'Add your business to Google Maps',
    ],
  },
]

const marketingOffering = [
    {
      name: 'Social Media Management',
      option: 'marketing',
      priceMonthly: 250,
      description: 'Manage your socials to drive engagement.',
      features: [
        '2 posts to Facebook account weekly',
        '2 posts to Instagram account weekly',
        'Increase Customer Engagement',
        'Analytics Reports',
      ],
    },
    {
      name: 'Social Media Management + SEO',
      option: 'marketing+seo',
      priceMonthly: 350,
      description: 'Addition of SEO optimization to get your site ranking on Google.',
      features: [
        'Social Media Management package',
        'Continuous effort to get business ranked on Google',
        'Professional, related articles written to boost long-term SEO results',
      ],
    },
  ]

export default function Pricing() {
  const [pricing, setPricing] = useState("website");
  // console.log(pricing);

  var activestyle = "bg-white border-gray-200 shadow-sm text-gray-900";
  var regularstyle = "border border-transparent text-gray-500";

  return (
    <div id="pricing" className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-4xl leading-6 font-extrabold text-gray-300 mb-10 tracking-wider">Pricing</h2>
            {/* <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Affordable web design. Accessible for everyone.
            </p> */}
            <p className="text-xl text-gray-300">
              We offer both a web design package and a monthly marketing subscription package.
            </p>
          </div>
          <div className="relative self-center mt-6 bg-gray-900 rounded-lg p-0.5 flex justify-center sm:mt-8">
            <button
              type="button"
              onClick={() => setPricing("website")}
              className={`relative w-1/2 ${pricing === "website" ? activestyle : regularstyle } rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8`}
            >
              Website Pricing
            </button>
            <button
              type="button"
              onClick={() => setPricing("marketing")}
              className={`ml-0.5 relative w-1/2 ${pricing === "marketing" ? activestyle : regularstyle } rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8`}
            >
              Marketing Pricing
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {pricing === "website" && webOffering.map((web) => (
                <div key={web.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                        id="web-standard"
                      >
                        {web.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      ${web.priceMonthly}
                      {/* <span className="ml-1 text-2xl font-medium text-gray-500">* Starting price</span> */}
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{web.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      {web.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <Link
                        to="/contact"
                        state={{ option: web.name }}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-gray-800 hover:ring-offset-white"
                        aria-describedby="web-standard"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {pricing === 'marketing' && marketingOffering.map((marketing) => (
                <div key={marketing.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                        id="marketing-standard"
                      >
                        {marketing.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      ${marketing.priceMonthly}
                      <span className="ml-1 text-2xl font-medium text-gray-500">/mo</span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{marketing.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      {marketing.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <Link
                        to="/contact"
                        state={{ option: marketing.name }}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-gray-800 hover:ring-offset-white"
                        aria-describedby="marketing-standard"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                    Discounted
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  Get full access to all of standard license features for solo projects that make less than $20k gross
                  revenue for <span className="font-semibold text-gray-900">$29</span>.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Buy Discounted License
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}