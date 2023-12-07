import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <SignIn></SignIn>
    </div>
  );
};

export default SignInPage;
