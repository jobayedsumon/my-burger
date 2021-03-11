import React, {Component} from 'react';
import Auxiliary from '../Auxiliary'
import Modal from '../../components/UI/Modal/Modal';

const WithErrorHandling = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
           this.resInterceptor =  axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
           this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
        }

        componentWillUnmount() {
            axios.interceptors.response.eject(this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
        }

        errorConfirmHandler = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <Auxiliary>
                    <Modal show={this.state.error}
                           modalClosed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            )
        }
    }
};

export default WithErrorHandling;