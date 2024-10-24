interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: Function
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className={`fill-[#B8B8B8] hover:fill-black ${
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => onPageChange(1)}
      >
        <path d="M23.7418 4.73631C23.9084 4.89385 23.9972 5.1144 23.9972 5.32446C23.9972 5.53451 23.9084 5.74456 23.7418 5.9126L14.124 14.9974L23.7418 24.0821C24.0861 24.4077 24.0861 24.9329 23.7418 25.2584C23.5752 25.416 23.342 25.5 23.1199 25.5C22.8977 25.5 22.6756 25.416 22.4979 25.2584L12.2582 15.5855C11.9139 15.2599 11.9139 14.7348 12.2582 14.4092L22.4979 4.73631C22.8422 4.42123 23.3975 4.42123 23.7418 4.73631Z" />
        <path d="M15.7418 4.73631C15.9084 4.89385 15.9972 5.1144 15.9972 5.32446C15.9972 5.53451 15.9084 5.74456 15.7418 5.9126L6.12402 14.9974L15.7418 24.0821C16.0861 24.4077 16.0861 24.9329 15.7418 25.2584C15.5752 25.416 15.342 25.5 15.1199 25.5C14.8977 25.5 14.6756 25.416 14.4979 25.2584L4.25821 15.5855C3.91393 15.2599 3.91393 14.7348 4.25821 14.4092L14.4979 4.73631C14.8422 4.42123 15.3975 4.42123 15.7418 4.73631Z" />
      </svg>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className={`fill-[#B8B8B8] hover:fill-black ${
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.7418 4.73631C20.9084 4.89385 20.9972 5.1144 20.9972 5.32446C20.9972 5.53451 20.9084 5.74456 20.7418 5.9126L11.124 14.9974L20.7418 24.0821C21.0861 24.4077 21.0861 24.9329 20.7418 25.2584C20.5752 25.416 20.342 25.5 20.1199 25.5C19.8977 25.5 19.6756 25.416 19.4979 25.2584L9.25821 15.5855C8.91393 15.2599 8.91393 14.7348 9.25821 14.4092L19.4979 4.73631C19.8422 4.42123 20.3975 4.42123 20.7418 4.73631Z" />
      </svg>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-2 text-lg ${
            page === currentPage ? 'border-b border-black text-black' : 'text-gray-500 hover:text-black'
          }`}
        >
          {page}
        </button>
      ))}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className={`fill-[#B8B8B8] hover:fill-black ${
          currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.25821 25.2637C9.09162 25.1062 9.00278 24.8856 9.00278 24.6755C9.00278 24.4655 9.09162 24.2554 9.25821 24.0874L18.876 15.0026L9.25821 5.91785C8.91393 5.59227 8.91393 5.06714 9.25821 4.74156C9.4248 4.58402 9.65803 4.5 9.88015 4.5C10.1023 4.5 10.3244 4.58402 10.5021 4.74156L20.7418 14.4145C21.0861 14.7401 21.0861 15.2652 20.7418 15.5908L10.5021 25.2637C10.1578 25.5788 9.6025 25.5788 9.25821 25.2637Z" />
      </svg>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className={`fill-[#B8B8B8] hover:fill-black ${
          currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => onPageChange(totalPages)}
      >
        <path d="M6.25821 25.2637C6.09162 25.1062 6.00278 24.8856 6.00278 24.6755C6.00278 24.4655 6.09162 24.2554 6.25821 24.0874L15.876 15.0026L6.25821 5.91785C5.91393 5.59227 5.91393 5.06714 6.25821 4.74156C6.4248 4.58402 6.65803 4.5 6.88015 4.5C7.10227 4.5 7.32439 4.58402 7.50208 4.74156L17.7418 14.4145C18.0861 14.7401 18.0861 15.2652 17.7418 15.5908L7.50208 25.2637C7.1578 25.5788 6.6025 25.5788 6.25821 25.2637Z" />
        <path d="M14.2582 25.2637C14.0916 25.1062 14.0028 24.8856 14.0028 24.6755C14.0028 24.4655 14.0916 24.2554 14.2582 24.0874L23.876 15.0026L14.2582 5.91785C13.9139 5.59227 13.9139 5.06714 14.2582 4.74156C14.4248 4.58402 14.658 4.5 14.8801 4.5C15.1023 4.5 15.3244 4.58402 15.5021 4.74156L25.7418 14.4145C26.0861 14.7401 26.0861 15.2652 25.7418 15.5908L15.5021 25.2637C15.1578 25.5788 14.6025 25.5788 14.2582 25.2637Z" />
      </svg>
    </div>
  )
}

export default Pagination
