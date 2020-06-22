import React, {Component} from 'react'
import TodoList from '../../components/todoList'
import AddListItem from '../../components/addListItem'
import ListFooter from '../../components/listFooter'
import './todoBuilder.css'

class TodoBuilder extends Component{
    state = {
        todoList: [],
        filter: 'ALL',
    }

    addItemToListHandler = (item) => {       
        if (item !== ''){
            const newTask = {
                id: Math.random(),
                task: item,
                active: true
            }
            const prev = this.state.todoList
            this.setState({todoList: prev.concat(newTask)})
        }              
    }

    updateItemNameHandler = (prevName, editedName) => {
        if (editedName !== ''){
            const updatedArray = this.state.todoList.map((item) => {
                if (item.task === prevName){ 
                    item.task = editedName
                }
                return item
            })
            this.setState({todoList: updatedArray})
        }
    }

    deleteItemHandler = (id) => {
        const updatedArray = this.state.todoList.filter(item => item.id !== id)
        this.setState({todoList: updatedArray})
    }

    deleteCompletedItemsHandler = () => {
        const updatedArray = this.state.todoList.filter(item => item.active === true)
        this.setState({todoList: updatedArray})
    }

    toggleActiveHandler = (id) => {
        const updatedArray = this.state.todoList.map((item) => {
            if (item.id === id){ item.active = !item.active}
            return item
        })
        this.setState({todoList: updatedArray})
    }

    setAllToInActive = () => {
        const updatedArray = this.state.todoList.map((item) => {
            if (item.active){ item.active = !item.active}
            return item
        })
        this.setState({todoList: updatedArray})
    }

    setAllToActive = () => {
        const updatedArray = this.state.todoList.map((item) => {
            if (!item.active){ item.active = !item.active}
            return item
        })
        this.setState({todoList: updatedArray})
    }

    toggleActiveStateHandler = (event) => {
        if (event.target.checked){
            this.setAllToInActive()
        }else{
            this.setAllToActive()
        }
    }
  

    setListFilter = (filter) => {
        switch(filter){
            case 'ALL': this.setState({filter:'ALL'}); break;
            case 'ACTIVE': this.setState({filter:'ACTIVE'}); break;
            case 'COMPLETED': this.setState({filter:'COMPLETED'}); break;
            default :
            this.setState({filter:'ALL'})
            
        }
    }

    
    render (){
        let filteredList = null
        switch(this.state.filter){
            case 'ALL': filteredList = this.state.todoList; break;
            case 'ACTIVE': filteredList = this.state.todoList.filter(item => item.active === true); break;
            case 'COMPLETED': filteredList = this.state.todoList.filter(item => item.active === false); break;
            default :
            filteredList = this.state.todoList;
        }

        let isEmpty = this.state.todoList.length === 0
        
        return(
            <div className="Builder">
                <AddListItem check={this.toggleActiveStateHandler}
                    itemAdded={this.addItemToListHandler}
                    activeExists = {this.state.todoList.some(item => item.active === true)}
                />
                <ol>
                {filteredList.map(item => (
                    <TodoList key={item.id} 
                    task={item.task} 
                    clicked={() => this.deleteItemHandler(item.id)}
                    toggeleActive={() => this.toggleActiveHandler(item.id)}
                    isActive={item.active}
                    itemNameEdited={this.updateItemNameHandler}
                    />
                ))}
                </ol>
                    {isEmpty ? null : 
                        <ListFooter toggleFilter={this.setListFilter} 
                        nActive={this.state.todoList.filter(item => item.active === true).length}
                        showClearCompleted = {this.state.todoList.some(item => item.active === false)}
                        clearCompleted={this.deleteCompletedItemsHandler}                                      
                        />
                    }
                    <div className="guide">
                        <p>Double-click on Web browser to edit todo or <br/>
                        Longpress on Mobile broswer to edit todo.<br/>
                        Created by <span><a href="https://www.linkedin.com/in/jubril-aminu-191522114/">Jubril Aminu</a></span><br/>
                        Modeled after: <span><a href="http://todomvc.com/examples/react/">TODO MVC</a></span></p>
                    </div>
            </div>           
        ) 
    }   
}

export default TodoBuilder