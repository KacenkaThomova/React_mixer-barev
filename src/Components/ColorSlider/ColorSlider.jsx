import React, { useState } from "react";
import './style.css';

export const ColorSlider = ({baseColor, colorName, onValueChange}) => {
    const [value, setValue] = useState ('0')
    const handleChange = (event) => {
       onValueChange(event.target.value)
        setValue (event.target.value)
    }
    return (
        <div className="sliders">
		    <label htmlFor={baseColor}>{colorName}</label>
			<input
                type="range"
                className={`slider slider--${baseColor}`}
                id={`${baseColor}Slider`}
                min="0"
                max="255"
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}