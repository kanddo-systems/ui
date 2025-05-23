import React from "react";
import { Component } from "./Pagination.styles";
import { Typography } from "../Typography/Typography";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      let startPage = Math.max(
        2,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 3);

      if (endPage === totalPages - 1) {
        startPage = Math.max(2, endPage - (maxVisiblePages - 3));
      }

      if (startPage > 2) {
        pages.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <Component.Wrapper>
      <Component.Button onClick={handlePrevious} disabled={currentPage === 1}>
        <Typography variant="small">Previous</Typography>
      </Component.Button>

      <Component.PageList>
        {pageNumbers.map((page, index) => (
          <Component.PageItem
            key={`${page}-${index}`}
            isActive={page === currentPage}
            isEllipsis={page === "..."}
            onClick={() => handlePageClick(page)}
          >
            <Typography variant="small">{page}</Typography>
          </Component.PageItem>
        ))}
      </Component.PageList>

      <Component.Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <Typography variant="small">Next</Typography>
      </Component.Button>
    </Component.Wrapper>
  );
};
