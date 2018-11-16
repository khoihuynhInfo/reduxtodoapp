import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../redux/actions/index';

class Sort extends Component {
    
    stylesort = {
        borderRight: '5px solid black'
    }

    onSort = (kindSort = 0) => {
        this.props.onSort(kindSort);
    }

    render() {
        const { sort } = this.props;
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle"
                    type="button" data-toggle="dropdown">Sort &nbsp;
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" style={{ cursor: 'pointer', padding: '10px' }}>
                    <li onClick={() => this.onSort(0)}
                        style={(sort === 0) ? this.stylesort : undefined}>
                        <span className="glyphicon glyphicon-sort-by-alphabet">
                        </span> A - Z
                    </li>
                    <li onClick={() => this.onSort(1)}
                        style={(sort === 1) ? this.stylesort : undefined}>
                        <span className="glyphicon glyphicon-sort-by-alphabet-alt">
                        </span> Z - A
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
