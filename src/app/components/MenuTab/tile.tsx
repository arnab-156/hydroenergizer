import React from 'react';
import type { NextPage } from 'next';

type MenuTileComponent = {
  title: string;
  price: string,
  description?: string,
  notes?: [
    {
      symbol: string,
      note: string,
    }
  ]
}

const Tile: NextPage<MenuTileComponent> = ({
  title, price, description
}) => {
  return (<div className={`p-4 border-b h-[170px] py-6 pr-2 pl-4 max-w-sm min-w-xs hover:box-shadow-lg hover:shadow-blue-500/50`}>
    <div className='flex justify-between text-pine'>
      <h2 className={`place-items-start`}>{title}</h2>
      <p className={`pr-6`}>{price}</p>
    </div>
    {
      description && <p className={`pt-6 pr-12 text-offBlack`}>{description}</p>
    }
  </div>);
};

export default Tile;