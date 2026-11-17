import { useState, useLayoutEffect, useRef, useEffect } from "react";
import "./input_selectList.css";
import checked_icon from './darkBlue_checked_icon.png';

const defaultStyles = {
    background_color : "#f8fafc",
    border : "1px solid #c4c5c9",
    border_hover : "2px solid #95969d",
    color : "#111827",
    fontFamily : "Arial",
    max_height : "250px",
    placeholder : ""
}

const defaultLabelStyles = {
    color : "#111827",
    fontFamily : "Arial",
    text : "Label",
    showLabel : false
}

const defaultListItems = {
    items : ["Item 1", "Item 2", "Item 3"],
    selectedItem : 0,
}

function Input_SelectList({settings = defaultStyles, label_settings = defaultLabelStyles, list_items = defaultListItems, icon = null, dropDown_icon = null, changeItem_callback = null})
{
    const [divStyles, setDivStyles] = useState({
        backgroundColor : settings.background_color,
        outline : settings.border,
        color : settings.color,
        fontFamily : settings.fontFamily,
        borderRadius : '4px',
    })

    const [labelStyles] = useState({
        color : label_settings.color,
        fontFamily : label_settings.fontFamily,
        text : label_settings.text,
        display : label_settings.showLabel ? 'block' : 'none'

    })

    const observer = useRef(null);

    const firstMount = useRef(false);
    const elementsRefs = useRef({});

    const img_ref = useRef(null);
    const dropDown_img_ref = useRef(null);
    const input_div_ref = useRef(null);
    const input_ref = useRef(null);
    const div_ref = useRef(null);
    const list_div_ref = useRef(null);
    const inputSelect_label_ref = useRef(null);
    const [dimensionsLeft, setDimensionsLeft] = useState({ height: 0, width: 0 });
    const [dimensionsRight, setDimensionsRight] = useState({ height: 0, width: 0 });
    const [listVisibility, setListVisibility] = useState(false);
    const [selectedItem, setSelectedItem] = useState(list_items.selectedItem)
    

    const getRefs = ()=>{
        elementsRefs.current = {
            listDiv_items_refs : document.getElementsByClassName('listDiv_items'),
            listDiv_itemIcons_refs : document.getElementsByClassName('listDiv_itemIcons'),
        };
    }

    const handleImageLeftLoad = (e) => {
        const { clientHeight, clientWidth } = e.target;
        setDimensionsLeft({ height: clientHeight, width: clientWidth });
    };

    const handleImageRightLoad = (e) => {
        const { clientHeight, clientWidth } = e.target;
        setDimensionsRight({ height: clientHeight, width: clientWidth });
    };

    const onInputClick = ()=>{
        if(!listVisibility)
        {
            setDivStyles((prevState)=>{
            return { 
                    ...prevState,
                    outline : settings.border_hover
            }

            })
            setListVisibility(true);
        }
        else
        {
            setDivStyles((prevState)=>{
            return { 
                    ...prevState,
                    outline : settings.border
            }

            })
            setListVisibility(false);
        }
    }

    const onInputBlur = ()=>{
        setDivStyles((prevState)=>{
           return { 
                ...prevState,
                outline : settings.border
           }

        })
        setTimeout(()=>{setListVisibility(false);},100)
    }

    const onItemClick = (evt)=>{
        const index = Number(evt.currentTarget.dataset.index);
        if(input_ref.current != null && list_items.items.length > 0)
                    input_ref.current.value = list_items.items[index];
        setSelectedItem(index);
        if(changeItem_callback != null)
            changeItem_callback(index);
    }

    const Input_onKeyDownFocus = (evt)=>{
        evt.preventDefault();
        evt.currentTarget.blur();
    };

    const setLayout = ()=>{

        if(div_ref.current != null)
        {
            var parent_div_width = div_ref.current.parentElement.clientWidth;
            const input_paddingLeft = icon == null ? 10 : dimensionsLeft.width + 20;
            const input_paddingRight = dropDown_icon == null ? 0 : dimensionsRight.width + 20;

            input_ref.current.style.paddingLeft = `${input_paddingLeft}px`;
            input_ref.current.style.paddingRight = `${input_paddingRight}px`;
            input_ref.current.style.width = `${parent_div_width - (input_paddingLeft + input_paddingRight)}px`;


            const marginTop = label_settings.showLabel ? Number.parseInt(window.getComputedStyle(inputSelect_label_ref.current).marginBottom, 10) +  inputSelect_label_ref.current.clientHeight: 0;

            div_ref.current.style.height = `${input_ref.current.clientHeight + marginTop }px`;
            // input_div_ref.current.style.marginTop = `${marginTop}px`;

            if(img_ref.current != null)
                img_ref.current.style.marginTop = `${(input_ref.current.clientHeight - dimensionsLeft.height) / 2}px`;

            if(dropDown_img_ref.current != null)
            {
                dropDown_img_ref.current.style.marginTop = `${(input_ref.current.clientHeight - dimensionsRight.height) / 2}px`;

                dropDown_img_ref.current.style.marginLeft = `${parent_div_width - (dimensionsRight.width + 10 )}px`;
            }
        }

        if(elementsRefs.current.listDiv_items_refs != null && elementsRefs.current.listDiv_itemIcons_refs != null)
        {
            for(let i = 0; i < elementsRefs.current.listDiv_items_refs.length; i++)
            {
                elementsRefs.current.listDiv_itemIcons_refs[i].style.marginTop = `${(elementsRefs.current.listDiv_items_refs[i].clientHeight - elementsRefs.current.listDiv_itemIcons_refs[i].clientHeight)/2}px`;
            }     
            
            if(list_div_ref.current != null)
            {
                list_div_ref.current.style.marginTop = `${input_ref.current.clientHeight + 2}px`;
                list_div_ref.current.style.width = `${parent_div_width}px`;
            }
        }
    }

    useEffect(()=>{
        if(input_ref.current != null && list_items.items.length > 0 && list_items.selectedItem >=0 && list_items.selectedItem < list_items.items.length)
                    input_ref.current.value = list_items.items[list_items.selectedItem];
        return ()=>{
            if(!firstMount.current)
            {
                getRefs();
                firstMount.current = true;

                observer.current = new ResizeObserver(setLayout);
                const divRef = document.querySelector('.input_select_div')
                if(divRef != null)
                    observer.current.observe(divRef);
                setLayout();
            } 
        }
    });

    useLayoutEffect(()=>{
        setLayout();
    })

    const renderIcon  = ()=>{
        if(icon != null)
            return (<img src = {icon} id = "leftIcon" className = "left_right_icons" ref = {img_ref} onLoad = {handleImageLeftLoad}></img>)
    }

    const renderDropDownIcon  = ()=>{
        if(dropDown_icon != null)
            return (<img src = {dropDown_icon} id = "rightIcon" className = "left_right_icons" ref = {dropDown_img_ref} onLoad = {handleImageRightLoad}></img>)
    }

    const renderItemsList = ()=>{
        if(listVisibility)
        {
            var list_item_style = {fontFamily : settings.fontFamily};

            const listItems = list_items.items.map((_item, index)=>{
                const checkIcon_style = {
                    visibility : index == selectedItem ? 'visible' : 'hidden'
                };
                return(
                    <div key = {index} className = "listDiv_items" onClick = {onItemClick} data-index = {index}>
                        <span className = "listDiv_itemSpans" style = {list_item_style} >
                            {_item}
                        </span>
                        <img className = "listDiv_itemIcons" src = {checked_icon} style = {checkIcon_style}></img>
                    </div>
                );
            });

            const list_div_styles = {
                maxHeight : settings.max_height,
                overflowY : 'auto'
            }

            return(
                <div className = "list_divs" ref = {list_div_ref} style = {list_div_styles}>
                    {listItems}
                </div>
            );
        }
    }

    return(<div className = "input_select_div" ref = {div_ref}>
        <label className = "inputSelect_label" ref = {inputSelect_label_ref} htmlFor = "inputSelect_name" style = {labelStyles}>{labelStyles.text}</label>
        <div className = "input_div" ref = {input_div_ref}> 
            <input type = "text" id = "inputSelect_name" className = "inputSelect" ref = {input_ref} style = {divStyles} autoComplete = "off" readOnly placeholder = {settings.placeholder} value = {list_items[selectedItem]} onClick={onInputClick} onKeyDown = {Input_onKeyDownFocus} onBlur = {onInputBlur} required></input>
            {renderIcon()}
            {renderDropDownIcon()}
        </div>
        {renderItemsList()}
    </div>)
}


export default Input_SelectList