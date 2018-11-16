import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../redux/actions/index';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { keywork: '' }
    }

    onChange = (event) => {
        this.setState({
            keywork: event.target.value
        }, () => {
            // auto search went !!keywork  
            if (!this.state.keywork)
                this.props.onSearch(this.state.keywork);
        });
    }
    
    onSubmitSearch = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.keywork);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitSearch}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for..."
                        name="keywork"
                        value={this.state.keywork}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-primary"
                            type="submit">
                            <span className="glyphicon glyphicon-search" aria-hidden="true">
                            </span> Search!
                        </button>
                    </span>

                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (keywork) => {
            dispatch(actions.searchTask(keywork));
        }
    }
}

export default connect(null, mapDispatchToProps)(Search);
