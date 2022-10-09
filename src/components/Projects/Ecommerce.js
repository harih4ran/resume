import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import proto1 from '../../images/ecommerce/proto1.png'
import proto2 from '../../images/ecommerce/proto2.png'
import proto3 from '../../images/ecommerce/proto3.png'
import proto4 from '../../images/ecommerce/proto4.png'
import proto5 from '../../images/ecommerce/proto5.png'
import proto6 from '../../images/ecommerce/proto6.png'
const img = [proto1, proto2, proto3, proto4, proto5, proto6]

let count = 0
let slideInterval

export default function Ecommerce() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleNext = () => {
    count = (count + 1) % img.length
    setCurrentIndex(count)
    sliderRef.current.classList.add('fade-anim')
  }
  const handlePrev = () => {
    const productLength = img.length
    count = (currentIndex + productLength - 1) % img.length
    setCurrentIndex(count)
    sliderRef.current.classList.add('fade-anim')
  }
  const sliderRef = useRef()
  const removeAnimation = () => {
    sliderRef.current.classList.remove('fade-anim')
  }
  useEffect(() => {
    sliderRef.current.addEventListener('animationend', removeAnimation)
    sliderRef.current.addEventListener('mouseenter', pauseSlider)
    sliderRef.current.addEventListener('mouseleave', startSlider)
    startSlider()
    return () => {
      pauseSlider()
    }
  }, [])

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleNext()
    }, 4000)
  }

  const pauseSlider = () => {
    clearInterval(slideInterval)
  }
  return (
    <div className="flex items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="w-1/2">
        <h2 className="text-white text-2xl stroke">
          Sample Ecommerce Mobile Application Wireframe
        </h2>
      </div>
      <div className="w-1/2">
        <div ref={sliderRef} className="select-none relative">
          <div className="flex">
            <div className="w-full">
              <img src={img[currentIndex]} className="h-auto w-full px-36" />
            </div>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between items-center w-full">
            <button onClick={handlePrev} className="bg-white rounded-full p-2">
              <AiOutlineArrowLeft size={25} className="text-black" />
            </button>
            <button onClick={handleNext} className="bg-white rounded-full p-2">
              <AiOutlineArrowRight size={25} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
