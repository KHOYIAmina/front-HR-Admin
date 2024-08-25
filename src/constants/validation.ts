export const validateEmail = ({ emailRef, setError }: { emailRef: React.RefObject<HTMLInputElement>, setError: React.Dispatch<React.SetStateAction<string>> }) => {
  const email = emailRef.current?.value || '';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(email)) {
    setError('Invalid email address');
  } else {
    setError('');
  }
};

export const validateField = ({ inputRef, setError, label }: { inputRef: React.RefObject<HTMLInputElement>, setError: React.Dispatch<React.SetStateAction<string>>,label:string }) => {
  const email = inputRef.current?.value || '';
  
  if (email === '') {
    setError(label+' is required');
  } else {
    setError('');
  }
};
