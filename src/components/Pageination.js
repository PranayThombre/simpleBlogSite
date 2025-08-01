import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Pageination.css'

const Pagination = () => {
  const { page, handlePageContent, totalPages } = useContext(AppContext);

  return (
    <div className="pagination-container">
      <div className="pagination-controls">
        {page > 1 && (
          <button onClick={() => handlePageContent(page - 1)} className="pagination-btn">
            ⬅ Previous
          </button>
        )}

        {page < totalPages && (
          <button onClick={() => handlePageContent(page + 1)} className="pagination-btn">
            Next ➡
          </button>
        )}
      </div>

      <p className="pagination-info">Page {page} of {totalPages}</p>
    </div>
  );
};

export default Pagination;
