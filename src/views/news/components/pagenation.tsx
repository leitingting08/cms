interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: Function
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="text-gray-500 hover:text-black disabled:opacity-50"
      >
        &laquo;&laquo;
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-gray-500 hover:text-black disabled:opacity-50"
      >
        &laquo;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-2 py-1 rounded ${
            page === currentPage ? 'bg-black text-white' : 'text-gray-500 hover:text-black'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-gray-500 hover:text-black disabled:opacity-50"
      >
        &raquo;
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="text-gray-500 hover:text-black disabled:opacity-50"
      >
        &raquo;&raquo;
      </button>
    </div>
  )
}

export default Pagination
