import { animated, useReducedMotion, useScroll } from "@react-spring/web";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();

  const styles = {
    transform: reducedMotion
      ? scrollYProgress.to(
          (scale) => `scaleX(${(Math.round(scale * 5) / 5) * 100}%)`
        )
      : scrollYProgress.to((scale) => `scaleX(${scale * 100}%)`),
  };

  return (
    <>
      <animated.div
        className="fixed top-0 left-0 h-6 w-screen origin-left bg-red-600"
        style={styles}
      ></animated.div>
      <animated.span className="fixed top-0 left-0 w-screen">
        {reducedMotion &&
          scrollYProgress.to((scale) => {
            return (scale * 100).toFixed(0) + "%";
          })}
      </animated.span>
    </>
  );
};

export default function Scroll_linked() {
  return (
    <>
      <ProgressBar />
      <div id="container" className="w-screen">
        {["bg-gray-400", "bg-black", "bg-slate-200", "bg-purple-400"].map(
          (bg, idx) => (
            <div
              key={idx}
              className={`h-screen flex justify-center items-center text-6xl ${bg}`}
            >
              {bg}
            </div>
          )
        )}
      </div>
    </>
  );
}
