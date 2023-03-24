import React from "react";
import './style.css';

export const ColorSlider = ({baseColor, colorName, onValueChange}) => {
    return (
        <div className="sliders">
		    <label for={baseColor}>{colorName}</label>
			<input
                onChange={onValueChange(value)}
                type="range"
                className={`slider slider--${baseColor}`}
                id={`${baseColor}Slider`}
                min="0"
                max="255"
                value="0"
            />
        </div>
    )
}