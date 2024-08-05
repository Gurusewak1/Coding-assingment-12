import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from './Link';

describe('Link Component', () => {
  it('should render a link with the provided label and href', () => {
    render(<Link href="https://example.com" label="Example" />);
    
    const linkElement = screen.getByText('Example');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  it('should apply styles based on props', () => {
    render(
      <Link
        href="https://example.com"
        label="Styled Link"
        color="red"
        bold
        italic
        backgroundColor="yellow"
      />
    );

    const linkElement = screen.getByText('Styled Link');
    expect(linkElement).toHaveStyle('color: red');
    expect(linkElement).toHaveStyle('font-weight: bold');
    expect(linkElement).toHaveStyle('font-style: italic');
    expect(linkElement).toHaveStyle('background-color: yellow');
  });

  it('should not render if visible is false', () => {
    const { container } = render(
      <Link href="https://example.com" label="Hidden Link" visible={false} />
    );

    expect(container.firstChild).toBeNull();
  });

  it('should have correct disabled styles', () => {
    render(
      <Link
        href="https://example.com"
        label="Disabled Link"
        disabled
      />
    );

    const linkElement = screen.getByText('Disabled Link');
    expect(linkElement).toHaveStyle('opacity: 0.5');
    expect(linkElement).toHaveStyle('pointer-events: none');
  });
});
