import React from 'react';
import ItemRequest from './ItemRequest'
import RequestedItems from './RequestedItems';

class RequestCreationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            requestCreator: {},

            clientId: '',
            itemsInRequest: [],

            requestStatus: "NEW"
        };

        this.handleItemAdded = this.handleItemAdded.bind(this);
    }

    handleChange = evt => {
        const { id, value } = evt.target;
        this.setState({
            [id]: value
        });
    };

    handleItemAdded(item) {
        // TODO: validate item before adding
        this.setState({ 
            itemsInRequest: this.state.itemsInRequest.concat([item])
        });
    };

    render() {
        return (
            <div className="container card-panel">
                <h5>New Request</h5>

                <p>Client Id</p>
                <input
                    type="text"
                    id="clientId"
                    value={this.state.clientId}
                    onChange={this.handleChange}
                />

                <ItemRequest onItemAdded={this.handleItemAdded}/>

                <RequestedItems items={this.state.itemsInRequest}/>

                <div className="card-action">
                    <a className="btn">Submit Request</a>
                </div>
            </div>
        );
    }

}

export default RequestCreationPage;