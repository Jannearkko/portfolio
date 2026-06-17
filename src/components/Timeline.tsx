import React from 'react';

interface TimelineItem {
  year: number;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  startYear: number;
  endYear: number;
}

const Timeline: React.FC<TimelineProps> = ({ items, startYear, endYear }) => {
  const totalYears = endYear - startYear;

  return (
    <>
      {/* Vertical timeline — mobile & tablet */}
      <div className="relative pl-8 lg:hidden">
        <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-surface-600" aria-hidden="true" />
        <ul className="space-y-8">
          {items.map((item) => (
            <li key={`${item.year}-${item.title}`} className="relative">
              <span
                className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-surface-900"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-gray-500">{item.year}</p>
              <p className="mt-1 text-sm text-gray-400">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Horizontal timeline — desktop */}
      <div className="hidden lg:block">
        <div className="relative px-6 pb-28 pt-4">
          <div className="relative h-0.5 w-full bg-surface-600" aria-hidden="true" />
          {items.map((item) => {
            const position = ((item.year - startYear) / totalYears) * 100;
            return (
              <div
                key={`${item.year}-${item.title}-horizontal`}
                className="absolute top-4 flex w-28 -translate-x-1/2 flex-col items-center"
                style={{ left: `${position}%` }}
              >
                <span
                  className="mb-4 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent bg-surface-900"
                  aria-hidden="true"
                />
                <div className="text-center">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.year}</p>
                  <p className="mt-1 text-xs leading-snug text-gray-400">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Timeline;
