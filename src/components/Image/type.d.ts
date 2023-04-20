interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  lazy?: boolean;
  fade?: boolean;
  alt?: string;
}
