import React, { Component } from 'react';

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.destroy = this.destroy.bind(this);
   }
   
    destroy() {
        this.props.onDestroy(this.props.product.id);
    }   

    render(){ 
        const { name, category, price } = this.props.product;

        return(
            <tr>
                <th scope="row">{name}</th>
                <td>{category}</td>
                <td>{price}</td>
                <td><button type="button" onClick={this.destroy} className="btn btn-info">Delete</button></td>
            </tr>
        );
    }
     
}

export default ProductRow;