/* Search Form */
import React from 'react';

class Search extends React.Component {

    render() {
        //Validate user input
        const validYear = new RegExp(/^\d{8}$/);
        
        const buttonDisabled = this.props.searchTopic.length == 0 || !validYear.test(this.props.startYear) || !validYear.test(this.props.endYear);

        return (
            <div>
                <h3>Search</h3>
                <div className="form-group">
                <label>Topic</label>
                <input type="text" value={this.props.searchTopic} id='searchTopic' className="form-control"
                    onChange={(event)=> this.props.onInputChange(event)}></input>
                </div>
                <div className="form-group">
                <label>Start Year</label>
                <input type="text" value={this.props.startYear} id='startYear' placeholder="Format YYYYMMDD"
                    onChange={(event)=> this.props.onInputChange(event)} className="form-control"></input>
                    </div>
                <div className="form-group">
                <label>End Year</label>
                <input type="text" value={this.props.endYear} id='endYear' placeholder="Format YYYYMMDD"
                    onChange={(event)=> this.props.onInputChange(event)} className="form-control"></input>
                    </div>
                <button type="button" className="btn btn-primary" onClick={this.props.handleSearchClick} disabled={buttonDisabled}>Search</button>
            </div>
        )
    }
}

export default Search;