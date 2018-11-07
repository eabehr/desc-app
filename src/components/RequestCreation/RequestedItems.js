import React from 'react';

class RequestedItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getRequestedItems() {
        if (this.props.items.length > 0) {
            return <p>TODO: Add item info here</p>
        } else {
            return <p>Your cart is empty</p>
        }
    }

    render() {
        return (
            <div className="container card-panel">
                <h6>Items to request:</h6>
                
                {this.getRequestedItems()}
            </div>
        );
    }
}

export default RequestedItems;