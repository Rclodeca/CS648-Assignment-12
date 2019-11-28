import React, { Component } from 'react';
import Filters from './Filters.js';
import ProductForm from './ProductForm.js';
import ProductTable from './ProductTable.js';

const PRODUCTS = {
    '1': {id: 1, category: 'Games', price: '$59.99', name: 'FIFA'},
    '2': {id: 2, category: 'Games', price: '$49.99', name: 'Maden'},
    '3': {id: 3, category: 'Games', price: '$79.99', name: 'Call of Duty'},
    '4': {id: 4, category: 'Electronics', price: '$799', name: 'Laptop'},
    '5': {id: 5, category: 'Electronics', price: '$299', name: 'XBOX'},
    '6': {id: 6, category: 'Electronics', price: '$100', name: 'Headphones'}
}

class Product extends Component {
    constructor(){
        super();
        this.state = {
            products: PRODUCTS,
            filterText: ""
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
    }

    handleFilter(filterText) {
        this.setState({ filterText });
    }   

    handleSave(product) {
        if (!product.id) {
            product.id = new Date().getTime();
        }
        this.setState((prevState) => {
            let products = prevState.products;
            products[product.id] = product;
            return { products };
        });
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
             let products = prevState.products;
             delete products[productId];
             return { products };
        });
   }   

    render(){
        const { products, filterText } = this.state;

        return(
            <div className="m-3 text-left" style={{width: 500}}>
                <h2>Inventory Management</h2>
                <Filters onFilter={this.handleFilter}/>
                <ProductTable products={products} filterText={filterText} onDestroy={this.handleDestroy}/>
                <ProductForm onSave={this.handleSave}/>
            </div>
        );
    }
     
}

export default Product;