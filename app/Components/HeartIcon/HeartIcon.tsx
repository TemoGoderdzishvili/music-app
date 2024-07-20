import { useState } from "react";

const HeartIcon = () => {
    const[isClicked, setIsClicked] = useState<boolean>(false)
    const iconUrl = isClicked ? "/icons/heartFilled.png" : "/icons/heartUnfilled.png"
    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <img src={iconUrl} onClick={handleClick}/>
    )
}
export default HeartIcon