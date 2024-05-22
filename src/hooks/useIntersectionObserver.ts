import { useEffect, useRef, useState } from "react";

function useIntersectionObserver<T>({
  threshold,
  autoDisconnect,
  rootMargin,
}: {
  threshold?: number;
  autoDisconnect?: boolean;
  rootMargin?: string;
}): [React.RefObject<T>, boolean, boolean] {
  const node = useRef<T>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 0) {
            setIsVisible(false);
          } else {
            if (entry.isIntersecting) {
              setIsVisible(true);

              if (autoDisconnect) {
                observer.current?.disconnect();
              }
            }
          }
        });
        setIsInitialized(true);
      },
      { threshold, rootMargin }
    );

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (observer.current) {
      if (Boolean(node.current)) {
        observer.current.observe(node.current as HTMLDivElement);
      } else {
        observer.current.disconnect();
        setIsVisible(false);
      }
    }
  }, [node.current]);

  return [node, isVisible, isInitialized];
}

export default useIntersectionObserver;
