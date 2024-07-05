export default function FirstDay() {
  return (
    <>
      {/* gradient 실습 */}
      <div className="rounded-full w-6 h-6 bg-gradient-to-tr from-[#096cde] to-[#00d1ff]"></div>
      {/* gradient 실습 응용 (bg-clip-text) */}
      <div className="w-max h-40 px-3 bg-gradient-to-r flex justify-center items-center from-[#e9f9f4] via-45% via-[#cfebfe] to-[#f2eefe]">
        <div className="w-max h-max p-1 bg-gradient-to-r from-[#15c064] to-[#00d1ff] bg-clip-text">
          <span className="text-9xl leading-relaxed font-semibold text-transparent tracking-tighter">
            Shopify
          </span>
        </div>
      </div>

      {/* 과제 1번 */}
      <div className="group relative flex items-center underline">
        <span className="transition-all delay-200 group-hover:font-bold">
          1번 과제
        </span>
        <svg
          className="absolute -right-12 size-6 origin-left scale-x-0 opacity-0 transition-all delay-200 will-change-transform group-hover:scale-100 group-hover:opacity-100 motion-reduce:group-hover:scale-0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* 과제 2번 */}
      <div className="overflow-hidden border-b-2 border-gray-500">
        <div className="group relative flex w-60 items-center p-2 transition-all delay-150 ease-in-out hover:translate-x-10 motion-reduce:hover:font-bold motion-reduce:hover:transform-none">
          <svg
            className="absolute -left-10 size-6"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="text-lg">2번 과제</span>
          <svg
            className="absolute right-0 size-6"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
