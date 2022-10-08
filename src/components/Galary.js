import React from 'react'
import Big1 from '../images/prototype1.png'

function Galary() {
  return (
    <div class="container mx-auto">
      <div class="-m-4 flex flex-wrap">
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <a class="relative block h-48 overflow-hidden rounded border-2">
            <img
              alt="ecommerce"
              class="block h-full w-full object-cover object-center cursor-pointer"
              src={Big1}
            />
          </a>
          <div class="mt-4">
            <span class="mb-1 text-xs tracking-widest text-gray-500 bg-emerald-100 text-emerald-800 font-bold rounded p-1">
              Ecommerce Prototype
            </span>
            <h2 class="text-lg font-medium text-white">
              Mobile Application
            </h2>
            <p class="mt-1 font-bold">Figma</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Galary
