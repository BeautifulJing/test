import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem('theme')))
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(dark))
    let theme = document.documentElement.getAttribute('data-theme')
    if (dark && theme !== 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else if (!dark && theme !== 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [dark])

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <label className="flex cursor-pointer gap-2">
              <input
                type="checkbox"
                checked={dark}
                onChange={() => setDark(!dark)}
                className="toggle"
              />
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}
