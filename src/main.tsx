import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { loadConfig } from './configs/config';
import './index.css';
import routes from './routes/routes';
import store from './store/storeSetup';

const config = loadConfig();

if (!config.clerkPublishableKey) {
  throw new Error('Missing Publishable Key');
}
const clerkPubKey = config.clerkPublishableKey;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ClerkProvider
          publishableKey={clerkPubKey}
          afterSignInUrl="/user"
          afterSignUpUrl="/user"
        >
          <SignedIn>
            <RouterProvider router={routes} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </ClerkProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
