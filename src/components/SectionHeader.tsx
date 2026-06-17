import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="mb-10">
    <h2 className="section-heading">{title}</h2>
    {subtitle && <p className="mt-2 max-w-2xl text-lg text-gray-400">{subtitle}</p>}
    <div className="section-divider" />
  </div>
);

export default SectionHeader;
