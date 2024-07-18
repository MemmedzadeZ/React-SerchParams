// src/components/Home.js
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const articles = [
  { id: 1, title: " Article", description: "This is the first article" },
  { id: 2, title: "Article", description: "This is the second article" },
  { id: 3, title: " Article", description: "This is the 3 article" },
  { id: 4, title: "Article", description: "This is the  4 article" },
  // daha çox məqalə əlavə edə bilərsiniz
];

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSearchParams({ search: event.target.value });
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Articles</h1>
      <input
        type="text"
        placeholder="Search articles by title"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredArticles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
