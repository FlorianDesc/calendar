import SkeletonLoader from "./_components/SkeletonLoader";

const Loading = () => {
  return (
    <div className="flex justify-center gap-4 sm:justify-start">
      <SkeletonLoader />
    </div>
  );
};

export default Loading;
