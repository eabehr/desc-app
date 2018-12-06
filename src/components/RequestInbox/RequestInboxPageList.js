import React from 'react';

class RequestInboxPageList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items : []
        };
        // this.handleRowClick = this.handleRowClick.bind(this);
        
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
  
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible.expandable');
            var instances = M.Collapsible.init(elems, { accordion: false });
          });

        
    }

    getDate(createdAt) {
        var date = new Date(createdAt)
        return date.toDateString();
    }

    getDateAndTime(createdAt) {
        var date = new Date(createdAt)
        return date.toDateString() + ", " + date.toLocaleTimeString();
    }

    getNotes(notes) {
        if (notes && notes[0]) {
            return(
                <div>
                    <p><b>{notes[0].submittedBy.name.first} {notes[0].submittedBy.name.last}:</b> { notes[0].body}</p>
                </div>


            );
        }
    }

    getRequestRows() {
        return this.state.items.map(function(item, i) {
            return (
                <li key={i}>
                    <div className="collapsible-header">
                        <div className="row eachRow">
                        <div className="col s4">{ item.submittedBy.name.first + " " + item.submittedBy.name.last}</div>
                        <div className="col s4">{ item.name }</div>
                        <div className="col s4">{ this.getDate(item.createdAt) }</div>
                        </div>
                    </div>
                    <div className="collapsible-body">
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
                                <tr>
                                    <td>{ item.submittedBy.name.first + " " + item.submittedBy.name.last}</td>
                                    <td>{ item.name }</td>
                                    <td>{ item.numberOfItems }</td>
                                    <td>{ this.getDateAndTime(item.createdAt) }</td>
                                    <td>{ item.status }</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="actions">

                            <a class="btn-small btn-flat"><i class="material-icons left">check_box</i>Approve</a>
                            <a class="btn-small btn-flat"><i class="material-icons left">clear</i>Reject</a>
                            <a class="btn-small btn-flat"><i class="material-icons left">access_time</i>Waitlist</a>

                            {/* <span className="col s2"><i className="tiny green-text material-icons">check_box</i>Approve</span> */}

                            {/* <span className="col s2"><i className="s2 tiny red-text material-icons">clear</i>Reject</span> */}

                            {/* <span className="col s2"><i className="s2 tiny yellow-text material-icons">access_time</i>Waitlist</span> */}

                        </div>
                        
                        <div>

                            { this.getNotes(item.notes) }

                            <input placeholder="Add a note" id="" type="text"/>

                        </div>

                    </div>
                </li>
            )
        }, this);
    }

    render() {

        return (
            <div className="container">
            <div className="card-panel">
                <ul className="tabs">
                    <li className="tab col s3 teal lighten-5"><a href="#test1" className="active teal-text">Active</a></li>
                    <li className="tab col s3"><a href="#test2" className="teal-text text-lighten-3">Approved</a></li>
                    <li className="tab col s3"><a href="#test3" className="teal-text text-lighten-3">Wishlisted</a></li>
                    <li className="tab col s3"><a href="#test4" className="teal-text text-lighten-3">Archived</a></li>
                </ul>

                
                <ul className="collapsible expandable">
               
                { this.getRequestRows() }
               
               </ul>
            </div>
            </div>
        );
    }
}

export default RequestInboxPageList;