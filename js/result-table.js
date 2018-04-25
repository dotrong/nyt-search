import React from 'react';

import ResultRow from './result-row';

class ResultTable extends React.Component{

    render() {
        const resultRow = [];
        console.log(this.props.results);
        this.props.results.data.forEach((found,idx) => {
            resultRow.push(<ResultRow result={found} key={idx} id={idx} onSaveClick={this.props.onHandleSaveClick}/>)
        });
        let body =<tr><td></td></tr>;
        if (resultRow.length > 0 ) {
            body = resultRow;
        }
        else if (this.props.results.status == false) {
            body = <tr><td>No Article Found</td></tr>;
        } 
        return(

            <table className="table table-striped">
                <thead>
                    <tr><th>Results</th></tr>
                </thead>
                {/* {resultRow.length > 0 ? <tbody>{resultRow}</tbody> : <tbody><tr><td>No Article Found</td></tr></tbody>} */}
                <tbody>{body}</tbody>
            </table>
        )
    }
}

export default ResultTable;