import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            linkName: '',
            url: ''
    }

    handleChange = event => {
        if(event.target.id === "link")
        this.setState({ linkname: event.target.value});
        else
        this.setState({ url: event.target.value}); 
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        let newFavLink = {linkname: this.state.linkName, url: this.state.url};
        this.setState({ linkName: '', url: ''}); 
        this.props.addNew(newFabLink);

    }

    render() 

        return(
            <form>
                <label for="link">Link Name : </label>
               <input type="text" id="link" onChange={(event) =>this.handleChange(event)}/>      
               <label for="url">URL : </label>
               <input type="text" id="url" onChange={(e) =>this.handleChange(event)}/>
               <button type="submit" onClick={() => this.onFormSubmit()}>Submit</button>
            </form>
        )
    
    }
}


export default Form;
