import { useState } from "react";
import "./Banner.css"
const Banner = ({title, answer}) => {
    const [active,setActive] = useState(false);
    return(
        <div onClick={() => setActive(!active)} className="faq-banner">
            <p className="faq-question border" >{title}</p>
            <p className={active ? "active border" : "deactive" }> {answer} </p>
        </div>
    )
}

export default  Banner;