import { useCallback, useEffect, useState } from "react";

type Element = HTMLElement | null;
const UseMeasure2 = (): [(node: Element) => void, number] => {
  const [element, setElement] = useState<Element>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  const ref = useCallback((node: Element) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;
    const resizeObserver = new ResizeObserver(() => {
      setCurrentHeight(element.offsetHeight);
    });
    resizeObserver.observe(element);
    return () => {
      resizeObserver.unobserve(element);
    };
  }, [element]);

  return [ref, currentHeight];
};
export default UseMeasure2;
