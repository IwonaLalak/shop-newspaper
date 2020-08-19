import React from 'react';
import HeaderComponentLogo from "./headerComponents/HeaderComponentLogo";
import HeaderComponentMenu from "./headerComponents/HeaderComponentMenu";
import {Container, Row, Col} from 'react-bootstrap';

const HeaderComponent = () => {
    return (
        <div id={'HEADER_COMPONENT'}>
            <Container>
                <Row>
                    <Col>
                        <div id={'header-component__content'}>
                            <HeaderComponentLogo/>
                            <HeaderComponentMenu/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderComponent;