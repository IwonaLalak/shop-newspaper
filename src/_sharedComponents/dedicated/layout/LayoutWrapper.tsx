import React from 'react';
import HeaderComponent from "./HeaderComponent";
import {Container, Row, Col} from 'react-bootstrap';
import FooterCompontent from "./FooterCompontent";

interface Props {
    children: any
}

const LayoutWrapper: React.FC<Props> = ({children}) => {
    return (
        <div id={'LAYOUT_WRAPPER'}>
            <HeaderComponent/>
            <div id={'CONTENT_WRAPPER'}>
                <Container>
                    <div id={'CONTENT'}>
                        {children}
                    </div>
                </Container>
            </div>
            <FooterCompontent/>
        </div>
    );
};

export default LayoutWrapper;