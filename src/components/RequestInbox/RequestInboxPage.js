import React from 'react';
import RequestRow from './RequestRow';

class RequestInboxPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items : []
        };
        this.handleRowClick = this.handleRowClick.bind(this);
        
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/items')
        .then(response => {
            return response.json();
        }).then(data => {
            this.setState({
                items : data.payload.items
            });
        });
    }

    getDate(createdAt) {
        var date = new Date(createdAt)
        return date.toDateString() + ", " + date.toLocaleTimeString();
    }

    getRequestRows() {
        return (
            this.state.items.map(function(item, i) {
                return (<tr key={i}>
                    <td>{ item.submittedBy.name.first + " " + item.submittedBy.name.last}</td>
                    <td>{ item.name }</td>
                    <td>{ item.numberOfItems }</td>
                    <td>{ this.getDate(item.createdAt) }</td>
                    <td>{ item.status }</td>
                </tr>);


                // return <RequestRow item={item}/>
            }, this)
        );
    }

    handleRowClick() {
        
    }

    render() {

        return (
            <div className="container card-panel">
                
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>Requester</th>
                            <th>Item</th>
                            <th>Count</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.getRequestRows() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RequestInboxPage;


/**
 * TODO:
 * - each row is one item
 * - selecting row expands it
 * - implement features in each expanded row:
 *      - approve/reject ui & db
 *      - notes: lower priority
 */