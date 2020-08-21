import React from 'react';
import {S_IconBars, S_IconTimes} from "../../../shared/icons/Icons";
import {Transition} from "react-spring/renderprops-universal";
import {animated} from "react-spring";

interface Props {
    isMenuOpen: boolean,
    handleToggleIsMenuOpen: (isMenuOpen: boolean) => void;
}

const HeaderComponentHamburger: React.FC<Props> = ({isMenuOpen, handleToggleIsMenuOpen}) => {

    return (
        <div id={'header-component__hamburger'} onClick={() => handleToggleIsMenuOpen(!isMenuOpen)}>
            <Transition
                items={isMenuOpen}
                from={{
                    position: 'absolute',
                    opacity: 0,
                    height: 0,
                    transform: 'translateY(-10%)'
                }}
                enter={{
                    opacity: 1,
                    height: 'auto',
                    transform: 'translate(0%)'
                }}
                leave={{
                    opacity: 0
                }}
            >
                {
                    (open) =>
                        open ?
                            (transitionProps: any) => <animated.div style={transitionProps}><S_IconTimes/></animated.div>
                            :
                            (transitionProps: any) => <animated.div style={transitionProps}><S_IconBars/></animated.div>

                }
            </Transition>
        </div>
    );
};

export default HeaderComponentHamburger;