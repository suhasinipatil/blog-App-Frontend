import React, { createContext, useState } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [newArticle, setNewArticle] = useState(null);

  const addNewArticle = (article) => {
    setNewArticle(article);
  };

  return (
    <ArticleContext.Provider value={{ newArticle, addNewArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};