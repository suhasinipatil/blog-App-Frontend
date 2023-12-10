const ReadArticle = ({ match }) => {
  const { id } = match.params;
  const article = articles.find(article => article.id === Number(id));
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default ReadArticle;