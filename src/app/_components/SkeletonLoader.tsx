const SkeletonLoader = () => {
  const numberOfSections = 3;
  const numberOfCalendars = 6;

  return (
    <div className="animate-pulse space-y-4">
      {Array.from({ length: numberOfSections }).map((_, index) => (
        <div key={index} className="space-y-4">
          <div className="mb-2 h-4 w-32 rounded bg-primary/15"></div>
          <div className="flex gap-4">
            {Array.from({ length: numberOfCalendars }).map(
              (_, calendarIndex) => (
                <div
                  key={calendarIndex}
                  className="size-52 rounded bg-primary/15"></div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
