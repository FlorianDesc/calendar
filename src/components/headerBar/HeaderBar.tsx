import RightPartHeader from "./RightPartHeader";
import SearchBar from "./SearchBar";

const HeaderBar = () => {
  return (
    <div className="flex justify-between p-2">
      <SearchBar />
      <RightPartHeader />
    </div>
  );
};

export default HeaderBar;
