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

        };

        this.handleItemAdded = this.handleItemAdded.bind(this);
        this.handleItemRemoved = this.handleItemRemoved.bind(this);
        this.submitRequest = this.submitRequest.bind(this);
        this.submitRequestBulk = this.submitRequestBulk.bind(this);
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

    handleItemRemoved(item) {
        
    };

    submitRequestBulk() {
        var itemsToSubmit = this.state.itemsInRequest.slice();
        for (var i = 0; i < itemsToSubmit.length; i++) {
            var item = itemsToSubmit[i];
            item.clientId = this.state.clientId;
            item.submittedBy = "5bc50dabf5aa6ae120b49005";
            item.urgency = "survival";
            item.status = "active";
            item.itemCategory = item.category;
            item.name = item.itemType;
            item.note = item.note;
            item.numberOfItems = item.count;
        }

        let body = {
            "clientId": this.state.clientId,
            "submittedBy": "5bc50dabf5aa6ae120b49005", // use this id until user context is implemented
            items: itemsToSubmit
            
            // "numberOfItems": oneItem.count,
            // "urgency": "survival",
            // "status": "active",
            // "note": oneItem.notes,
            // "itemCategory": oneItem.category,
            // "name": oneItem.itemType
        };
        fetch('http://localhost:3000/api/clientrequests', {
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
                // M.toast({html: 'Error'})
            }
            console.log(data);
        }).catch(function(err) {
            // M.toast({html: 'Error'})
            console.log(err);
        });
    }

    submitRequest() {
        let oneItem = this.state.itemsInRequest[0];

        let body = {
            "clientId": this.state.clientId,
            "submittedBy": "5bc50dabf5aa6ae120b49005", // use this id until user context is implemented
            "numberOfItems": oneItem.count,
            "urgency": "survival",
            "status": "active",
            "note": oneItem.note,
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
                // M.toast({html: 'Error'})
            }
            console.log(data);
        }).catch(function(err) {
            // M.toast({html: 'Error'})
            console.log(err);
        });
    };

    render() {
        return (
            <div className="container requestCreationForm">
                <h5>New Request</h5>

                <div className="card-panel">
                <p>Client Id</p>
                <input
                    type="text"
                    id="clientId"
                    value={this.state.clientId}
                    onChange={this.handleChange}
                />
                </div>

                <ItemRequest onItemAdded={this.handleItemAdded}/>

                <RequestedItems items={this.state.itemsInRequest} onItemRemoved={this.handleItemRemoved}/>

                <div className="card-action">
                    <a className="btn" onClick={this.submitRequestBulk}>Submit Request</a>
                </div>
            </div>
        );
    }

}

export default RequestCreationPage;