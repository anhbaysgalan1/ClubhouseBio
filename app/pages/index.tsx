// import { useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';

import api from '../utils/db/api';

export default function Home() {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const id = await api.getId();
      if (id !== undefined) {
        router.push(`/editor/${id}`);
      }
    } catch {
      // console.log('DB Error occured');
    }
  };
  return (
    <div className="sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-between min-h-screen">
        <header className="">
          <NavBar />
        </header>
        <main className="mt-14">
          {/* <div className="font-courier p-2 text-2xl text-white bg-gray-500">
            "Hello"
          </div> */}
          <h1 className="p-2 text-4xl font-semibold text-center text-gray-900">
            Create an engaging clubhouse bio in less than 3 minutes
          </h1>
          <div className="flex">
            <div className="w-1/2">
              <h2 className="p-2 mt-8 text-3xl font-semibold text-center text-gray-900">
                How does it work?
              </h2>
              <div className="w-full">
                <div className="mt-8 ml-8 text-2xl">
                  <ul>
                    <li>1. Get inspired by example bios</li>
                    <li className="mt-4">
                      2. Use our editor to create your bio on desktop
                    </li>
                    <li className="mt-4">
                      3. Open the link with your bio on your phone
                    </li>
                    <li className="mt-4">4. Copy your bio to Clubhouse</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-1/4 mx-auto">
              <Image
                src="/images/example_1.jpeg"
                alt="Picture of the author"
                layout="responsive"
                width={100}
                height={250}
              />
            </div>
          </div>
          <div className="mt-16 text-center">
            {/* <Link href="/editor">
              <a href="/"> */}
            <button
              type="button"
              className="mr-8 inline-flex items-center px-3 py-1.5 text-xl font-medium rounded-full shadow-sm text-white bg-clubhouse-button1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleClick}
            >
              Click here to open the bio editor
            </button>
            {/* </a>
            </Link> */}
          </div>
        </main>
        <footer className="h-8 mb-4">
          <div>Built with ❤️ by Jan Ruettinger</div>
        </footer>
      </div>
    </div>
  );
}
