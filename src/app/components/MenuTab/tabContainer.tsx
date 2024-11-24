import React from 'react';
import type { NextPage } from 'next';
import Tile from './tile';
import TabButton from './tabButton';

interface TabContainerComponent {
    tabButtons: Array<string>;
    tabContent?: Record<string, Array<Record<string, string>>>,
    handleButtonClick: () => null;
    activeTab: string;
}

const TabContainer: NextPage<TabContainerComponent> = ({
    tabButtons,
    tabContent = {},
    handleButtonClick,
    activeTab,
}) => {
    return (
        <div className="flex flex-col">
            <div className="flex border-b ml-3">
                {
                    tabButtons.map((el, idx) => <TabButton title={el} key={idx} onClick={handleButtonClick} activeTab={activeTab} />)
                }
            </div>
            <div className="flex-grow">
                {Object.entries(tabContent).map(([key, value]) => (
                    <div key={key} className={`flex flex-col`}>
                        <h3 className={`text-leaf uppercase text-xs my-6 mx-auto`}>{key}</h3>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                value.map((item, index) => <Tile key={index} title={item.name} price={item.price} description={item?.description} />)
                            }
                        </div>
                    </div>
                ))}
            </div>
            <p>Eat Fit NOLA items meet the nutritional criteria of Ochsner Health. For more information please visit EatFitNOLA.com</p>
        </div>
    );
};

export default TabContainer;