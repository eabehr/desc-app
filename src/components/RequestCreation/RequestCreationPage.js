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
        this.submitRequest = this.submitRequest.bind(this);
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

    submitRequest() {
        let oneItem = this.state.itemsInRequest[0];

        let body = {
            "clientId": this.state.clientId,
            "submittedBy": "5bc50dabf5aa6ae120b49005", // use this id until user context is implemented
            "numberOfItems": oneItem.count,
            "urgency": "survival",
            "status": "active",
            "note": oneItem.notes,
            "itemCategory": oneItem.category,
            "name": oneItem.itemType
        };
        fetch('http://localhost:3000/api/items', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        .then(function(response) {
            console.log(response);
            if (response.ok && response.status === 200) {
                return response.json();
            } else {
                return Promise.reject({ message: 'err' });
            }
        })
        .then(function(data) {
            if (data.success) {
                M.toast({html: 'Your request has been created'})
                // navigate to home
            } else {
                M.toast({html: 'Error'})
            }
            console.log(data);
        }).catch(function(err) {
            M.toast({html: 'Error'})
            console.log(err);
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
                    <a className="btn" onClick={this.submitRequest}>Submit Request</a>
                </div>
            </div>
        );
    }

}

export default RequestCreationPage;