import React from 'react';

class ResultRow extends React.Component{

    render() {
        return (
            <tr>
                <td>{this.props.result.title}</td><td><button id={this.props.id} onClick={this.props.onSaveClick}>Save</button></td>
                
            </tr>
        )
    }

}

export default ResultRow;