export interface HeadingProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  backgroundColor?: string;
  align?: 'left' | 'center' | 'right';
  disabled?: boolean; 

}
