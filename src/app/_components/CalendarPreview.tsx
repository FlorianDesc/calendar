// components/CalendarPreview.js
const CalendarPreview = () => {
  const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="mx-auto max-w-48 rounded-lg bg-background p-1 hover:cursor-pointer hover:bg-hover-nav">
      <div className="grid grid-cols-7 gap-1 text-center text-primary/100">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-[11px]">
            {day}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1 text-center">
        {daysInMonth.map((day) => (
          <div key={day} className="py-1 text-[11px] text-primary/80">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPreview;
