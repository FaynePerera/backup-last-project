import CreateAccount from './modules/CreateAccount';
import ConfirmVerifyEmail from './modules/ConfirmVerifyEmail';
import VerifyEmail from './modules/VerifyEmail';
import CreatePassword from './modules/CreatePassword';
import EmailVerified from './modules/EmailVerified';
import { useState } from 'react';

export default function Create() {
  const [email, setEmail] = useState(null);
  const [step, setStep] = useState(null);
  const [code, setCode] = useState(null);
  const renderStep = () => {
    switch (step) {
      case 'confirm_verify_email':
        return (
          <ConfirmVerifyEmail {...{ setStep, email }} />
        );
      case 'verify_email':
        return <VerifyEmail {...{ setStep, setCode, email }} />;
      case 'email_verified':
        return <EmailVerified {...{ setStep }} />;
      case 'create_password':
        return (
          <CreatePassword {...{ setStep, code, email }} />
        );
      default:
        return (
          <CreateAccount {...{ setStep, setEmail }} />
        );
    }
  };

  return renderStep();
}
