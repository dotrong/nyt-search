// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");
var apiKey = '30043fc35dfa4f0089e6234400603470';

export default helper = {

    runQuery(inputParams) {
        var term = inputParams.term;
        var beginDate = inputParams.beginDate;
        var endDate = inputParams.endDate;

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+apiKey+
        "&begin_date="+beginDate+"&end_date="+endDate;
        return axios.get(queryURL).then(function(response) {
            // If get get a result, return that result's formatted address property
            if (response.data.results[0]) {
                return response.data.results[0].formatted;
            }
            // If we don't get any results, return an empty string
            return "";
        }); 
    },

    findSavedList() {

    },

    insertItem() {

    },
    deleteItem() {

    }
};