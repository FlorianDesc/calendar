type CategoryNameProps = {
  name: string;
};

const CategoryName = ({ name }: CategoryNameProps) => {
  return <p className="text-xl font-bold">{name}</p>;
};

export default CategoryName;
