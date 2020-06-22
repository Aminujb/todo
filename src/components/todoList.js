import React, {Component} from 'react'
import './todoList.css'
import {FaTrash} from "react-icons/fa"
import {IconContext} from "react-icons"


class TodoList extends Component{
    

    constructor(props) {
        super(props)
        this.handleButtonPress = this.handleButtonPress.bind(this)
        this.handleButtonRelease = this.handleButtonRelease.bind(this)
        this.state = {
            showDelete : false,
            doubleClicked: false,
            editedItem: this.props.task
        }
    }

    handleButtonPress () {
        this.buttonPressTimer = setTimeout(() => this.showEditBox(), 1000);
        
    }
    
    handleButtonRelease () {
    clearTimeout(this.buttonPressTimer);
    }

    switchOnShowDeleteHandler = () => {
        this.setState({showDelete: true})
    }

    switchOffShowDeleteHandler = () => {
        this.setState({showDelete: false})
    }

    showEditBox = () =>{
        this.setState({doubleClicked: true})
    }
    
    switchCheckedHandler = (event) => {
        if (event.target.checked){
            this.props.toggeleActive()
        }else{
            this.props.toggeleActive()
        }
    }

    itemChangedHandler = (event) => {
        this.setState({editedItem: event.target.value})       
    }

    enterKeyPress = (event) => {
        if (event.key === 'Enter'){
            this.props.itemNameEdited(this.props.task, this.state.editedItem)
            this.setState({doubleClicked: false})
        }
    }


     
    render(){
        return (
            <li onMouseEnter={this.switchOnShowDeleteHandler} onMouseLeave={this.switchOffShowDeleteHandler}>
                <div className="Container clearfix">
                    <div className="Left">
                        <input type="checkbox" checked={!this.props.isActive} onChange={this.switchCheckedHandler}/>
                    </div>
                    
                    {this.state.doubleClicked ?
                        
                        <div><input className="CenterEdit"
                                type="text" 
                                value={this.state.editedItem} 
                                onChange={this.itemChangedHandler}
                                onKeyPress={this.enterKeyPress}
                            />
                        </div>
                        
                        :
                        
                        !this.props.isActive?
                        <div className="Center"
                        onDoubleClick={this.showEditBox} 
                        onTouchStart={this.handleButtonPress} 
                        onTouchEnd={this.handleButtonRelease} 
                        onMouseDown={this.handleButtonPress} 
                        onMouseUp={this.handleButtonRelease} 
                        onMouseLeave={this.handleButtonRelease}
                        >
                        <del>{this.props.task}</del></div> 
                        
                        :
                        <div className="Center"
                        onDoubleClick={this.showEditBox}
                        onTouchStart={this.handleButtonPress} 
                        onTouchEnd={this.handleButtonRelease} 
                        onMouseDown={this.handleButtonPress} 
                        onMouseUp={this.handleButtonRelease} 
                        onMouseLeave={this.handleButtonRelease}
                        >
                        {this.props.task}</div>
                        
                    }
                                    
                    {this.state.showDelete && !this.state.doubleClicked?
                        <div className="Right" onClick={this.props.clicked}>
                        <IconContext.Provider value={{ style: {fontSize: '15px', color: "rgb(222, 184, 135)"}}}>
                        <FaTrash />
                        </IconContext.Provider></div> :
                        <div className="Right" hidden onClick={this.props.clicked}><FaTrash /></div>
                    }
                </div>
                               
            </li>
        )
    }
} 
    
export default TodoList