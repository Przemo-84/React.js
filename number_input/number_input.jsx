import { useState} from "react";
import PropTypes from "prop-types";
import "./number_input.css";


var timeoutHandle = null;
var currentButtonFunc  = null;

const Number_Input = (props) => {
    const [currentValue, setCurrentvalue] = useState(props.defaultValue);
  
    const numberInput_div_styles = {
        "backgroundColor" : props.colorsStyles.backgroundColor,
        "border" : props.colorsStyles.border,
        "borderRadius" : "6px"
    }

    const numberInput_buttons_styles = {
        "backgroundColor" : props.colorsStyles.backgroundButtonColor,
        "border" : props.colorsStyles.buttonBorder,
        "color" : props.colorsStyles.buttonTextColor,
        "borderRadius" : "6px",
    }

    const numberInput_span_styles = {
        "color" : props.colorsStyles.textColor
    }

    const onIncrementValue = ()=>{
        setCurrentvalue((prev_value)=>{
            if(prev_value < props.maxValue)
                return prev_value + 1;
            else
                return prev_value;
        })
    }

     const onDecrementValue = ()=>{
        setCurrentvalue((prev_value)=>{
            if(prev_value > props.minValue)
                return prev_value - 1;
            else
                return prev_value;
        })
    }


    const buttonTimeut = ()=>{
        // timeoutHandle = null;
        if(currentButtonFunc != null)
        {
            currentButtonFunc();
            setTimeout(buttonTimeut, 50);
        }
    }


    const onMouseDown = (evt)=>{

        if(evt.currentTarget.innerText === '+')
        {
            currentButtonFunc = onIncrementValue;
            onIncrementValue();
            timeoutHandle = setTimeout(()=>{
                buttonTimeut()
            },500)
        }
        else if(evt.currentTarget.innerText === '-')
        {
            currentButtonFunc = onDecrementValue;
            onDecrementValue();
            timeoutHandle = setTimeout(()=>{
                buttonTimeut()
            },500)
        }
    }

    const onMouseUp = ()=>{
        currentButtonFunc = null;
        clearTimeout(timeoutHandle);
        timeoutHandle = null;
    }

    return(
        <div className = "numberInput_div" style = {numberInput_div_styles}>
            <span className = "numberInput_span" style = {numberInput_span_styles}>{currentValue} {props.suffix}</span>
            <span className = "numberInput_buttons" style = {numberInput_buttons_styles} onMouseDown = {onMouseDown} onMouseUp = {onMouseUp}>-</span>
            <span className = "numberInput_buttons" style = {numberInput_buttons_styles} onMouseDown = {onMouseDown} onMouseUp = {onMouseUp}>+</span>
        </div>
    )

};


Number_Input.ProoTypes = {
  defaultValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  colorsStyles: PropTypes.object.isRequired,
  suffix : PropTypes.string.isRequired
};

export default Number_Input;
