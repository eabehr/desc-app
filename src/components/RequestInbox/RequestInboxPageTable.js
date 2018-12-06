import React from 'react';
import RequestRow from './RequestRow';

class RequestInboxPageTable extends React.Component {

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
                items : data.payload.items.reverse()
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
            <div className="container">


            
            <div className="card-panel">

            <ul class="tabs">
                <li class="tab col s3 teal lighten-5"><a href="#test1" class="active teal-text">Active</a></li>
                <li class="tab col s3"><a href="#test2" class="teal-text text-lighten-3">Approved</a></li>
                <li class="tab col s3"><a href="#test3" class="teal-text text-lighten-3">Wishlisted</a></li>
                <li class="tab col s3"><a href="#test4" class="teal-text text-lighten-3">Archived</a></li>
            </ul>
                
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
            </div>
        );
    }
}

export default RequestInboxPageTable;


/**
 * TODO:
 * - each row is one item
 * - selecting row expands it
 * - implement features in each expanded row:
 *      - approve/reject ui & db
 *      - notes: lower priority
 */