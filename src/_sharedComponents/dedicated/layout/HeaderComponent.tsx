import React from 'react';
import HeaderComponentLogo from "./headerComponents/HeaderComponentLogo";
import HeaderComponentMenu from "./headerComponents/HeaderComponentMenu";
import {Container, Row, Col} from 'react-bootstrap';
import HeaderComponentHamburger from "./headerComponents/HeaderComponentHamburger";
import {Transition} from "react-spring/renderprops-universal";
import {US_isMobileDeviceM} from "../../../_utilities/shared/rwdResolutions";


interface Props {

}

interface State {
    isMenuOpen: boolean
}

class HeaderComponent extends React.Component<Props, State> {

    state = {
        isMenuOpen: false
    };

    render() {

        let {isMenuOpen} = this.state;

        return (
            <div id={'HEADER_COMPONENT'}>
                <Container>
                    <Row>
                        <Col>
                            <div id={'header-component__content'}>
                                <div id={'header-component__content__upper'}>
                                    <HeaderComponentLogo/>
                                    <HeaderComponentHamburger isMenuOpen={isMenuOpen} handleToggleIsMenuOpen={(isMenuOpen: boolean) => this.setState({isMenuOpen})}/>
                                </div>

                                {
                                    US_isMobileDeviceM() ?

                                        <Transition
                                            items={isMenuOpen}
                                            from={{maxHeight: '0px'}}
                                            enter={{maxHeight: '1000px', overflow: 'hidden'}}
                                            leave={{maxHeight: '0px'}}
                                        >
                                            {
                                                (open) => open &&
                                                    ((transitionProps: any) => <HeaderComponentMenu transitionProps={transitionProps}/>)
                                            }
                                        </Transition>

                                        :
                                        <HeaderComponentMenu/>
                                }

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HeaderComponent;