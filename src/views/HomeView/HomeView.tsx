import React from 'react';
import {Button} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const HomeView = () => {
    return (
        <div>
            <h1>home</h1>
            <Button variant={'success'}><FontAwesomeIcon icon={faUser}/> button</Button>
        </div>
    );
};

export default HomeView;