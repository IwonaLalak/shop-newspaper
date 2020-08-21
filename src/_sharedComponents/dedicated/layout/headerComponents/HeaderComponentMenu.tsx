import React from 'react';
import {Link} from "react-router-dom";
import HeaderComponentMenuBasket from "./headerMenuComponents/HeaderComponentMenuBasket";
import HeaderComponentMenuCategories from "./headerMenuComponents/HeaderComponentMenuCategories";
import {S_IconNewspaper} from "../../../shared/icons/Icons";
import {Spring} from "react-spring/renderprops-universal";
import {animated} from "react-spring";

interface Props {
    transitionProps?: any
}

const HeaderComponentMenu: React.FC<Props> = ({transitionProps}) => {
    return (
        <div id={'header-component__menu'} style={transitionProps}>
            <Spring
                from={{opacity: 0}}
                to={{opacity: 1}}
                config={{delay: 100}}
            >
                {
                    (springProps) => <animated.div style={springProps}>
                        <HeaderComponentMenuCategories/>
                        <div id={'header-component__menu__user-actions'}>
                            <ul>
                                <li>
                                    <Link to={'/newspapers'}>
                                        <S_IconNewspaper/> Gazetki
                                    </Link>
                                </li>
                                <HeaderComponentMenuBasket/>
                            </ul>
                        </div>
                    </animated.div>
                }
            </Spring>
        </div>
    );
};

export default HeaderComponentMenu;