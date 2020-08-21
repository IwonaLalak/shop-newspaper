import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAppleAlt, faBars,
    faCarrot,
    faCoffee, faNewspaper,
    faShoppingBasket
} from "@fortawesome/free-solid-svg-icons";

// S - like Shared component

export const S_IconBasket = () => <FontAwesomeIcon icon={faShoppingBasket}/>
export const S_IconApple = () => <FontAwesomeIcon icon={faAppleAlt}/>
export const S_IconCarrot = () => <FontAwesomeIcon icon={faCarrot}/>
export const S_IconCoffee = () => <FontAwesomeIcon icon={faCoffee}/>
export const S_IconBars = () => <FontAwesomeIcon icon={faBars}/>
export const S_IconNewspaper = () => <FontAwesomeIcon icon={faNewspaper}/>