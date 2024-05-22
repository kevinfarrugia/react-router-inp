import { useMemo } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function LazyChildren({
  children,
  threshold,
  autoDisconnect,
  rootMargin,
  minIntrinsicHeight,
  minIntrinsicWidth,
}: {
  children: any;
  threshold?: number;
  autoDisconnect?: boolean;
  rootMargin?: string;
  minIntrinsicHeight?: string;
  minIntrinsicWidth?: string;
}) {
  const [element, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    autoDisconnect,
    rootMargin,
  });

  const style: React.CSSProperties = useMemo(
    () => ({
      minHeight: minIntrinsicHeight,
      minWidth: minIntrinsicWidth,
    }),
    [minIntrinsicHeight, minIntrinsicWidth]
  );

  return (
    <div ref={element} style={style}>
      {isVisible && children}
    </div>
  );
}

export default LazyChildren;
