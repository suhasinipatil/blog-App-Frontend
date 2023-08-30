import ArticleItem from "./ArticleItem";

const ArticleList = () => {
    const articles = [
        {
            id: 1,
            title: 'Article 1',
            subtitle: 'Article 1 subtitle',
            author: 'Author 1',
            content: 'Article 1 content 1\nArticle 1 content 2',
            comments: [ 'Comment 1', 'Comment 2' ],
        },
        {
            id: 2,
            title: 'Article 2',
            subtitle: 'Article 2 subtitle',
            author: 'Author 2',
            content: 'Article 2 content 1\nArticle 2 content 2',
            comments: [ 'Comment 1', 'Comment 2' ],
        },
        {
            id: 3,
            title: 'Article 3',
            subtitle: 'Article 3 subtitle',
            author: 'Author 3',
            content: 'Article 3 content 1\nArticle 3 content 2',
            comments: [ 'Comment 1', 'Comment 2' ],
        }
    ];

    return (
        <ul>
            {articles.map((article) => (
                <ArticleItem key={article.id} props={article} />
            ))}
        </ul>
    );
}
export default ArticleList;