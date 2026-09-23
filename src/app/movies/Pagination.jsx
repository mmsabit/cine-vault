"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ page, totalPages }) => {
  const router = useRouter();

  const goToPage = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return;
    router.push(`/movies?page=${newPage}`);
  };

  // Build page number list with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - delta && i <= page + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center mb-20">
      <div className="join">
        {/* Previous */}
        <button
          className="join-item btn text-[#f5c518] bg-black border border-[#f5c518] disabled:opacity-40"
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
        >
          «
        </button>

        {/* Page numbers */}
        {getPageNumbers().map((p, idx) =>
          p === "..." ? (
            <button
              key={`ellipsis-${idx}`}
              className="join-item btn btn-disabled text-[#f5c518] bg-black border border-[#f5c518]"
            >
              ...
            </button>
          ) : (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`join-item btn text-[#f5c518] border border-[#f5c518] ${
                p === page ? "bg-[#f5c518] text-black" : "bg-black"
              }`}
            >
              {p}
            </button>
          )
        )}

        {/* Next */}
        <button
          className="join-item btn text-[#f5c518] bg-black border border-[#f5c518] disabled:opacity-40"
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;