import Button from "./Button";
import ThemeSwitcher from "./ThemeSwitcher";
import { MdWarningAmber } from "react-icons/md";

const SearchBar = ({ setLocation, handleSearch, location, valid, loading }) => {
  return (
    <>
      <div
        className={`${
          loading && "loading-search"
        } rounded-full gap-4 flex justify-center items-center min-w-[200px] self-stretch`}
      >
        <ThemeSwitcher />
        <form
          onSubmit={(e) => handleSearch(e)}
          className="flex grow gap-4 max-w-[430px]"
        >
          <input
            className="input-text flex-1 shrink w-0 dark:border-white border-black bg-transparent placeholder-black dark:placeholder-white text-black dark:text-white"
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
      {!valid && (
        <div className="text-sm flex items-center">
          <MdWarningAmber className="mr-2" /> please enter a valid location
        </div>
      )}
    </>
  );
};

export default SearchBar;
