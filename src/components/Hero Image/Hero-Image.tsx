import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './Hero-Image.type';
 
interface StyledContainerProps {
  disabled?: boolean;
  backgroundColor?: string;
}
const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  display: inline-block;
  position: relative;
 
  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
  `}
`;
 
const StyledImage = styled.img<{ disabled?: boolean; width?: string; height?: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  ${(props) =>
    props.disabled &&
    `
    pointer-events: none;
  `}
 
  @media (max-width: 768px) {
    width: ${(props) => props.width || '75%'};
    height: auto;
  }
 
  @media (max-width: 480px) {
    width: ${(props) => props.width || '50%'};
    height: auto;
  }
`;
 
const DisabledOverlay = styled.div<{ disabled: boolean }>`
  display: ${(props) => (props.disabled ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
`;
 
const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  backgroundColor,
  visible = true,
  disabled = false,
}) => {
  if (!visible) return null;
 
  return (
    <StyledContainer backgroundColor={backgroundColor} disabled={disabled}>
      <StyledImage src={src} alt={alt} width={width} height={height} disabled={disabled} />
      <DisabledOverlay disabled={disabled} />
    </StyledContainer>
  );
};
 
export default HeroImage;