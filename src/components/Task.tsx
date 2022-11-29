import React, { FC } from 'react';

export type TaskProps = {
  task: any;
  onArchiveTask: any;
  onPinTask: any;
};

export const Task: FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => (
  <div className={`p-5 flex justify-between bg-slate-500  ${state}`}>
    <div className='flex items-center grow'>
      <label
        htmlFor='checked'
        aria-label={`archiveTask-${id}`}
        className='checkbox flex mr-3'
      >
        <input
          type='checkbox'
          disabled={true}
          name='checked'
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
          className='hidden '
        />
        <span
          className='checkbox-custom block w-6 h-6  invert bg-[url("https://www.freeiconspng.com/uploads/black-check-tick-icon-4.png")] bg-contain'
          onClick={() => onArchiveTask(id)}
        />
      </label>

      <label
        htmlFor='title'
        className='title flex grow mr-3'
        aria-label={title}
      >
        <input
          type='text'
          value={title}
          readOnly={true}
          name='title'
          placeholder='Input title'
          className='p-1 rounded-full grow'
        />
      </label>
    </div>

    <button
      className={`bg-transparent `}
      onClick={() => onPinTask(id)}
      id={`pinTask-${id}`}
      aria-label={`pinTask-${id}`}
      key={`pinTask-${id}`}
    >
      <span
        className={`icon-star block bg-contain  bg-transparent rounded-full w-8 h-8 ${
          state == 'TASK_ARCHIVED'
            ? 'bg-[url("https://www.freeiconspng.com/uploads/star-images-png-3-9k-star-26-feb-2010-21.png")]'
            : 'bg-transparent'
        }`}
      />
    </button>
  </div>
);
