export const SearchInput = ({
  greenFocus,
  blueFocus,
  filtersContent,
  setFiltersContent,
}) => {
  const handleOnSubmit = (e) => {
    setFiltersContent({
      keywords: e.target.value,
      category: filtersContent?.category,
      format: filtersContent?.format,
      theme: filtersContent?.theme,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`searchContainer ${
        greenFocus ? 'greenFocus' : blueFocus ? 'blueFocus' : ''
      }`}
    >
      <form onSubmit={handleSubmit}>
        <input
          className="searchContainerInput"
          type="text"
          onChange={(e) => handleOnSubmit(e)}
          value={filtersContent?.keywords}
        />
        <div className="searchContainerIcon">
          <i className="icon-explora icon-search" />
        </div>
      </form>
    </div>
  );
};
