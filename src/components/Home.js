import React from 'react'
import Resume from './Resume'
import ShowCase from './ShowCase'
import Topnav from './Topnav'
import Big1 from '../images/prototype1.png'
import Galary from './Galary'
function Home() {
  return (
    <div>
      <Topnav />
      <div className="md:px-10 md:pb-10 bg-black">
        <Resume />
      </div>
      {/* <div className="md:px-10 md:pb-10 bg-black">
        <Galary />
      </div>
      <div className="bg-black px-5">
        <div className="flex items-center">
          <div className="w-1/2">
            <h2 className="text-white font-bold text-xl">
              Sample Ecommerce Mobile Application Wireframe
            </h2>
          </div>
          <div className="w-1/2">
            <ShowCase />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Home
