import React from 'react';
import ArticleRow from './saved-article';

class SavedArticleTable extends React.Component{

    render() {
        console.log("saved table render");
      
        const articleRow = [];
        
        this.props.articles.forEach((article,idx) => {
            articleRow.push(<ArticleRow article={article} key={article.article_id} onHandleRemoveClick={this.props.onRemoveClick}/>)
        });
        
        return(
            <table className="table table-striped">
                <thead>
                    <tr><th>Saved Articles</th></tr>
                </thead>
                <tbody>{articleRow}</tbody>
            </table>
        )

    }
}

export default SavedArticleTable;