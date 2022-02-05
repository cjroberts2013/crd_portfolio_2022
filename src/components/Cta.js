import React from 'react';
import {Link} from 'gatsby'

export default function Cta({head, sub, cta, ctalink}) {
    return (
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block text-black">Ready to get started?</span>
            <span className="block text-white">Get in touch today</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                state={{ option: "Professional One-Page Website" }}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-white hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-white hover:ring-offset-secondary"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }