const SkeletonLoader = () => {
  const numberOfSections = 2;
  const numberOfCalendars = 5;

  return (
    <div className="animate-pulse space-y-12">
      {Array.from({ length: numberOfSections }).map((_, sectionIndex) => (
        <div key={sectionIndex} className="space-y-4">
          <div className="flex justify-center sm:justify-start">
            <div className="mb-4 h-5 w-36 rounded bg-primary/20"></div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-[repeat(5,_1fr)_auto]">
            {Array.from({ length: numberOfCalendars }).map(
              (_, calendarIndex) => (
                <div
                  key={calendarIndex}
                  className="h-[224px] w-[208px] rounded-lg bg-primary/20"></div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
