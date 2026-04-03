import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { Route } from './+types/root';
import './shared/styles/app.css';
import Header from '~/base/header';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { useTranslations } from '~/i18n/useTranslations';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <title>QuantumView</title>
                <Meta />
                <Links />
            </head>
            <body>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <main className="bg-white">{children}</main>
                        <Footer />
                    </PersistGate>
                </Provider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    const { error: errorTexts } = useTranslations();

    return (
        <main>
            <div className="error-container">
                <h1>{errorTexts.title}</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    {errorTexts.description}
                </p>
                <div>
                    <a href="/">{errorTexts.home}</a>
                    <a href="mailto:johanna.henrich@h-da.de">
                        {errorTexts.support} <span aria-label="Right arrow">&rarr;</span>
                    </a>
                </div>
            </div>
        </main>
    );
}

function Footer() {
    const { footer } = useTranslations();

    return (
        <footer>
            <span>
                ©&nbsp;{new Date().getFullYear()}&nbsp;{footer.details}&nbsp;·&nbsp;
            </span>
            <span>
                <a href="/imprint" target="_blank">
                    {footer.imprint}
                </a>
                &nbsp;·&nbsp;
                <a href="/data-privacy-policy" target="_blank">
                    {footer.dataPrivacyPolicy}
                </a>
            </span>
        </footer>
    );
}
