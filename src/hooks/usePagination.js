import PropTypes from "prop-types";
export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {

  const lastPage = Math.ceil(totalCount / pageSize);

  if (totalCount <= pageSize) {
    return [1]
  }
  if (currentPage === 1) {
    return [1, currentPage+1, currentPage+2, DOTS, lastPage];
  }
  if (currentPage === 2) {
    return [1, currentPage, currentPage+1, DOTS, lastPage];
  }
  if (lastPage - currentPage === 3 || lastPage - currentPage === 2) {
    return [1, DOTS, currentPage - 1, currentPage, currentPage + 1,DOTS, lastPage];
  }
  if (lastPage - currentPage === 1) {
    return [1, DOTS, currentPage - 1, currentPage , lastPage];
  }
  if (lastPage - currentPage === 0) {
    return [1, DOTS, currentPage - 2, currentPage - 1, lastPage];
  }
  return [1, DOTS, currentPage - 1, currentPage, currentPage + 1, DOTS, lastPage];

}

usePagination.propTypes = {
  currentPage: PropTypes.number,
  totalCount: PropTypes.number,
  pageSize: PropTypes.number,
};

export default usePagination;
