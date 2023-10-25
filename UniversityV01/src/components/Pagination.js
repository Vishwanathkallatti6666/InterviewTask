import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div key={number} className="page-items">
            <a
              className="page-number"
              onClick={() => paginate(number)}
              href="!#"
            >
              {number}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
