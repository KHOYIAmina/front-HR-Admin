import React, { useRef, useState } from 'react';
import { EnvelopeIcon, XCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import InputField from '../../components/inputField';
import Button from '../../components/button';
import Dialog from '../../components/dialog'; // Import the Dialog component
import { AUTHIMAGES, RouterPathEnum } from '../../constants/constants';
import { loginSubmit } from '../../interfaces/api';
import { validateEmail, validateField } from '../../constants/validation';
import { classNameDialogBody, classNameDialogDIcon, classNameDialogIcon, classNameDialogTitle } from '../../assets/css/constantsCss';

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string>('');
  const [errorUndefined, setErrorUndefined] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleEmailChange = () => {
    if (emailRef.current) {
      validateEmail({ emailRef, setError });
    }
  };

  const passwordString = 'Password'
  const handlePasswordChange = () => {
    if (passwordRef.current) {
      validateField({ passwordRef, setError, passwordString});
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    validateEmail({ emailRef, setError });
  
    if (error === '') {
      const result = await loginSubmit(event, emailRef, passwordRef, setError, setErrorUndefined);
  
      if (result?.success) {
        window.location.href = RouterPathEnum.Dashboard;
      } else {
        setIsDialogOpen(true);
      }
    }
  };
  
  return (
    <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center lg:justify-start lg:pl-12 lg:pt-2 bg-background">
      <img
        src={AUTHIMAGES.PATTERN}
        className="absolute top-0 right-0 w-screen h-screen object-cover hidden lg:block"
        alt="Background Pattern"
      />
      <div className="p-8 w-full max-w-md">
        <div className="text-left">
          <h4 className="mb-4 text-3xl font-bold text-navy-700 dark:text-white">
            Sign In
          </h4>
          <p className="text-lg font-normal text-gray-600">
            Enter your email and password to Sign In.
          </p>
        </div>
        <form className="mt-4 mb-2" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative">
              <InputField
                type="email"
                label="Email"
                isInvalid={!!error}
                errorMessage={error}
                placeholder="you@email.com"
                labelPlacement="outside"
                isRequired={true}
                variant="bordered"
                endContent={
                  <EnvelopeIcon 
                    className={`text-2xl text-default-400 pointer-events-none flex-shrink-0 w-7 h-7 ${error ? 'text-red-500' : 'text-default-400'}`} 
                  />
                }
                onChange={handleEmailChange}
                ref={emailRef}
              />
            </div>
            <div className="relative">
              <InputField
                type={isVisible ? 'text' : 'password'}
                label="Password"
                placeholder="*********"
                labelClassName="text-lg font-medium"
                labelPlacement="outside"
                isRequired={true}
                variant="bordered"
                ref={passwordRef}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                  >
                    {isVisible ? (
                      <EyeIcon className="w-6 h-6 text-gray-500" />
                    ) : (
                      <EyeSlashIcon className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                }
                onChange={handlePasswordChange}
              />
            </div>
            <Button   
              label="Sign In" 
              color="primary"
              type="submit" 
              disabled={!emailRef.current?.value || !passwordRef.current?.value}
            />
          </div>
        </form>
        {isDialogOpen && (
          <Dialog 
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          titleDialog='Error'
          bodyDialog={errorUndefined}
          width='w-80'
          backdrop='opaque'
          classNameIcon={classNameDialogDIcon.error}
          icon={<XCircleIcon className={classNameDialogIcon.error} />} // Pass the icon
          modalPlacement='center'
          classNameTitle={classNameDialogTitle.error}
          classNameBody={classNameDialogBody.error}
          hideCloseButton={true}
          />
        )}
      </div>
    </section>
  );
};

export default SignIn;
