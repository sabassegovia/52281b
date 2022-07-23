import PropTypes from "prop-types";
export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {

  const lastPage = Math.ceil(totalCount / pageSize);
  if (lastPage - currentPage === 3) {
    return [currentPage, currentPage+1, currentPage+2, currentPage + 3];
  }
  if (lastPage - currentPage === 2) {
    return [currentPage - 1, currentPage, currentPage+1, currentPage+2];
  }
  if (lastPage - currentPage === 1) {
    return [currentPage - 2, currentPage - 1, currentPage, currentPage+1];
  }
  if (lastPage - currentPage === 0) {
    return [currentPage - 3, currentPage - 2, currentPage - 1, currentPage];
  }
  return [currentPage, currentPage+1, currentPage+2, DOTS, lastPage];
}

usePagination.propTypes = {
  currentPage: PropTypes.number,
  totalCount: PropTypes.number,
  pageSize: PropTypes.number,
};

export default usePagination;
