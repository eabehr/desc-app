import React from 'react';
import ItemRequest from './ItemRequest'

class RequestCreationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            /**
             * user info of request creator
             * client id
             * notes
             * items:
             *  category
             *  item type
             *  gender
             *  style
             *  size
             *  count
             *  urgency
             */
            clientId: '',
            items: []
        };
    }

    handleChange = evt => {
        const { id, value } = evt.target;
        this.setState({
            [id]: value
        });
    };

    render() {
        return (
            <div className="card-panel">
                <h5>New Request</h5>

                <p>Client Id</p>
                <input
                    type="text"
                    id="clientId"
                    value={this.state.clientId}
                    onChange={this.handleChange}
                />

                <ItemRequest />

            </div>
        );
    }

}

export default RequestCreationPage;