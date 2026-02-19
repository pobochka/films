import React from "react";

interface QuickNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  loading: boolean;
}

export const QuickNavigation: React.FC<QuickNavigationProps> = ({ currentPage, totalPages, onPageChange, loading }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = parseInt(e.target.value, 10);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="quick-navigation">
      <label htmlFor="page-input">Go to page</label>
      <input className="page-input" type="number" id="page-input" min="1" max={totalPages} onChange={handleInputChange} disabled={loading} />
      <span className="page-total">/{totalPages}</span>
    </div>
  );
};

//Нельзя успеть ввести не однозначное число, надо будет исправить
