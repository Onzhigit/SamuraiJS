import React, {useState} from 'react'


type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    onPageChanged?: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize,
                                      currentPage = 1,
                                      onPageChanged = x => x,
                                      portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <>
            <nav aria-label="...">
             <ul className="pagination">
              <li >
               { portionNumber > 1 &&  <a className="page-link" aria-disabled="true" onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</a>}
              </li>
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <a className="page-link"
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</a>})}
          { portionCount > portionNumber &&
            <a className="page-link" aria-disabled="true" onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</a> }
            </ul>
          </nav>
         </>
}

export default Paginator
