import * as React from 'react'
import {useTheme} from 'next-themes'

const DarkModeToggle: React.FC = () => {
  const [mounted, setMounted] = React.useState(false)
  const {theme, setTheme} = useTheme()
  React.useEffect(() => setMounted(true), [])

  return mounted ? (
    <button
      aria-label="Toggle Color Mode"
      type="button"
      className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 flex items-center space-x-1 transition-colors ease-in-out duration-200 text-black dark:text-white"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        className="h-4 w-4"
      >
        {theme === 'dark' ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        )}
      </svg>
      <div className="w-11">{theme === 'dark' ? 'Light' : 'Dark'}</div>
    </button>
  ) : null
}

export default DarkModeToggle