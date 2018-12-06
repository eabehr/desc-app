import React from 'react';

class RequestedItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(item) {
        this.props.onItemRemoved();
        console.log('hi');
    }

    getNote(note) {
        if (note && note.length > 0 ) {
            return <p>&nbsp;&nbsp;&nbsp;&nbsp;Your note: { note }</p>;
        } else {
            return null;
        }
    }

    getRequestedItems() {
        if (this.props.items.length > 0) {
            let requestedItems = this.props.items.map((item, i) =>
         
                // TODO: make separate component for each row
                <div key={i}>
                    <p>{item.count} {item.itemType}(s), {item.urgency} 
                    <a className="btn-flat" onClick={this.removeItem}><i className="material-icons">cancel</i></a>
                    </p>
                    { this.getNote(item.note) }
                </div>
            );

            return requestedItems;
        } else {
            return <p>Your cart is empty</p>
        }
    }

    render() {
        return (
            <div className="card-panel">
                <h6>Items in your request:</h6>
                
                {this.getRequestedItems()}
            </div>
        );
    }
}

export default RequestedItems;


// TODO: add ability to delete item before submitting
// do a table with item on the left and notes on the right,
// or 2 lines with note indented to the right (if note)