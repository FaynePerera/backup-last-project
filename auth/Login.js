import CheckEmail from './modules/CheckEmail';
import Authenticate from './modules/Authenticate';
import ConfirmVerifyEmail from './modules/ConfirmVerifyEmail';
import VerifyEmail from './modules/VerifyEmail';
import CreatePassword from './modules/CreatePassword';
import EmailVerified from './modules/EmailVerified';
import PasswordReset from './modules/PasswordReset';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [code, setCode] = useState(null);
  const [step, setStep] = useState(null);
  const renderStep = () => {
    switch (step) {
      case 'authenticate':
        return <Authenticate {...{ setStep, email }} />;
      case 'confirm_verify_email':
        return <ConfirmVerifyEmail {...{ setStep, email }} />;
      case 'verify_email':
        return <VerifyEmail {...{ setStep, setCode, email }} />;
      case 'email_verified':
        return <EmailVerified {...{ setStep }} />;
      case 'create_password':
        return <CreatePassword {...{ setStep, code, email }} />;
      case 'password_reset':
        return <PasswordReset {...{ setStep, email }} />;
      default:
        return <CheckEmail {...{ setStep, setEmail }} />;
    }
  };

  return renderStep();
}
