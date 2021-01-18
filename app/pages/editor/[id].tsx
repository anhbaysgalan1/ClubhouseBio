import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import api from '../../utils/db/api';
import NavBar from '../../components/NavBar';
import Emojis from '../../utils/Emojis';

export default function Editor() {
  const [tabState, setTabState] = useState<number>(0);
  const [cursorPositionState, setCursorPositionState] = useState(0);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [initialTextAreaData, setInitialTextAreaData] = useState<string>('');
  const router = useRouter();
  const [copyStatus, setCopyStatus] = useState(false);

  const saveChangeToDB = (event: any) => {
    const id = router.query.id as string;
    api.updateDocument(id, event.target.value);
  };

  const EmojiNameMapper: string[] = [
    'most_useful',
    'creative',
    'science',
    'sport',
    'travel',
  ];

  const textAreaPlaceholder = `Hi I am Elon and I like 🚀.`;
  const handleChange = (event: any) => {
    setCursorPositionState(event.target.selectionStart);
    saveChangeToDB(event);
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getDocument(router.query.id as string);
      if (data !== undefined) {
        setInitialTextAreaData(data.text);
      }
    };
    fetchData();
  }, [router]);

  return (
    <div className="lg:px-8 max-w-screen-xl px-6 mx-auto">
      <div className="flex flex-col justify-between min-h-screen">
        <header className="">
          <NavBar />
        </header>
        <main className="mt-14 flex-1">
          <h1 className="p-2 text-4xl font-semibold text-center text-gray-900">
            Bio Editor
          </h1>
          <div className="md:block hidden mt-4 text-2xl">
            <div>
              1. When you are happy with your bio, send the link (url) to your
              phone.
            </div>
            <div>
              2. Open the link, and copy and paste your bio to Clubhouse.
            </div>
          </div>
          <div className="sm:hidden block mt-4 text-2xl">
            <div>Almost done 🥳 now copy and paste your bio to Clubhouse!</div>
            <CopyToClipboard text={textAreaRef.current?.value}
          onCopy={() => setCopyStatus(true)}>
            <div className="text-center">
          <button type="button" className="bg-clubhouse-button1 text-white rounded-md p-4">{copyStatus ? 'Copied!' : 'Copy bio'}</button>
            </div>
        </CopyToClipboard>
          </div>

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
                        key={element.id}
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
          <div className="flex justify-center px-6 mt-8">
            <textarea
              data-limit-row-len="true"
              rows={20}
              cols={27}
              wrap="hard"
              className="md:text-2xl text-md p-2 font-sans font-light outline-none"
              onChange={handleChange}
              onBlur={handleChange}
              onClick={handleChange}
              ref={textAreaRef}
              placeholder={textAreaPlaceholder}
              defaultValue={initialTextAreaData}
            />
          </div>
        </main>
        <footer className=" h-8 mt-4 mb-4">
          <div>Built with ❤️ by Jan Ruettinger</div>
        </footer>
      </div>
    </div>
  );
}
