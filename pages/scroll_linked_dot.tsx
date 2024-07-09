import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ExpandedDot = () => {
  const { scrollYProgress } = useScroll();

  // const scrollY = motionValue(scrollYProgress)
  // const springValue = useSpring(0, )
  // const dotSize = useTransform(() => {
  //   return scrollYProgress.get() * 2;
  // });

  const dotStyles = {
    clipPath: useTransform(() => `circle(${scrollYProgress.get() * 100}%)`),
    // translateY: "-50%",
  };

  const y = useSpring(100, { bounce: 0 });
  useTransform(() => {
    if (scrollYProgress.get() > 0.7) y.set(0);
    else y.set(100);
  });
  const yPercent = useTransform(y, (value) => `${value}%`);

  const textStyles = {
    y: yPercent,
  };

  return (
    <>
      <div className="w-full h-full">
        <motion.div
          style={dotStyles}
          className="fixed top-0 left-0 w-full h-full aspect-square bg-purple-700 origin-center"
        >
          <h2 className="block p-10 text-6xl gap-1">
            <span className="block overflow-hidden">
              <motion.span style={textStyles} className="block">
                Hi!
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span style={textStyles} className="block">
                You found me!
              </motion.span>
            </span>
          </h2>
        </motion.div>
      </div>
    </>
  );
};

export default function Scroll_linked_dot() {
  return (
    <>
      <div className="w-screen overflow-y-scroll">
        <ExpandedDot />
        {["bg-gray-400", "bg-black", "bg-orange-200", "bg-purple-400"].map(
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
