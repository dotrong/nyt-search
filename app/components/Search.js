import React from 'react';


export default class Saved extends React.Component{

    constructor() {
        super();
    
    };

    render() {

        return(

            <div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Search Parameters</h3>
				</div>

				<div className="panel-body">

					<form role="form">

					  <div className="form-group">
					    <label>Search Term:</label>
					    <input type="text" className="form-control" id="searchTerm"/>
					  </div>

					  <div className="form-group">
					    <label>Start Year</label>
					    <input type="text" className="form-control" id="startYear"/>
					  </div>

					  <div className="form-group">
					    <label>End Year</label>
					    <input type="text" className="form-control" id="endYear"/>
					  </div>

					  <button type="submit" className="btn btn-default" id="runSearch">Search</button>

					</form>
				</div>
			</div>

        );
    }

};