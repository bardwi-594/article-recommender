import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount, configure } from 'enzyme';
import ArticlesList from "./ArticlesList";
import SimilarArticles from "../SimilarArticles/SimilarArticles";

/**Test case for ArticlesList Component**/

configure({ adapter: new Adapter() });

describe('<ArticlesList />', () => {
    describe('when provided with an array of articles', () => {
        it('passes them to the Articles components', () => {
            const similararticles = [
                {
                    document_id: 0,
                    title: 'Title 1'
                },
                {
                    document_id: 1,
                    title: 'Title 2'
                }
            ];
            const articlesListInstance = shallow(
                <ArticlesList similararticles={similararticles} />
            );
            articlesListInstance.find(SimilarArticles).forEach(articleInstance => {
                const articleProps = articleInstance.props();
                const matchingArticle = similararticles.find(article => article.document_id === articleProps.document_id);
                expect(articleProps.title).toBe(matchingArticle.title);
            })
        });
    })
});



