import { useEffect } from 'react';

export function LoadReCaptcha() {
  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const tags = document.querySelectorAll('.grecaptcha-badge');
      tags?.forEach((tag) => tag.parentNode.remove());
    };
  }, []);

  return <div />;
}
export async function GetReCaptchaToken() {
  const promise = new Promise((resolve) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: 'submit' })
        .then((token) => {
          resolve(token);
        });
    });
  });
  return promise;
}
