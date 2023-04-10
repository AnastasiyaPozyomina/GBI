import {Button} from 'react-bootstrap';
import {ITEM_PER_PAGE} from '../utils/constants';

const Pagination = ({
  currentPage,
  totalItems,
  onPageChange,
  isPreviousData,
}) => {
  const pageCount = Math.ceil (totalItems / ITEM_PER_PAGE);

  const handlePrevClick = () => onPageChange (currentPage - 1);
  const handleNextClick = () => onPageChange (currentPage + 1);

  return (
    <div className="btn-group">
      <Button
        disabled={currentPage === 1 || isPreviousData}
        onClick={handlePrevClick}
        className="btn"
      >
        «{' '}
      </Button>
      <div className="numberbtn"> Страница {currentPage}</div>
      <Button
        disabled={currentPage === pageCount || isPreviousData}
        onClick={handleNextClick}
        className="btn"
      >
        »
      </Button>

    </div>
  );
};

export default Pagination;
