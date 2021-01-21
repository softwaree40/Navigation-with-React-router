import React from "react"

const Link =({href,children,className})=>{
    const preventFullPageReload = (event)=>{
     event.preventDefault()
     // implementing this to change the extension link without refresh of page
     window.history.pushState({},"",href)
     // implement notification to the component of such link
     

    }

return <a onClick={preventFullPageReload} className={className} href={href}>{children}</a>


}
export default Link