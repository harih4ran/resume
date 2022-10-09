import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Resume() {
  const tech_stack = [
    'Django',
    'Python',
    'React Js',
    'Next Js',
    'AWS',
    'Flutter',
    'Tailwind CSS',
  ]

  const social_links = [
    'https://linkedin.com/in/hariharan-k-15b815166',
    'https://youtube.com/ittamiloffl',
    'https://instagram.com/ittamil',
    'https://github.com/ittamil',
    'https://telegram.com/ittamil',
  ]
  const projects = [
    {
      project_title:
        'Anti Money Laundering and Counter Terrorism Financing services',
      company: 'Sanction Screen',
      website: 'http://mommasbabyindia.com',
      tech_stack: ['Django', 'Bootstrap', 'Ajax'],
    },
    {
      project_title: 'Transaction Monitor',
      company: 'Watch4wash',
      website: 'https://aml.sanctionscreen.com.au/',
      tech_stack: ['Django', 'Tailwind CSS', 'Ajax'],
    },
    {
      project_title: 'Chettinad Zigzag',
      company: 'Zigzag',
      website: 'https://chettinadzigzag.in/',
      tech_stack: ['React Js', 'Django Rest Framework', 'Tailwind CSS'],
    },
    {
      project_title: 'MommasbabyIndia Mobile Application',
      company: 'MommasbabyIndia',
      website: 'http://mommasbabyindia.com',
      tech_stack: ['Django', 'Bootstrap', 'Ajax', 'Flutter'],
    },
  ]
  return (
    <div>
      <div className="p-10 bg-white dark:bg-white dark:bg-opacity-25 rounded-md">
        <div className="flex flex-wrap">
          <div className="md:w-1/2">
            <h1 className="font-extrabold text-3xl md:text-6xl tracking-widest dark:text-white">
              Hariharan K
            </h1>
            <p className="font-extrabold text-lg md:text-xl tracking-widest text-emerald-400">
              Full Stack Developer
            </p>
          </div>
          <div className="md:w-1/2"></div>

          <div className="md:w-1/3 mt-10">
            <h1 className="font-extrabold text-md tracking-widest dark:text-white uppercase">
              Education
            </h1>
            <p className="text-md tracking-widest dark:text-white">
              - Bachelor of Computer Application
            </p>
            <p className="pl-5 text-md tracking-widest dark:text-white">
              Ananda College, Devakottai
            </p>
            <p className="pl-5 text-xs tracking-widest dark:text-white">
              2017-2020
            </p>
            <div className="border-b my-4"></div>
            {/* <p className="text-md tracking-widest dark:text-white">
                - Hr.Sec.School
              </p>
              <p className="pl-5 text-md tracking-widest dark:text-white">
                N.S.M.V.P.S Hr.Sec.School, Devakottai
              </p>
              <p className="pl-5 text-xs tracking-widest dark:text-white">
                2015-2017
              </p>
              <div className="border-b my-4"></div>
              <p className="text-md tracking-widest dark:text-white">
                - Sec.School
              </p>
              <p className="pl-5 text-md tracking-widest dark:text-white">
                Govt High School, Thuvarankurichi
              </p>
              <p className="pl-5 text-xs tracking-widest dark:text-white">
                2014-2015
              </p>
              <div className="border-b my-4"></div> */}
            <div className="mt-3">
              {/* <p className="mb-3"> */}
              <div className="flex flex-wrap justify-between">
                {tech_stack.map((e) => (
                  <span className="m-2 text-md text-white bg-black px-3 py-1 rounded-md">
                    {e}
                  </span>
                ))}
              </div>
              {/* </p>         */}
            </div>
            <div className="border-b my-4"></div>
            <div className="flex mt-2 justify-around">
              {social_links.map((e) => (
                <div className="pr-2">
                  <SocialIcon
                    url={e}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></SocialIcon>
                </div>
              ))}
            </div>
          </div>
          <div className="md:pl-10 md:w-2/3 mt-10">
            <h1 className="font-extrabold text-md tracking-widest dark:text-white uppercase">
              Summary
            </h1>
            <p className="pl-2 md:pl-5 text-md tracking-widest dark:text-white text-justify">
              To work in the field of Information Technology where my interest
              in IT and programming can be fully realized. My passion for
              teaching has leaded me to take courses outside of my degree to
              further my knowledge. My experience as Software Engineer and
              freelancer has helped me put theoretical skills to practice and
              complete more projects. I wish to work in a challenging and
              creative environment where I can use my skills in the best
              possible way to achieve the company’s goal.
            </p>
            <div className="border-b my-4"></div>
            <h1 className="font-extrabold text-md tracking-widest dark:text-white uppercase">
              Projects
            </h1>
            {projects.map((e)=>(
            <div>
              <p className="pl-2 md:pl-5 text-md tracking-widest dark:text-white">
                {e.project_title}
              </p>
              <p className="pl-2 md:pl-5 text-sm tracking-widest dark:text-emerald-400 my-2">
                <a
                  className="p-1 bg-emerald-200 rounded-md font-bold border-emerald-200 hover:border-emerald-600 hover:bg-transparent hover:text-emerald-600 border-2 text-emerald-600"
                  href={e.website}
                >
                  {e.company}
                </a>
              </p>
              <div className="mt-3 md:pl-3">
                {e.tech_stack.map((i)=>(
                <span className="mx-2 text-md text-white bg-black px-3 py-1 rounded-md">
                  {i}
                </span>
                ))}
              </div>
              <div className="border-b my-4"></div>
            </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}
