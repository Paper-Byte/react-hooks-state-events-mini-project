import React from 'react';

function CategoryFilter({
  categories,
  handleCategoryFilter,
  selectedCategory,
}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button
            className={
              selectedCategory === category ? 'selected' : null
            }
            onClick={() => handleCategoryFilter(category)}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
