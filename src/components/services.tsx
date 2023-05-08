import React, { useState } from 'react'

const slogan = "Build Your Dream Space"

const dmy_services = [
  { "name": "Restoration", "link": "20.jpg" },
  { "name": "Woorock Furniture", "link": "30.jpg" },
  { "name": "Upholstery", "link": "61.jpg" },
  { "name": "Cabinet", "link": "50.jpg" },
  { "name": "Vintage Furniture Refresh", "link": "70.jpg" },
]
interface EventProperties { 
  onClkService:(img:string)=>void
}
const Services = (props: EventProperties) => {
  return (
    <>
      <div
        className="font-bold text-4xl">
        {slogan}
      </div>
      <ul className="w-96 mt-10 font-bold">
        {dmy_services.map((service, key) => {
          return <li key={key}
            onClick={() => props.onClkService(service.link)}
            className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 hover:bg-gray-500">
            {service.name}
          </li>
        })}
      </ul>
    </>
  )
}
export default Services
