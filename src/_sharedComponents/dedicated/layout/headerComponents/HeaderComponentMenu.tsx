import React from 'react';
import {Link} from "react-router-dom";
import HeaderComponentMenuBasket from "./headerMenuComponents/HeaderComponentMenuBasket";
import HeaderComponentMenuCategories from "./headerMenuComponents/HeaderComponentMenuCategories";

const HeaderComponentMenu = () => {
    return (
        <div id={'header-component__menu'}>
            <HeaderComponentMenuCategories/>
            <div id={'header-component__menu__user-actions'}>
                <ul>
                    <li>
                        <Link to={'/newspapers'}>
                            Gazetki
                        </Link>
                    </li>
                    <HeaderComponentMenuBasket/>
                </ul>
            </div>
        </div>
    );
};

export default HeaderComponentMenu;