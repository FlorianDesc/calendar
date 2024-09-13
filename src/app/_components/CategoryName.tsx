import { firstLetterUppercase } from "@/lib/utils";

type CategoryNameProps = {
  name: string;
};

const CategoryName = ({ name }: CategoryNameProps) => {
  name = firstLetterUppercase(name);

  return <p className="text-xl font-extrabold text-primary/80">{name}</p>;
};

export default CategoryName;
