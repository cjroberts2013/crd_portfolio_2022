import React from 'react';
import BBB from './../images/bbb-review.png'
import AV from './../images/av-review.png'
import BFM from './../images/bfm-review.png'
import brenkfam from './../images/daryl.png'
import brodyfam from './../images/brody.png'
import avfam from './../images/av-fav.ico'

import { ChipIcon, OfficeBuildingIcon, InboxInIcon } from '@heroicons/react/outline'

export default function Reviews() {
  return (
    <div className="relative bg-white pt-16 pb-16 overflow-hidden">
      <div className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl mb-10 md:mb-20">Previous Projects</h2>
      </div>
      <div className="relative">
      
        <div className="mt-16">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2  lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-secondary">
                    <InboxInIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Association Voting
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Association voting offers a way for associations to run their elections in a world that is becoming more and more remote. The goal of this project was to provide a new marketing landing page to help drive more conversions.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://mobileelections.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-secondary hover:ring-offset-white"
                    >
                      Go to site
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;We thoroughly enjoyed working with Charles on this landing page. He created a beautiful product for us and our customers love the new design.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={avfam}
                          alt="Brody's family"
                        />
                      </div>
                      <div className="text-base font-medium text-gray-700">Kim Harwood, Chief Voting Officer</div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="z-40 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={AV}
                  alt="Association voting webpage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-secondary">
                  <OfficeBuildingIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Brenk Facility Maintenance
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                Brenk Facility Maintenance has 20 years of experience providing exceptional service in both residential and commercial settings, but without an online presence, was struggling to expand to new markets. Now they are able to reach a wider market and have new clients coming to them through the website.
                </p>
                <div className="mt-6">
                  <a
                    href="https://brenkfacilitymaintenance.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-secondary hover:ring-offset-white"
                  >
                    Go to site
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Charles did an amazing job making my website. He was very professional and clearly explained everything. I am really glad we worked with him and got our online presence set up. &rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={brenkfam}
                        alt="Daryl's family"
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Daryl Brenk, Owner</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={BFM}
                alt="Brenk Facility Maintenance website"
              />
            </div>
          </div>
        </div>
        <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2  lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-secondary">
                  <ChipIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Brody's Busy Bees
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Brody and his wife run a small family owned bee removal business dedicated to the live removal and relocation of honeybees in conflict with human activity. With a new website, they are now able to attract new customers and effectively showcase their services to potential clients.
                </p>
                <div className="mt-6">
                  <a
                    href="https://brodysbusybees.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-secondary hover:ring-offset-white"
                  >
                    Go to site
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Charles made this process so easy for us. From start to finish he exceeded every expectation and delivered a beautiful site. We are beyond happy with the final results.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={brodyfam}
                        alt="Brody's family"
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Brody Thompson, Owner</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="z-40 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={BBB}
                alt="Brody's Busy Bees wepsite"
              />
            </div>
          </div>
        </div>
      </div>
        </div>

    </div>
  )
}