import React from 'react';
import {S_IconBasket} from "../../../../shared/icons/Icons";
import {Link} from "react-router-dom";
import { Badge } from 'react-bootstrap';

const HeaderComponentMenuBasket = () => {
    return (
        <li id={'header-component__menu__user-actions__basket'}>
            <Link to={'/newspapers'}>
                <S_IconBasket/> Koszyk <Badge variant={'primary'}>0</Badge>
            </Link>
        </li>
    );
};

export default HeaderComponentMenuBasket;