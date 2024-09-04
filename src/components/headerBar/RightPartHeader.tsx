import SelectTheme from "../navbar/SelectTheme";
import UserButton from "./UserButton";

const RightPartHeader = () => {
  return (
    <div className="flex gap-4 pr-4">
      <SelectTheme />
      <UserButton imageUrl="https://lh3.googleusercontent.com/a/ACg8ocIo4cqT0EBLj7q7hixwniEtetz3U0plVR9sdwV6PbqLIKioOQg=s360-c-no" />
    </div>
  );
};

export default RightPartHeader;
