import react from 'react';
import PropTypes from 'prop-types';
import './menuButton.css';

class Menu_Button extends react.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            is_clicked : false,
            spans_style : {
                'backgroundColor' : this.props.normal_spans_color,
                'height' : `${this.props.spans_height}px`
            }
        };
        if(props.setmenuButton_onClick != null)
            props.setmenuButton_onClick(this.mouse_click);
    }

    span1_ref = react.createRef();
    span2_ref = react.createRef();
    span3_ref = react.createRef();


    mouse_ent = ()=>{

        this.setState({
            spans_style : {
                'backgroundColor' : this.props.hover_spans_color,
                'height' : `${this.props.spans_height}px`
            }
            
        });

    }

    mouse_leave = ()=>{

        this.setState({
            spans_style : {
                'backgroundColor' : this.props.normal_spans_color,
                'height' : `${this.props.spans_height}px`
            }
            
        });
    }

    mouse_click = (ev)=>{
        let changedState = this.state.is_clicked ? false : true;
        this.setState((prevState)=>({
            'is_clicked' : prevState.is_clicked ? false : true
        }));

        let caller = ev != null ? true : false;

        if(this.props.onMenuButton_changeState != null)
            this.props.onMenuButton_changeState(changedState, caller);
    }

    render()
    {
        if(!this.state.is_clicked)
        {
          var  span1_style = {
                backgroundColor : this.state.spans_style.backgroundColor,
                height : this.state.spans_style.height
            }
            var span2_style = {
                backgroundColor : this.state.spans_style.backgroundColor,
                height : this.state.spans_style.height
            }
            var span3_style = {
                backgroundColor : this.state.spans_style.backgroundColor,
                height : this.state.spans_style.height
            }
        }
        else
        {
            span2_style = {
                backgroundColor : this.state.spans_style.backgroundColor,
                height : this.state.spans_style.height,
                transform : 'rotate(45deg)'
            }
            span3_style = {
                backgroundColor : this.state.spans_style.backgroundColor,
                height : this.state.spans_style.height,
                marginTop : `-${this.state.spans_style.height}`,
                transform : 'rotate(135deg)'
            }
            span1_style = {
                visibility : 'visible'
            }
        }

        return(
            <div id = "menuButton_div" onMouseEnter = {this.mouse_ent} onMouseLeave = {this.mouse_leave} onClick = {this.mouse_click} >
                <span id = "menuButton_span_1" className = "menuButton_spans" ref = {this.span1_ref} style = {span1_style}></span>
                <span id = "menuButton_span_2" className = "menuButton_spans" ref = {this.span2_ref} style = {span2_style}></span>
                <span id = "menuButton_span_3" className = "menuButton_spans" ref = {this.span3_ref} style = {span3_style}></span>
            </div>
        );
    }

} 

Menu_Button.PropTypes = {
    normal_spans_color : PropTypes.string.isRequired,
    hover_spans_color : PropTypes.string.isRequired,
    spans_height : PropTypes.number.isRequired,
}




export default Menu_Button;
