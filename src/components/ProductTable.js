import React, { Component } from 'react';
import ProductRow from './ProductRow.js';

class ProductTable extends Component {
    constructor(props) {
        super(props);

        this.handleDestroy = this.handleDestroy.bind(this)
    }
   
    mapDataToArray(data){
        return Object.keys(data).map(key => data.key);
    }

    handleDestroy(id) {
        this.props.onDestroy(id)
    }

    getRows(){
        const { products, filterText } = this.props;
        const hasFilter = filterText !== "";
        const dataArray = Object.keys(products).map(key => products[key]);
        const rows = []; 
        dataArray.forEach(item => {
            const name = item.name.toLowerCase();
            const filter = filterText.toLowerCase()
            if(!hasFilter || name.includes(filter)){
                rows.push(<ProductRow product={item} key={item.id} onDestroy={this.handleDestroy} />);
            }   
        });
        return rows;
    }

    render(){ 
        const rows = this.getRows();

        return(
            <div width={500}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
     
}

export default ProductTable;