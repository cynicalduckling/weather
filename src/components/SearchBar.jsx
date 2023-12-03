import Button from "./Button";
import ThemeSwitcher from "./ThemeSwitcher";

const SearchBar = ({ setLocation, handleSearch, location }) => {
  return (
    <div className="relative rounded-full gap-4 flex justify-center items-center mb-8">
      <ThemeSwitcher />
      <form
        onSubmit={(e) => handleSearch(e)}
        className="flex grow gap-4 max-w-[430px]"
      >
        <input
          className="input-text flex-1 min-w-0 dark:border-white border-black dark:bg-transparent bg-white placeholder-black dark:placeholder-white text-black dark:text-white"
          type="text"
          id="location"
          name="location"
          placeholder="Enter a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button label="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
