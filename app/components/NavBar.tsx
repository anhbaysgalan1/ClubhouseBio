import Link from 'next/link';

function NavBar() {
  return (
    <nav>
      <div className="flex items-center justify-between mt-4">
        <div className="flex-1 min-w-0">
          <Link href="/">
            <a>
              <h2 className="sm:text-xl sm:truncate text-2xl font-semibold leading-7 text-gray-900">
                Clubhouse Bio Creator
              </h2>
            </a>
          </Link>
        </div>
        <div className="md:mt-0 md:ml-4 flex mt-4">
          <Link href="/examples">
            <a>
              <button
                type="button"
                className="mr-8 inline-flex items-center px-3 py-1.5 border border-transparent sm:text-md md:text-xl font-medium rounded-full shadow-sm text-white bg-clubhouse-button1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Example bios
              </button>
            </a>
          </Link>
          <a
            href="https://docs.google.com/document/d/1Gh7jm2wB2eD2PU4hqqHQ8szf9jIiNuOBu4W2poOsn8w/edit"
            target="_blank"
          >
            <button
              type="button"
              className="inline-flex items-center px-3 py-1.5 border border-transparent sm:text-md md:text-xl font-medium rounded-full shadow-sm text-white bg-clubhouse-button2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Give Feedback
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
