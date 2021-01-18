import { useState, useRef } from 'react';
import NavBar from '../components/NavBar';
import Emojis from '../components/Emojis';

export default function Editor() {
  const [tabState, setTabState] = useState<number>(0);
  const [cursorPositionState, setCursorPositionState] = useState(0);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const EmojiNameMapper: string[] = [
    'most_useful',
    'creative',
    'science',
    'sport',
    'travel',
  ];

  const textAreaPlaceholder = `asdasdasd asdasdasd`;

  const handleChange = (event: any) => {
    setCursorPositionState(event.target.selectionStart);
  };

  const insertMyText = (text: string) => {
    if (textAreaRef.current === null) {
      return;
    }

    const textToInsert = text;
    const cursorPosition = cursorPositionState;
    const textBeforeCursorPosition = textAreaRef.current.value.substring(
      0,
      cursorPosition
    );
    const textAfterCursorPosition = textAreaRef.current.value.substring(
      cursorPosition,
      textAreaRef.current.value.length
    );
    textAreaRef.current.value =
      textBeforeCursorPosition + textToInsert + textAfterCursorPosition;
  };

  return (
    <div className="sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-between min-h-screen">
        <header className="">
          <NavBar />
        </header>
        <main className="mt-14 flex-1">
          <h1 className="p-2 text-4xl font-semibold text-center text-gray-900">
            Bio Editor
          </h1>
          <div>
            <div>
              <div className="md:block hidden mt-16">
                <nav className=" flex" aria-label="Tabs">
                  <button
                    type="button"
                    className={`mr-4 rounded-xl px-3 text-2xl font-medium text-gray-700 ${
                      tabState === 0 ? 'bg-clubhouse-orange' : 'bg-gray-400'
                    }`}
                    onClick={() => setTabState(0)}
                  >
                    Most useful
                  </button>
                  <button
                    type="button"
                    className={`mr-4 rounded-xl px-3 py-2 text-2xl font-medium text-gray-700 ${
                      tabState === 1 ? 'bg-clubhouse-orange' : 'bg-gray-400'
                    }`}
                    onClick={() => setTabState(1)}
                  >
                    Creative
                  </button>
                  <button
                    type="button"
                    className={`mr-4 rounded-xl px-3 py-2 text-2xl font-medium text-gray-700 ${
                      tabState === 2 ? 'bg-clubhouse-orange' : 'bg-gray-400'
                    }`}
                    onClick={() => setTabState(2)}
                  >
                    Science
                  </button>
                  <button
                    type="button"
                    className={`mr-4 rounded-xl px-3 py-2 text-2xl font-medium text-gray-700 ${
                      tabState === 3 ? 'bg-clubhouse-orange' : 'bg-gray-400'
                    }`}
                    onClick={() => setTabState(3)}
                  >
                    Sport
                  </button>

                  <button
                    type="button"
                    className={`rounded-xl px-3 py-2 text-2xl font-medium text-gray-700 ${
                      tabState === 4 ? 'bg-clubhouse-orange' : 'bg-gray-400'
                    }`}
                    onClick={() => setTabState(4)}
                  >
                    Travel
                  </button>
                  <a
                    href="https://emojipedia.org"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto"
                  >
                    <button
                      type="button"
                      className="rounded-xl px-3 py-2 text-2xl font-medium text-white bg-green-700"
                    >
                      Click here for more emojis
                    </button>
                  </a>
                </nav>
                <div className="mt-4">
                  <div className="flex flex-wrap w-4/5">
                    {Emojis[EmojiNameMapper[tabState]].map((element: any) => (
                      <button
                        type="button"
                        className="mr-2 text-5xl"
                        onClick={() => {
                          insertMyText(element);
                        }}
                      >
                        {element}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="">
              <textarea
                // data-row-maxlength={20}
                data-limit-row-len="true"
                // maxLength={10}
                rows={20}
                cols={27}
                wrap="hard"
                className="p-2 text-2xl outline-none"
                onChange={handleChange}
                onBlur={handleChange}
                onClick={handleChange}
                ref={textAreaRef}
                placeholder={textAreaPlaceholder}
              />
            </div>
          </div>
        </main>
        <footer className="h-8 mb-4">
          <div>Built with ❤️ by Jan Ruettinger</div>
        </footer>
      </div>
    </div>
  );
}
