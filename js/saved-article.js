import React from 'react';

class ArticleRow extends React.Component{

    render() {
        return (
            <tr>
                <td><a href={this.props.article.url}>{this.props.article.title}</a></td><td>{this.props.article.date}</td>
                <td><button id={this.props.article.article_id} onClick={this.props.onHandleRemoveClick}>Remove</button></td>
            </tr>

        )
    }
}

export default ArticleRow;