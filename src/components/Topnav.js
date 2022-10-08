import React from 'react'
import { Switch } from '@headlessui/react'
import { ThemeContext } from '../context/ThemeContext'

function Topnav() {
  const [enabled, setEnabled] = React.useState(false)
  const { theme, setTheme } = React.useContext(ThemeContext)


  return (
    <div>
      <div
        className="bg-black dark:bg-white w-full flex items-center justify-end  py-6 px-8 space-x-6">
        <div className="font-bold text-white">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`${
              enabled ? 'bg-emerald-500' : 'bg-red-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Topnav
