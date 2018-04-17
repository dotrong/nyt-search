import React from 'react';

import ResultRow from './result-row';

class ResultTable extends React.Component{

    render() {
        const resultRow = [];

        this.props.results.forEach((found,idx) => {
            resultRow.push(<ResultRow result={found} key={idx} id={idx} onSaveClick={this.props.onHandleSaveClick}/>)
        });
        return(


            <table className="table table-striped">
                <thead>
                    <tr><th>Results</th></tr>
                </thead>
                {resultRow.length > 0 ? <tbody>{resultRow}</tbody> : <tbody><tr><td>No Article Found</td></tr></tbody>}
            </table>
        )
    }
}

export default ResultTable;