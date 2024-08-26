import React from 'react'
import Typed from 'typed.js'
import { Link } from 'react-router-dom'

export default function Home() {
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Let's get buy some photos!"],
      typeSpeed: 50,
      backSpeed: 50,
      fadeOut: true,
      loop: true
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return (
    <div className="home">
      <div className="homeNavbar">
        <div>Home</div>
        <a href="https://wa.me/923249962290" target="_blank">
          Contact
        </a>
      </div>
      <div className="homeContainer">
        <h1>Pictobook</h1>
        <div>
          <span ref={el} />
        </div>
        <div>
          <Link to="/photos" className="moveNextIcon">
            <i className="ri-arrow-right-circle-line"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
