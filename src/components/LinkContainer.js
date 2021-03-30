import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {favLinks: [],
    }
    

    removeCharacter = index => {
        const tempArray = this.state.favLinks;
        tempArray.splice(index, 1); 
        this.setState ({ favLinks : tempArray });
    }

    handleSubmit = favLink => {
        this.setState({
            favLinks: [...this.state.favLinks, favLink] 
        });
    }

    render() 


        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table linkData= {this.state.favLinks} removeLink= {(index) => this.removeCharacter(index)} />
                <br/>

                <h3>Add New</h3>
                <Form addNew= {(favLink) => handleSubmit(favLink)} />
            </div>
        );
    }
}

export default LinkContainer;
