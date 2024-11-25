import { NotebookText } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const RoomCard = ({ id, roomName, childrenCount, totalCapacity }) => {
  const childrenRatio = Math.round((childrenCount / totalCapacity) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
      <div>
        <h3 className="text-zinc-900 font-bold text-lg"><Link href={"/room"}>{roomName}</Link></h3>
        <div className="text-slate-blue font-medium text-lg">
          {childrenCount}/{totalCapacity}
        </div>
      </div>
      <a href={`/room#todos`} className="text-slate-blue hover:text-peach-300">
        <NotebookText />
      </a>
    </div>
  );
};

const RoomsPage = () => {
  const rooms = [
    { id: 1, name: 'Kindergarten', childrenCount: 20, totalCapacity: 22 },
    { id: 2, name: 'Nursery', childrenCount: 18, totalCapacity: 20 },
    { id: 3, name: 'Pre-school', childrenCount: 25, totalCapacity: 28 },
    { id: 4, name: 'Daycare', childrenCount: 22, totalCapacity: 24 },
  ];

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-6 flex flex-col justify-start px-10"><span className='text-xs text-red-600 text-center'>{"Wattle Tree's"}</span><span>Rooms</span></h1>
        <div className="grid grid-cols-1 gap-4">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              id={room.id} // Passing id to RoomCard component
              roomName={room.name}
              childrenCount={room.childrenCount}
              totalCapacity={room.totalCapacity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;