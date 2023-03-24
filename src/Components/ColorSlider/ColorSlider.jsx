import React from "react";
import './style.css';

export const ColorSlider = ({baseColor, colorName, onValueChange}) => {
    const handleChange = (event) => {
       onValueChange(event.target.value)
    }
    return (
        <div className="sliders">
		    <label htmlFor={baseColor}>{colorName}</label>
			<input
                onChange={handleChange}
                type="range"
                className={`slider slider--${baseColor}`}
                id={`${baseColor}Slider`}
                min="0"
                max="255"
                
            />
        </div>
    )
}