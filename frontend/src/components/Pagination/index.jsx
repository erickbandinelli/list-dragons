import React from 'react';

import PaginateStyle from './style';

const Pagination = ({ dragonsPerPage, currentPage, totalDragons, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalDragons / dragonsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginateStyle>
          <nav className="paginate">
              <ul className="pagination">
                  {pageNumbers.map(number => (
                      <li key={number} className={`page-item ${ currentPage === number ?  'active' : ''}`}>
                          <span onClick={() => paginate(number)} className="page-link">
                              {number}
                          </span>
                      </li>
                  ))}
              </ul>
          </nav>
        </PaginateStyle>
    )
}

export default Pagination;
