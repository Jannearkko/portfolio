// src/components/Timeline.tsx
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
    <div className="relative flex flex-col items-center p-5 w-full">
      <div className="relative w-full h-1 bg-gray-300 my-5">
        {items.map((item, index) => {
          const position = ((item.year - startYear) / totalYears) * 100;
          return (
            <div
              key={index}
              className="absolute flex flex-col items-center -mt-2"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-5 h-5 bg-blue-500 rounded-full mb-2 relative" style={{ top: '-50%' }}></div>
              <div className="text-center mt-2">
                <div className="font-bold">{item.title}</div>
                <div className="text-sm">{item.year}</div>
                <div className="text-xs">{item.description}</div>
              </div>
            </div>
          );
        })}
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Timeline;





