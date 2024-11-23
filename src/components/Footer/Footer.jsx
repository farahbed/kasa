import React from "react"
import kasaFooter from "./kasaFooter.png"
import "./Footer.scss"


function Footer() {
return (
<footer>
<img className="footerLogo" src={kasaFooter} alt="logo" />
    <p className="footerText">© 2022 Kasa. All rights reserved</p>
   
    
  </footer>

)

}

export default Footer