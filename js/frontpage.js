/* Principle component hightest hierachy*/

import React from 'react';
import ResultTable from './result-table';
import SavedArticleTable from './saved-article-table';
import Search from './search';

var axios = require('axios');

class FrontPage extends React.Component {

    constructor(props) {
        super(props);
        //setup initial state value
        this.state = {
            'searchTopic':'',
            'startYear':'',
            'endYear':'',
            'results':[],
            'articles':[]

        }
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    //support function///

    handleChangeInput(event) {

        let newState = {}
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    postArticle(removeItem) {
        return axios.post('/api/article', {
            title: removeItem[0].title, url:removeItem[0].url, date: removeItem[0].date, article_id: removeItem[0].article_id});
    }

    //delete specific article in DB
    deleteArticle(deletedItem) {
        console.log(`ID of item to delete ${deletedItem}`);
        return axios.delete('/api/article', {
            params: {
                'id':deletedItem
            }
        });
    }

    //get list of articles in MongoDB
    queryArticle() {
        
        return axios.get('/api/articles');
    }

    /* Right after component mounted, run this function to query list of saved articles in MongoDB
        and update state */
    componentDidMount() {
        console.log("component mount");
        let articles = [];
        this.queryArticle().then(function(response) {
            const data = response.data;
            data.forEach((article)=> {
                articles.push(article);
            });
            this.setState({articles:articles});
        }.bind(this));
        
    }

    handleSaveClick(event) {
        event.preventDefault();
        const index = event.target.id;
        let results = this.state.results;
        let articles = [];

        const removeItem = results.splice(index,1);
        console.log(removeItem);
        //insert to db
        
        this.postArticle(removeItem).then(this.queryArticle).then(function(response) {
            
            const data = response.data;
            data.forEach((article)=> {
                articles.push(article);
            });

            this.setState({results:results, articles:articles});
        }.bind(this));
     
    }

    //user click 'Remove' button to remove a saved article in DB
    handleRemoveClick(event) {
        event.preventDefault();
        let articles = [];
        const id = event.target.id;

        this.deleteArticle(id).then(this.queryArticle).then(function(response) {
            
            const data = response.data;
            data.forEach((article)=> {
                articles.push(article);
            });

            this.setState({ articles:articles});
        }.bind(this));
    }


    handleSearchClick() {
        const searchTopic = this.state.searchTopic;
        const startYear = this.state.startYear;
        const endYear = this.state.endYear;
        let row = [];
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': "30043fc35dfa4f0089e6234400603470",
                'q': searchTopic,
                'begin_date': startYear,
                'end_date': endYear,
                'sort': "newest",
                'page': 0
                }
            }).then(function(response) {
                console.log(response);
                const docs = response.data.response.docs;
                let i = 0;
                docs.forEach( (doc,idx) =>  {
                    let article = {
                        'title': doc.headline.print_headline,
                        'url': doc.web_url,
                        'date': doc.pub_date,
                        'article_id': doc._id
                    }
                    if (article.title.length > 0 && article.article_id.length>0 && i< 5) {
                        row.push(article);
                        i++; //limit to 5 articles
                    }
                });

                this.setState({'results': row});
        }.bind(this));

    }

    render() {

        console.log("front page render");

        return (
            <div>
                <h1>New York Times Article Scrubber </h1>
                <p>Search for and annotate article of interest!</p>
                <Search searchTopic={this.state.searchTopic} startYear={this.state.startYear} 
                    endYear={this.state.endYear} onInputChange={this.handleChangeInput} 
                    handleSearchClick={this.handleSearchClick}/>
                <ResultTable results={this.state.results} onHandleSaveClick={this.handleSaveClick}/>
                <SavedArticleTable articles={this.state.articles} onRemoveClick={this.handleRemoveClick}/>
                </div>
        )
    }
}

export default FrontPage;