import UserLayout from '@/components/layouts/UserLayout/UserLayout';
import Account from '@/views/account/Account';
import Billing from '@/views/billing/Billing';
import NewSubscription from '@/views/billing/NewSubscription';
import Emails from '@/views/bulk/singleBulk/Emails';
import Exports from '@/views/bulk/singleBulk/Exports';
import NewExports from '@/views/bulk/singleBulk/NewExports';
import Overview from '@/views/bulk/singleBulk/Overview';
import Settings from '@/views/bulk/singleBulk/Settings';
import SingleBulk from '@/views/bulk/singleBulk/SingleBulk';
import Credits from '@/views/checkout/Credits';
import ReviewOrder from '@/views/checkout/ReviewOrder';
import Integrations from '@/views/integrations/Integrations';
import NewIntegration from '@/views/integrations/NewIntegration';
import UserProfilePage from '@/views/profile/Profile';
import Referrals from '@/views/referrals/Referrals';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Bulk from '../views/bulk/Bulk';
import SignInPage from '../views/common/sign-in/SignInPage';
import SignUpPage from '../views/common/sign-up/SignUpPage';
import EmailVerifier from '../views/single/EmailVerifier';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Bulk />,
      },
      {
        path: '/bulk',
        element: <Bulk />,
      },
      {
        path: '/bulk/:id',
        element: <SingleBulk />,
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: '/bulk/:id/emails',
            element: <Emails />,
          },
          {
            path: '/bulk/:id/exports',
            element: <Exports />,
          },
          {
            path: '/bulk/:id/settings',
            element: <Settings />,
          },
        ],
      },
      {
        path: '/bulk/:id/exports/new',
        element: <NewExports />,
      },
      {
        path: '/verifier',
        element: <EmailVerifier />,
      },
      {
        path: '/checkout/credits',
        element: <Credits />,
      },
      {
        path: '/checkout/summary',
        element: <ReviewOrder />,
      },
      {
        path: '/user',
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <UserProfilePage />,
          },
          {
            path: '/user/account',
            element: <Account />,
          },
          {
            path: '/user/providers',
            element: <Integrations />,
          },
          {
            path: '/user/providers/integrations',
            element: <NewIntegration />,
          },
          {
            path: '/user/account/billing',
            element: <Billing />,
          },
          {
            path: '/user/subscriptions/new',
            element: <NewSubscription />,
          },
          {
            path: '/user/referrals',
            element: <Referrals />,
          },
        ],
      },
    ],
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]);

export default routes;
