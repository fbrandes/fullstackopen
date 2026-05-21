const SearchFilter = ({ text, search, setSearch }) => {
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            {text}
            <input value={search} onChange={handleSearchChange}/>
    </div>
);
};

export default SearchFilter;