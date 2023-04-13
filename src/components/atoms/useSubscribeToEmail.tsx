import { useState } from 'react';

import { validateEmail } from '@/utils/helperFunctions';

import StorefrontAPI from '../../clients/BigCommerceAPI';

function useSubscribeToEmail() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({ type: '', messageText: '' });
  const handleEmailChange = (e) => {
    if (validateEmail(e.target.value)) {
      setEmail(e.target.value);
      setInfo({
        type: 'failed',
        messageText: '',
      });
    } else {
      setEmail(e.target.value);
      setInfo({
        type: 'failed',
        messageText: 'Please enter a valid email ID',
      });
    }
  };
  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email,
      acceptsMarketingNewsletter: true,
      acceptsAbandonedCartEmails: true,
    };
    try {
      setLoading(true);
      const response = await StorefrontAPI.post('/subscriptions', data);
      if (response.status === 200) {
        setInfo({
          type: 'success',
          messageText: 'Your Email is successfully subscribed',
        });
      }
    } catch (error) {
      setInfo({
        type: 'failed',
        messageText: 'Your Email could not be subscribed',
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { email, handleEmailChange, handleEmailSubmit, loading, info };
}

export default useSubscribeToEmail;
