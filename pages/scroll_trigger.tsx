import { useInView } from "react-intersection-observer";

const TriggerPage = ({ text }: { text: string }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: "-45% 0px -45% 0px",
  });

  let style = inView ? "opacity-1" : "opacity-0";
  return (
    <div
      className={`h-screen flex justify-center items-center text-6xl transition-all delay-150 ${style}`}
      ref={ref}
    >
      {text}
    </div>
  );
};

export default function Scroll_trigger() {
  const texts = ["Don't", "you", "just", "hate", "popups?"];

  return (
    <div>
      {texts.map((text, idx) => (
        <TriggerPage key={idx} text={text} />
      ))}
    </div>
  );
}
