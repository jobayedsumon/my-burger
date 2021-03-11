import React, {Component} from 'react';
import Order from "../../components/Order/Order";
import axios from "../../axios.orders";
import withErrorHandling from '../../hoc/withErrorHadnling/withErrorHandling';
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const featchedOrdes = [];
                for (let key in response.data) {
                    featchedOrdes.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({loading: false, orders: featchedOrdes})
            })
            .catch(error => {
                this.setState({loading: false})
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    return <Order ingredients={order.ingredients} price={+order.price}/>
                })}
            </div>
        );
    }
}

export default withErrorHandling(Orders, axios);