import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GlobalStyles from './app/components/GlobalStyles';
import { I18nextProvider } from 'react-i18next';
import i18n from '~/i18n/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles>
            <I18nextProvider i18n={i18n} defaultNS={'general'}>
                <App />
            </I18nextProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
