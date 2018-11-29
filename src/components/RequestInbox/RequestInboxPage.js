import React from 'react';
import RequestRow from './RequestRow';

class RequestInboxPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items : []
        };
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

    getRequestRows() {
        return (
            
                this.state.items.map(function(item, i) {
                    return <RequestRow item={item}/>
                })
        );
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