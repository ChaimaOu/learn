import { Link } from "react-router-dom"

import "./Style.css"
export default function NavBar() {
    return(
      <nav>
        <a href="/" className="site-title" >WebName</a>
        <ul>
            <li>
                <a href="/Home">Home</a>
            </li>
            <li>
            <a href="/About">About us</a>
            </li>
            <li>
            <a href="/Contact">Contact us</a>
            </li>
        </ul>
      </nav>
    )
  }