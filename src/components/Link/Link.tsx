import React from 'react';
import styled from 'styled-components';
import { LinkProps } from './Link.type';

// Styled component for the link
const StyledLink = styled.a<{
  color?: string;
  bold?: boolean;
  italic?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
}>`
  color: ${(props) => props.color || '#007bff'};
  text-decoration: none;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  &:hover {
    text-decoration: underline;
  }
`;

const Link: React.FC<LinkProps> = ({
  href,
  label,
  color,
  bold,
  italic,
  visible = true,
  disabled = false,
  backgroundColor
}) => {
  if (!visible) return null;

  return (
    <StyledLink
      href={href}
      color={color}
      bold={bold}
      italic={italic}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {label}
    </StyledLink>
  );
};

export default Link;
