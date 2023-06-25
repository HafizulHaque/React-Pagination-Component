import { useState, useEffect } from 'react';
import style from './Pagination.module.css'

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate, pageNeighbour = 3 }) => {

  let [ gotoInput, setGotoInput ] = useState(currentPage)

  useEffect(() => {
    setGotoInput(currentPage)
  }, [currentPage])

  const pages = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for(let i = currentPage-pageNeighbour; i <= currentPage+pageNeighbour; ++i){
    if(i > 0 && i <= totalPages){
      pages.push(i);
      console.log(pages);
    }
  }

  const handleGoToPage = () => {
    paginate(+gotoInput)
  }

  return (
    <div className='d-flex justify-content-end my-4'>
      <ul className="pagination m-0">
        {/* prev  */}
        <li className={`page-item ${currentPage === 1 ? `disabled ${style.disabledCursor}`:''}`}>
          <a href="#!" className="page-link"onClick={() => paginate(currentPage-1)}>&laquo;</a>
        </li>
        {
          pages.map((page, index) => (
            <li key={index} className={`page-item ${currentPage == page ? 'active' : ''}`}>
              <a 
                href="#!" 
                className="page-link"
                onClick={() => paginate(page)}>
                {page}
              </a>
            </li>
          ))
        }
        {/* next  */}
        <li className={`page-item ${currentPage === totalPages ? `disabled ${style.disabledCursor}`:''}`}>
          <a href="#!" className="page-link"onClick={() => paginate(currentPage+1)}>&raquo;</a>
        </li>
      </ul>
      <form className='ms-4 d-flex' onSubmit={handleGoToPage}>
        <div className="input-group">
          <input 
            type="number" 
            className={`form-control ${style.narrowInput}`}
            min={1}
            max={totalPages}
            step={1}
            value={gotoInput} 
            onChange={(e) => setGotoInput(e.target.value)}/>
          <span className="input-group-text d-none d-md-inline-block">{`/${totalPages}`}</span>
        </div>
        <button className='btn btn-primary ms-md-1'>Go</button>      
      </form>
    </div>
  )
}

export default Pagination
