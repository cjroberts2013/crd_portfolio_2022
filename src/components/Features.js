import React from 'react'
import { DesktopComputerIcon, PresentationChartBarIcon, SearchCircleIcon, CloudUploadIcon } from '@heroicons/react/outline'

const features = [
    {
      name: 'Responsive Web Design',
      description: 'Every business can benefit from a web presence in this day and age. Let me help bring your vision to life with a fast loading, beautiful site, custom built to your specific needs.',
      icon: DesktopComputerIcon,
    },
    {
      name: 'Web Hosting',
      description:
        "Hosting is tricky and a hassle to deal with. As your hosting manager, I'll take care the necessary updates and support needed to keep your site running smoothly. I'll also provide the necessary SSL certificate to keep your site secure.",
      icon: CloudUploadIcon,
    },
    {
      name: 'Analytics Report',
      description:
        'I break down the important data about how your site is performing and the people who visit it. I then deliver a detailed report on a monthly basis.',
      icon: PresentationChartBarIcon,
    },
    {
      name: 'SEO',
      description:
        'I optimize websites for search engines. My focus is on crafting helpful page title tags and meta descriptions, keyword rich URLs, useful image titles and alt tags, and ensuring fast loading speeds.',
      icon: SearchCircleIcon,
    },
  ]

export default function Features() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How I can help your business.
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}