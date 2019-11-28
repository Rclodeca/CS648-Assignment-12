import React, { Component } from 'react';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.props.onFilter(value);
    }

    render(){

        return(
            <div>
                <form className="form-group">
                    <input 
                        onChange={this.handleChange} 
                        name="filterText" 
                        className="form-control" 
                        id="search"
                        aria-describedby="search" 
                        placeholder="Search..."/>
                </form>
            </div>
        );
    }
     
}

export default Filters;