import React, {useState} from 'react'
import './listFooter.css'

const ListFooter = props => {

    const [isAllActive, setAllActive] = useState(false);
    const [isActActive, setActActive] = useState(false);
    const [isCompActive, setCompActive] = useState(false);

    const updateActive = (filter) => {
        
        switch (filter){
            case 'ALL': props.toggleFilter('ALL'); 
                setAllActive(true); 
                setActActive(false);
                setCompActive(false); 
                break;
            case 'ACTIVE': props.toggleFilter('ACTIVE');
                setActActive(true);
                setAllActive(false); 
                setCompActive(false); 
                break;
            case 'COMPLETED': props.toggleFilter('COMPLETED'); 
                setCompActive(true); 
                setAllActive(false); 
                setActActive(false);
                break;
            default:
                props.toggleFilter('ALL');
        }       
    }

    
    return ( 
        <div className="fcontainer">
            <span className="fleft">{props.nActive} items left</span>
            <button className={isAllActive? "button active" : "button"} onClick={() => updateActive('ALL')}>All</button> 
            <button className={isActActive? "button active" : "button"} onClick={() => updateActive('ACTIVE')}>Active</button>
            <button className={isCompActive? "button active" : "button"} onClick={() => updateActive('COMPLETED')}>Completed</button>
            <div>
            {props.showClearCompleted ? 
            <button className="fright clearbutton" onClick={() => props.clearCompleted()}>Clear Completed</button> : null}
            </div>
        </div>
    )
}

export default ListFooter