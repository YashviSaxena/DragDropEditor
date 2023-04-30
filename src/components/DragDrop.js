
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Pic from './Pic';
import Input from './Input';

const PicList = [
  {
    id: 1,
    url: 'https://www.pngmart.com/files/Animation-PNG-Transparent.png',
  },
  {
    id: 2,
    url: 'https://pngimg.com/d/smurf_PNG17.png',
  },
  {
    id: 3,
    url: 'https://freepngimg.com/thumb/smurfs/32361-8-smurfs-image.png',
  },
];

const InputList = [
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['image', 'input'],
    drop: (item) => addElemToBoard(item.id, item.type),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const addElemToBoard = (id) => {
    const pictureList = PicList.filter((picture) => id === picture.id);
    const inputList = InputList.filter((inputt) => id === inputt.id);
    if (pictureList.length > 0) {
      setBoard((board) => [...board, pictureList[0]]);
    } else if (inputList.length > 0) {
      setBoard((board) => [...board, inputList[0]]);
    }
  };

  return (
    <div className='flex justify-between'>
      <div className='Pictures'>
        {PicList.map((pic) => {
          return <Pic url={pic.url} id={pic.id} type='image' />;
        })}
      </div>
      <div className='Board flex flex-shrink flex-row h-64 overflow-auto' ref={drop}>
        {board.map((elem) => {
          if (elem.url) {
            return <Pic url={elem.url} id={elem.id} type='image' />;
          } else {
            return <Input id={elem.id} type='input' className="w-32" />;
          }
        })}
      </div>
      <div className='Inputs'>
        {InputList.map((input) => {
          return <Input id={input.id} type='input' />;
        })}
      </div>
    </div>
  );
}

export default DragDrop;
