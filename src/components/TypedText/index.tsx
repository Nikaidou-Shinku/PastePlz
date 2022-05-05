import { useEffect, useRef } from "react";
import Typed from "typed.js";

export interface ITypedTextProps {
  texts: string[];
}

export const TypedText = ({
  texts
}: ITypedTextProps) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed>();

  useEffect(() => {
    const options = {
      strings: texts,
      typeSpeed: 40,
      backSpeed: 10,
      backDelay: 2000,
      loop: true
    };

    if (el.current === null) {
      console.error("Unable to get the ref of `span`!");
    } else {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typeof typed.current === "undefined") {
        console.error("Unable to get the ref of `Typed`!");
      } else {
        typed.current.destroy();
      }
    };
  }, []);

  return <span ref={el} />;
};
