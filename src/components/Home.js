import React from 'react';
import { Switch } from '@headlessui/react'
import  { ThemeContext }  from '../context/ThemeContext';
import Resume from './Resume';

function Home() {
  const [enabled, setEnabled] = React.useState(false)
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <Resume/>
    </div>
  )
}

export default Home
