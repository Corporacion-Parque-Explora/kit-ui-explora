export const Search = ({
  greenFocus,
  blueFocus,
  filtersContent,
  setFiltersContent,
}) => {
  const handleOnSubmit = (e) => {
    setFiltersContent({
      keywords: e.target.value,
    });
  };

  return (
    <div
      className={`searchContainer ${
        greenFocus ? 'greenFocus' : blueFocus ? 'blueFocus' : ''
      }`}
    >
      <form>
        <input
          className="searchContainerInput"
          
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
