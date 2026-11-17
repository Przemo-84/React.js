import react, {Component} from 'react';
import PropTypes from 'prop-types';
import './switchButton.css'

class SwitchButt extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {

            'switchButton_styles' : {
                'backgroundColor' : this.props.switchEnable ? this.props.background_color : '#a4aeb0',
                'outline' : '0px solid white',
            },

            'switch_styles' : {
                'backgroundColor' : this.props.switch_color,
                'left' : '5px',
                'position' : 'relative',
            },
            'is_enable' : this.props.switchEnable,
            'position' : 'right'
        };
    }

    button_divRef = react.createRef();
    switch_divRef = react.createRef();
    is_firstMount = false;

    mouse_ent = ()=>{

        if(!this.state.is_enable)
            return;

        this.setState({
            'switchButton_styles' : {
                'backgroundColor' : this.props.background_color,
                'outline' : this.props.focus_border_color
            }
        })

    }

    mouse_leave = ()=>{

        if(!this.state.is_enable)
            return;

        this.setState({
            'switchButton_styles' : {
                'backgroundColor' : this.props.background_color,
                'outline' : '0px solid white'
            }
        })

    }

    mouse_click = ()=>{

        if(!this.state.is_enable)
            return;

        this.state.position = this.state.position == 'left' ? 'right' : 'left';

        let leftPos = 5;

        if(this.state.position == 'right')
        {
            leftPos = this.button_divRef.current.scrollWidth
            leftPos -= (this.switch_divRef.current.scrollWidth + 5); 
        } 

        this.setState({
            'switch_styles' : {
                'backgroundColor' : this.props.switch_color,
                'left' : `${leftPos}px`,
                'position' : 'relative',
                'transition' : 'left 300ms linear'
            },
        })

        this.props.switchClickCallback(this.state.position, true);

    }



    render()
    {

        return(
            <div ref = {this.button_divRef} onMouseEnter = {this.mouse_ent} onMouseLeave = {this.mouse_leave} onClick = {this.mouse_click}  id = "switch_button" style = {this.state.switchButton_styles}>

                <div ref = {this.switch_divRef} id = "switch" style = {this.state.switch_styles}>

                </div>

            </div>
        );
    }

    componentDidMount()
    {
        if(!this.is_firstMount)
        {
            this.is_firstMount = true;

            let leftPos = 5;

            if(this.state.position == 'right')
            {
                leftPos = this.button_divRef.current.scrollWidth
                leftPos -= (this.switch_divRef.current.scrollWidth + 5); 
            } 

            this.setState({
                'switch_styles' : {
                    'backgroundColor' : this.props.switch_color,
                    'left' : `${leftPos}px`,
                    'position' : 'relative'
                },
            });
        }    
        this.props.switchClickCallback(this.state.position, false);
    }


}

 SwitchButt.propTypes = {
        background_color : PropTypes.string.isRequired,
        switch_color : PropTypes.string.isRequired,
        focus_border_color : PropTypes.string,
        switchClickCallback : PropTypes.func.isRequired,
        switchEnable : PropTypes.bool.isRequired
    }

export default SwitchButt;