import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState, useEffect } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPaginationData, setCurrentPaginationData] = useState(blogs.posts.slice(0, rowsPerPage));

  let firstDisplayOfPage = (currentPage - 1) * rowsPerPage;
  let lastDisplayOfPage = firstDisplayOfPage + rowsPerPage;

  const updateRowsPerPage = (e) => {
    console.log('code to prevent identical for push purposes');
    setRowsPerPage(Number(e));
  };
  const updatePage = (e) => {
    setCurrentPage(e);
    let tempPaginationData = blogs.posts.slice(firstDisplayOfPage, lastDisplayOfPage);
    setCurrentPaginationData(tempPaginationData);
  };

  useEffect(() => {
    firstDisplayOfPage = (currentPage - 1) * rowsPerPage;
    lastDisplayOfPage = firstDisplayOfPage + rowsPerPage;
    let tempPaginationData = blogs.posts.slice(firstDisplayOfPage, lastDisplayOfPage);
    setCurrentPaginationData(tempPaginationData);
  }, [rowsPerPage, currentPage]);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={rowsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
