import {
  Button,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";

export default function SecondClone() {
  return (
    <>
      <div className="w-screen h-screen bg-[#f9f9f9]">
        <nav className="w-100% h-[104px] p-[32px] flex items-center justify-between text-black [&_button]:transition-all [&_button]:delay-75">
          <div className="flex gap-16 justify-between">
            <div className="flex jusify-between gap-4 z-10">
              <svg
                viewBox="0 0 40 40"
                aria-hidden="true"
                width="40"
                height="40"
                className="fill-cyan-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                ></path>
              </svg>

              <button className="font-semibold">Pocket</button>
            </div>
            <div className="hidden lg:flex justify-between gap-10 font-light">
              <Button className="px-3 py-2 rounded-lg hover:bg-gray-200">
                Feature
              </Button>
              <Button className="px-3 py-2 rounded-lg hover:bg-gray-200">
                Reviews
              </Button>
              <Button className="px-3 py-2 rounded-lg hover:bg-gray-200">
                Pricing
              </Button>
              <Button className="px-3 py-2 rounded-lg hover:bg-gray-200">
                FAQs
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex gap-6">
            <Button className="px-3 py-2 font-light rounded-lg border-1 border-gray-300 hover:border-black ">
              Log in
            </Button>
            <Button className="px-3 py-2 rounded-lg bg-black text-white ">
              Download
            </Button>
          </div>
          <Popover className="lg:hidden">
            <PopoverButton className="relative z-10">
              <span className="text-3xl">=</span>
            </PopoverButton>
            <PopoverPanel className="fixed top-0 left-0 w-screen overflow-auto pt-[128px] pb-5 px-4 border-1 rounded-2xl bg-white shadow-2xl origin-top transition-all duration-500 ease-in-out opacity-0 data-[open]:opacity-100">
              {/* <div className="w-screen h-screen fixed top-0 left-0 blur-lg lg:hidden"></div> */}
              <div className="flex flex-col items-start gap-2 font-light mb-5">
                <Button className="px-3 py-2 rounded-lg hover:bg-gray-200">
                  Featureq
                </Button>
                <Button className="px-3 py-2 rounded-lg hover:bg-gray-200">
                  Reviews
                </Button>
                <Button className="px-3 py-2 rounded-lg hover:bg-gray-200">
                  Pricing
                </Button>
                <Button className="px-3 py-2 rounded-lg hover:bg-gray-200">
                  FAQs
                </Button>
              </div>
              <div className="flex flex-col w-100% gap-2">
                <Button className="px-3 py-2 font-light rounded-lg border-1 border-gray-300 hover:border-black ">
                  Log in
                </Button>
                <Button className="px-3 py-2 rounded-lg bg-black text-white ">
                  Download the app
                </Button>
              </div>
            </PopoverPanel>
          </Popover>
        </nav>
        <main className="flex flex-col text-black">
          <section className="p-[32px]">
            <div>
              <h1 className="text-4xl mb-6">Invest at the perfect time.</h1>
              <p className="text-lg text-gray-500 w-[600px]">
                By leveraging insights from our network of industry insiders,
                you’ll know exactly when to buy to maximize profit, and exactly
                when to sell to avoid painful losses.
              </p>
            </div>
            <div>
              <div className="w-[450px] h-[600px] bg-gradient-to-tr from-[#15c064] to-[#00d1ff] rounded-3xl">
                image area
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
