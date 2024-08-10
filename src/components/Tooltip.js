import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ content }) => {
    const [visible, setVisible] = useState(false);

    return (
        <span
            className="tooltip"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {visible && <span className="tooltip-content">{content}</span>}
        </span>
    );
};

export default Tooltip;
