import React from 'react';
import type { NextPage } from 'next';

export type MenuButtonComponent = {
  title: string;
  onClick: () => null;
  activeTab: string;
}


const TabButton: NextPage<MenuButtonComponent> = ({
  title, onClick, activeTab,
}) => {
  const className = `flex items-center justify-center px-6 py-2 border-b-2 text-offBlack capitalize ${activeTab === title ? 'border-pine text-pine' : 'border-gray-200 text-gray-500'
    }`;

  return <button className={className} onClick={onClick} value={title}>{title}</button>;

};

export default TabButton;