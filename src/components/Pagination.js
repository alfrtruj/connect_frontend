import { Link } from 'react-router-dom';

const Pagination = ({ aipPerPage, totalAips, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalAips / aipPerPage); i++) {
        pageNumbers.push(i);
    }

    return ( 
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link to={number} onClick={() => paginate(number)} className="page-link">
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Pagination;