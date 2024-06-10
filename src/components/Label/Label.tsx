import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

interface StyledLabelProps {
    disabled?: boolean;
    visible?: boolean;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
}

const StyledLabel = styled.label<StyledLabelProps>`
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    padding: 0.5em 1em;
    background-color: ${({ disabled, backgroundColor }) =>
        disabled ? backgroundColor || '#CCCCCC' : backgroundColor || '#007BFF'};
    color: ${({ disabled, color }) => (disabled ? '#888888' : color || 'white')};
    border-radius: 0.25em;
    font-family: Arial, sans-serif;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    font-size: ${({ fontSize }) => fontSize || 'inherit'};
    font-weight: ${({ fontWeight }) => fontWeight || 'normal'};

    @media (max-width: 768px) {
        font-size: ${({ fontSize }) => fontSize || '14px'};
        padding: 0.4em 0.8em;
    }

    @media (max-width: 480px) {
        font-size: ${({ fontSize }) => fontSize || '12px'};
        padding: 0.3em 0.6em;
    }
`;

const Label: React.FC<LabelProps & StyledLabelProps> = ({
    text,
    disabled,
    visible = true,
    backgroundColor,
    color,
    fontSize,
    fontWeight,
}) => {
    return (
        <StyledLabel
            disabled={disabled}
            visible={visible}
            backgroundColor={backgroundColor}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
        >
            {text}
        </StyledLabel>
    );
};

export default Label;
