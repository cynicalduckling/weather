import Button from "./Button";

const SearchBar = ({ setLocation, handleSearch, location }) => {
  return (
    <div className="rounded-full flex justify-center items-center mx-8 mb-8">
      <form onSubmit={(e) => handleSearch(e)} className="flex gap-4">
        <input
          className="input-text grow"
          type="text"
          id="location"
          name="location"
          placeholder="Enter a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button className="grow" color="white" label="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
