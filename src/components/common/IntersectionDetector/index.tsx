import useIntersectionObserver from './hooks/useIntersectionObserver';

interface IntersectionDetectorProps {
  onIntersected: () => void;
  isOff?: boolean;
}

export const IntersectionDetector = ({ onIntersected, isOff }: IntersectionDetectorProps) => {
  const setTarget = useIntersectionObserver(onIntersected);

  if (isOff) {
    return null;
  }

  return <div ref={setTarget} />;
};
