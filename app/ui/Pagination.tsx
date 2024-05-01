import Link from "next/link";

const Pagination = ({currentPage, totalPages}: {
    currentPage: number,
    totalPages: number,
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  const prevPage = `/blog/page/${currentPage-1}`;
  const nextPage = `/blog/page/${currentPage+1}`;
  if(totalPages === 1){
    return null;
  }
  const pages = [];
  for(let i = 0; i < totalPages; i++){
    pages.push(<Link href={`/blog/page/${i+1}`} className={`${i+1 === currentPage ? 'bg-blue-500 text-white' : 'hover:text-indigo-600'} px-3 py-0.5 rounded`} key={i}>{i+1}</Link>);
  }
  return (
    <div className="mt-6 w-full">
        <ul className="flex justify-center list-none gap-5 items-center">
          {
            isFirst ? null : (
              <li>
                <Link href={prevPage} className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition-colors duration-300 ease-out">
                  Prev
                </Link>
              </li>
            )
          }
          {pages}
          {
            isLast? null : (
              <li>
                <Link href={nextPage} className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition-colors duration-300 ease-out">
                  Next
                </Link>
              </li>
            )
          }
        </ul>
    </div>
  )
}

export default Pagination