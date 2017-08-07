import React from 'react';


export default class Saved extends React.Component{

    constructor() {
        super();
    
    }

    render() {

        return(

      <div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Saved</h3>
				</div>

				<div className="panel-body">
         
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>John</td>
                <td><button>Remove</button></td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

        );
    }

};