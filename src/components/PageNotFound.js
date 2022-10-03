import React from 'react'
import {Helmet} from "react-helmet";

export default function PageNotFound() {
  return (
    <div>
      <Helmet>
        <title>Hariharan | Not Found</title>
      </Helmet>
      <h1 className="pt-72 text-center text-black">404 found</h1>
    </div>
  )
}
