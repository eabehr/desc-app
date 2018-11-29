import React from 'react';

class RequestRow extends React.Component {

    constructor(props) {
        super(props);
        this.expandRow = this.expandRow.bind(this);
    }

    expandRow() {
        
    }

    render() {
        return (
            <tr onClick={this.expandRow}>
                <td>{ this.props.item.submittedBy.name.first + " " + this.props.item.submittedBy.name.last}</td>
                <td>{ this.props.item.name }</td>
                <td>{ this.props.item.numberOfItems }</td>
                <td>{ this.props.item.createdAt }</td> {/* TODO: format into a nicer date */}
                <td>{ this.props.item.status }</td>
            </tr>
        );
    }

}

export default RequestRow;