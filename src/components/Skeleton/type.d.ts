interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  maxTranslateRange: number;
  maxRotateRange: number;
  maxScaleRange: number;
  transitionTime: number;
  autoAnimate: boolean;
  disableHover: boolean;
}
