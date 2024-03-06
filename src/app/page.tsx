"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(n => n + 1);
  }

  const decrease = () => {
    setCount(n => n - 1);
  }

  // const Name = "Harn";

  return (
    <div className='border-4 border-red-700 flex flex-full justify-center items-center h-screen'>
      <div className='border-4 border-green-600 h-fit'>

        <h1 className='text-yellow-600'>Home</h1>
        <p>{count}</p>
        <button onClick={increase}>Increase</button>
        <br/>
        {/* <Link href="/about">aboutpagenaja</Link><br></br> */}
        <button onClick={decrease}>Decrease</button>
      </div>

    </div>
  );
}
