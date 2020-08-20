import React from 'react';
import HeaderComponentLogo from "./headerComponents/HeaderComponentLogo";
import HeaderComponentMenu from "./headerComponents/HeaderComponentMenu";
import {Container, Row, Col} from 'react-bootstrap';
import HeaderComponentHamburger from "./headerComponents/HeaderComponentHamburger";

const HeaderComponent = () => {
    return (
        <div id={'HEADER_COMPONENT'}>
            <Container>
                <Row>
                    <Col>
                        <div id={'header-component__content'}>
                            <HeaderComponentLogo/>
                            <HeaderComponentHamburger/>
                            <HeaderComponentMenu/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderComponent;