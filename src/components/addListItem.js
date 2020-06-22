import React, {Component} from 'react';


class AddListItem extends Component {
    state ={
        item: '',
        showCheckBox: false
    }

    itemChangedHandler = (event) => {
        this.setState({item: event.target.value})
        
    }

    enterKeyPress = (event) => {
        if (event.key === 'Enter'){
            this.props.itemAdded(this.state.item)
            this.setState({item: ''})
            this.setState({showCheckBox: true})
        }
    }

    render (){
        return (
            <div>
                <div className="header">todos</div>
                {this.state.showCheckBox ? 
                <input type="checkbox" checked={!this.props.activeExists} onChange={this.props.check}/>
                : null}  
                <input id="headInput" type="text" placeholder="What needs to be done?" 
                    onChange={this.itemChangedHandler} 
                    value={this.state.item}
                    onKeyPress={this.enterKeyPress}
                    />
            </div>
        )
    }
}

export default AddListItem;