import './GlobalStyles.scss';
import { JSX } from 'react';

interface GlobalStylesProps {
    children: JSX.Element;
}

function GlobalStyles({ children }: GlobalStylesProps) {
    return children;
}

export default GlobalStyles;
