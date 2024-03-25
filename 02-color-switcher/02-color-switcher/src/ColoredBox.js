// useState is a hook
// a hook is a function, when called, will add
// new functionality to a component
import React, { useState } from 'react'

function ColoredBox() {

    const [color, setColor] = useState(1);

    const getColor = () => {
        if (color === 1) {
            return 'red';
        }
        if (color === 2) {
            return 'blue';
        }
        if (color === 3) {
            return 'green';
        }
    }

    return <React.Fragment>
        <div style={{
            border: '1px black solid',
            width: '50px',
            height: '50px',
            backgroundColor: getColor()
        }}>
        </div>

        <button>Red</button>
        <button>Green</button>
        <button>Blue</button>
    </React.Fragment>

}

export default ColoredBox;