import React from 'react';
import {Button} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LayoutWrapper from "../../components/shared/layout/LayoutWrapper";

const HomeView = () => {
    return (
        <LayoutWrapper>
            <h1>home</h1>
            <Button variant={'success'}><FontAwesomeIcon icon={faUser}/> button</Button>


            <div className={'blockp firstp'}>
                a
            </div>
            <div className={'blockp secp'}>
                b
            </div>
            <div className={'blockp thip'}>
                c
            </div>
            <div className={'blockp fop'}>
                d
            </div>
        </LayoutWrapper>
    );
};

export default HomeView;