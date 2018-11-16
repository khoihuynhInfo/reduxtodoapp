import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {

    render() {
        return (
            <div className="row">
                {/* search */}
                <div className="col-sm-6 col-lg-6">
                    <Search/>
                </div>
                {/* Sort */}
                <div className="col-sm-6 col-lg-4">
                    <Sort/>
                </div>
            </div>
        );
    }
}

export default Control;
