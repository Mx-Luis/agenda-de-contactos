import { useEffect,useState } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return sessionStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.body.className = theme
    sessionStorage.setItem('theme', theme)
  }, [theme])
  
  const handleToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <button onClick={handleToggle} className="theme-toggle">
      {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
    </button>
  )
}

export default ThemeToggle
