import React from 'react';  
import styled from 'styled-components';  

// Define the HeadingProps interface  
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {  
  level?: 1 | 2 | 3 | 4 | 5 | 6;  
  color?: string;  
  bold?: boolean;  
  italic?: boolean;  
  backgroundColor?: string;  
  disabled?: boolean;  
  align?: 'left' | 'center' | 'right';  
}  

// Styled component creation  
const StyledHeading = styled.h1<HeadingProps>`  
  font-size: ${(props) => {  
    switch (props.level) {  
      case 1: return '2em';  
      case 2: return '1.75em';  
      case 3: return '1.5em';  
      case 4: return '1.25em';  
      case 5: return '1em';  
      case 6: return '0.75em';  
      default: return '2em';  
    }  
  }};  
  color: ${(props) => props.color || 'black'};  
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};  
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};  
  background-color: ${(props) => props.backgroundColor || 'transparent'};  
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};  
  text-align: ${(props) => props.align || 'left'};  
  margin: 0.5em 0;  
`;  

// Functional component for Heading  
const Heading: React.FC<HeadingProps> = ({  
  level = 1,  
  children, // focus on children  
  color,  
  bold,  
  italic,  
  backgroundColor,  
  disabled = false,  
  align = 'left',  
  ...props 
}) => {  
  const Tag = `h${level}` as `h${1 | 2 | 3 | 4 | 5 | 6}`; // Set the HTML tag  

  return (  
    <StyledHeading  
      as={Tag} // Properly set the HTML element  
      level={level}  
      color={color}  
      bold={bold}  
      italic={italic}  
      backgroundColor={backgroundColor}  
      disabled={disabled}  
      align={align}  
      {...props} // Spread other props to StyledHeading  
    >  
      {children} {/* Render children */}  
    </StyledHeading>  
  );  
};  

export default Heading;