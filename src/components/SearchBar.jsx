import Button from "./Button";

const SearchBar = ({ setLocation, handleSearch, location }) => {
  return (
    <div className="relative rounded-full flex justify-center items-center mb-8">
      <form
        onSubmit={(e) => handleSearch(e)}
        className="flex grow gap-4 max-w-[430px]"
      >
        <input
          className="input-text flex-1 min-w-0"
          type="text"
          id="location"
          name="location"
          placeholder="Enter a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button color="white" label="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
