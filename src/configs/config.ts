export const loadConfig = () => {
  return {
    isDev: import.meta.env.DEV,
    appUrl: import.meta.env.VITE_APP_URL,
    clerkPublishableKey: import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY,
  };
};
