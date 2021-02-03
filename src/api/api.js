import { API_KEY } from "../config/config";

var data;
/*** getsimilararticle makes a GET request to the article extractor using fetch function. ***/
const getsimilararticle = async (urlInput) => {
    const response = await fetch(
        `https://document-parser-api.lateral.io/?url=${urlInput}/&subscription-key=${API_KEY}`
    );
    /**urlInput is the variable for the url which is entered in the text input box. */
    /**API_KEY is the variable for the subscription key which is in config file**/
    const json = await response.json();
    /***We use the json() method to extract the JSON body content from the response***/
    data = json.body;
    /**Storing the json body content in variable 'data' **/
    /**requestOptions variable to hold the method, headers and the returned data passed as a body to the POST API call*/
    /**Now, returning a new fetch() call to https://news-api.lateral.io/documents/similar-to-text endpoint, 
     using the text data passed to the body*/
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'subscription-key': 'f53dd4aea5bfc8ecd850fcbe1b08921e' },
        body: JSON.stringify({
            text: `${data}`
        })
    };
    return fetch('https://news-api.lateral.io/documents/similar-to-text', requestOptions)
        .then(response => response.json())
        .then((responseData) => {
            console.log(responseData);
            return responseData;
        })
        .catch(error => console.log('Request failed', error));
}

export default getsimilararticle;


