import React from 'react';
import Select from './Select';
import ItemOptionsUtility from './ItemOptionsUtility';

class ItemRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            itemType: ''
        };

        this.itemOptionsUtility = new ItemOptionsUtility();
        this.handleInput = this.handleInput.bind(this);
    }

    getCategories() {
        return this.itemOptionsUtility.getCategories()
    }

    getItemsInCategory() {
        return this.itemOptionsUtility.getItemsInCategory(this.state.category);
    }

    handleInput(event) {
        this.setState(
            { [event.target.name] : event.target.value }
        );
    }

    render() {
        return (
            <form className="container">
                {/*
                   0 select: category
                   1 select: item type
                   2 optional select: style
                   3 optional select: gender
                   4 optional select: size 
                   5 input: count
                   6 select: urgency
                   7 input: notes
                */}

                <Select title={'Category'}
                    name={'category'}
                    options={this.getCategories()}
                    value={this.state.category}
                    placeholder={'Select Category'}
                    handleChange={this.handleInput}
                />

                <Select title={'Type of Item'}
                    name={'itemType'}
                    options={this.getItemsInCategory()}
                    value={this.state.itemType}
                    placeholder={'Select Category'}
                    handleChange={this.handleInput}
                />


            </form>
        );
    }

}

export default ItemRequest;