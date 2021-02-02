import { API_KEY } from "../config/config";

var data;
const getsimilararticle = async (urlInput) => {
    const response = await fetch(
        `https://document-parser-api.lateral.io/?url=${urlInput}/&subscription-key=${API_KEY}`
    );
    const json = await response.json();
    data = json.body;
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
        .catch(error => console.warn(error));
}

export default getsimilararticle;


