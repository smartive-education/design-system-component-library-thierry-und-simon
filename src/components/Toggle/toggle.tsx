import React, { FC, ReactNode, useState } from 'react';
import { Tab } from '@headlessui/react';

export const Toggle: FC = ({ ...props }) => {
  const [enabled, setEnabled] = useState(false);

  const styledTabs =
    'rounded-md ui-selected:bg-white hover:text-slate-600 ui-selected:text-violet-600  py-xs px-s transition-colors	';

  return (
    <div className='flex'>
      <Tab.Group
        onChange={(index) => {
          console.log('Changed selected tab to:', index);
        }}
      >
        <Tab.List className='rounded-lg bg-slate-200 p-xxs '>
          <Tab className={`${styledTabs}`}>
            <p>Deine Mumbles</p>
          </Tab>
          <Tab className={`${styledTabs}`}>
            <p>Deine Likes</p>
          </Tab>
        </Tab.List>
        {/* <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels> */}
      </Tab.Group>
    </div>
  );
};
