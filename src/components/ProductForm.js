import React, { Component } from 'react';

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
        };
       
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
     
    handleSave(e) {
        this.props.onSave(this.state.product);
        this.setState({
             product: Object.assign({}, RESET_VALUES), errors: {}
        });
        e.preventDefault(); //Prevent form from triggering HTTP POST
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
   
        this.setState((prevState) => {
            prevState.product[name] = value;
            return { product: prevState.product };
        })
    } 
   
    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" onChange={this.handleChange} value={this.state.product.name}  className="form-control" id="name" aria-describedby="name" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input name="category" onChange={this.handleChange} value={this.state.product.category} className="form-control" id="category" placeholder="Enter Category"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input name="price" onChange={this.handleChange} value={this.state.product.price} className="form-control" id="price" placeholder="Enter Price"/>
                </div>  
                <button onClick={this.handleSave} type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
     
}

export default ProductForm;