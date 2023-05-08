import React from 'react'
import { BiPhoneCall, BiMap, BiEnvelope, } from "react-icons/bi";
export const Contact = () => {
  return (
    <div >
      <div
        className="font-bold text-4xl mt-8 mb-0">
        Contact
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row w-96 mt-10 font-bold justify-center items-center">
          <div
            className="flex-none dark:border-opacity-50  pr-2">
            <BiPhoneCall />
          </div>
          <div
            className="flex-1 dark:border-opacity-50">
            <a href="tel:778-995-3116">+1 778-995-3116</a>
          </div>
        </div>
        <div className="flex flex-row w-96 font-bold justify-center items-center">
          <div
            className="flex-none dark:border-opacity-50 pr-2">
            <BiMap />
          </div>
          <div
            className="flex-1 dark:border-opacity-50">
            <a href="https://goo.gl/maps/kTbLWkeQcfGsSpqC9">3471 Fairbrook pl, Richmond BC</a>
          </div>
        </div>

        <div className="flex flex-row w-96 font-bold justify-center items-center">
          <div
            className="flex-none dark:border-opacity-50 pr-2">
            <BiEnvelope />
          </div>
          <div
            className="flex-1 dark:border-opacity-50">
            <a href="email:dmybestconstruction@gmail.com">dmybestconstruction@gmail.com</a>
          </div>
        </div>   </div>

    </div>
  )
}
