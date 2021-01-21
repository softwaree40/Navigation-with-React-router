import React from "react"
import Link from "./Link"


const Header =()=>{

 return (
   <div className="text-decoration">
       <Link href="/">
           Home
       </Link>

      <Link href="/about">
          About Us
      </Link>

      <Link href="/careers">
          Careers 
      </Link>

      <Link href="/industries">
          Industries
      </Link>

      <Link href="/whatwedo">
          What We Do
      </Link>

      <Link href="/insights">
          Insights 
      </Link>
 </div>
 )

}
export default Header