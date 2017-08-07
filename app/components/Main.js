import React from 'react';

import NavBar from './NavBar.js';
import Search from './Search.js';
import Result from './Result.js';
import Saved from './Saved.js';

export default class Main extends React.Component{

    constructor() {
        super();
        this.state = {
            term: "",
            startDate:"",
            endDate:"",
            results:[],
            itemSaved:[]
        }
    };

    updateResults() {

    }

    updateItemSaved() {
        
    }

    render() {



        return(
            <div>
                <NavBar />
                <Search />
                <Result />
                <Saved />

            </div>

        );
    }

}