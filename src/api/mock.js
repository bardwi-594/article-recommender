const range = n => [...Array(n).keys()];

const fetchArticles = () => {
    return Promise.resolve({
        response: {
            results: range(10).map(url => ({
                url: `https://axios${url}.com`,
                title: `Axios`,
                source: `Axios`
            }))
        }
    });
};

export default fetchArticles;