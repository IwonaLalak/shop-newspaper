import React, {Component} from 'react';
import {addProduct, getProducts} from "../../_redux/products/operations";
import {connect} from "react-redux";

interface Props {
    products: any[],
    getProducts: () => void;
    addProduct: (item: any) => void;
}

class ProductsView extends Component<Props> {

    state = {};

    componentDidMount() {
        this.props.getProducts();
    }

    onClickAdd = () => {
        this.props.addProduct(
            {
                product_id: 99,
                index: 'TEST',
                producer: 'test test',
                name: 'teeeessssttttttt',
                capacity: null,
                image: 'https://zapodaj.net/images/c76502a8a768f.jpg',
                price: 99.99,
                primary_unit: 'kg',
                secondary_unit: null,
                quantity_in_secondary_unit: null,
                sold_in_unit: 'primary',
                category_id: 1,
                subcategory_id: 11,
            }
        )
    };

    render() {
        return (
            <div>
                ProductsView object
                <ul>
                    {
                        this.props.products.map((item:any) => (
                            <li>
                                {item.product_id} | {item.index} | {item.name}
                            </li>
                        ))
                    }
                </ul>

                <textarea className={'form-control'} value={JSON.stringify(this.props.products)}>
                </textarea>
                <button onClick={this.onClickAdd}>
                    add
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    products: state.products.data
});

const mapDispatchToProps = (dispatch: any) => ({
    getProducts: () => dispatch(getProducts()),
    addProduct: (item: any) => dispatch(addProduct(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);