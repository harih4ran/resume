import React from 'react'
import Resume from './Resume'
import ShowCase from './ShowCase'
import Galary from './Galary'
function Home() {
  return (
    <div>
      {/* <Topnav /> */}
      <div className="md:px-10 md:py-10 bg-black">
        <Resume />
      </div>
      <div className="md:px-10 md:pb-10 bg-black">
        <Galary />
      </div>
      <ShowCase/>
    </div>
  )
}

export default Home
