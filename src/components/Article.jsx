// src/components/Article.js
import React from "react";
import { useParams } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "First Article",
    content: "This is the full content of the first article",
  },
  {
    id: 2,
    title: "Second Article",
    content: "This is the full content of the second article",
  },
  // daha çox məqalə əlavə edə bilərsiniz
];

const Article = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
