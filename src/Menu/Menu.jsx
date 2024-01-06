import React from 'react';
import './game-menu.css';
function Menu() {
    const buttons = ['New Game', 'Continue', 'Online', 'Settings', 'Quit'];

    return (
        <ul className="threeD-button-set">
            {buttons.map((button, index) => (
                <li key={index}>
                    <button>{button}</button>
                </li>
            ))}
        </ul>
    );
}

export default Menu;
