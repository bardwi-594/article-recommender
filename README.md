# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm install`

Installs the required npm packages used for the project.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Folder Structure

Project Folder Structure

```
article-extractor/
   README.md
   node_modules
   package.json
   public/
      index.html
      favicon.ico
   src/
      api/
        api.js                                   # API call function
      assets/
        icons/                                   # Icons used for the App
          article.svg
          question.svg
          time.svg
      components/
          App/                                   # App Component
            App.css
            App.js                               # Contains Router component
            App.test.js                          # Test code for App component
          Filters/                               # Filters Component
            Filters.css                          # CSS code for Filters component
            Filters.js                           # Code for Filters component
            Filters.test.js                      # Test code for Filters component
          InputBox/                              # Input text Component
            InputBox.css                         # CSS code for Input Component
            InputBox.js                          # Code for the Input Box field
            InputBox.test.js                     # Test for InputBox Component
          SimilarArticleList/                    # Lists of Simlilar Articles
            ArticlesList.css                     # CSS code for List of Articles
            ArticlesList.js                      # Code for Listing Articles
            ArticlesList.test.js                 # Test code for Articles List
          SimilarArticles/                       # Similar Articles card
            SimilarArticles.css                  # CSS code for Similar Articles
            SimilarArticles.js                   # Code for similar Articles
            SimilarArticles.test.js              # Test code for Similar Articles
      config/
          config.js                              # It contains the API_KEY
      pages/
          Home/                                  # Main Home screen
            Home.css                             # CSS code for Home Page
            Home.js                              # Code for Home Page
            Home.test.js                         # Test code for Home screen
      utils/                                     # Contains Helper Function
          utils.js
      index.css                                  # Base CSS Code
      index.js                                   # Base react component
      reportWebVitals.js
      Routes.js                                  # Navigation for App
      setupTests.js
      .gitignore                                 # Git ignored files
```
