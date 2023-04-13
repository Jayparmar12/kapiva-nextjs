import { useState } from 'react';

import KapivaCmsApi from '@/clients/KapivaCmsApi';

function useSubscribePhoneNumber(props) {
  const [phone, setPhone] = useState('');
  // const [loading, setLoading] = useState(false);
  const [offer, setOffer] = useState(null);
  const [isChecked, setIsChecked] = useState(true);
  const [message, setMessage] = useState({ type: '', messageText: '' });
  const handlePhoneNumberChange = (event) => {
    // for checking only digits exists
    const inputValue = event.target.value;
    const pattern = /^\d+$/;
    if (inputValue === '') {
      setPhone(inputValue);
      setMessage({
        type: 'warning',
        messageText: 'please enter a valid phone number',
      });
    } else if (pattern.test(inputValue) === true) {
      setPhone(inputValue);
      setMessage({ type: 'success', messageText: '' });
    } else {
      setPhone(inputValue);
      setMessage({ type: 'warning', messageText: 'Please Enter Numbers Only' });
    }
  };
  const handleIsChecked = () => {
    setIsChecked((prev) => !prev);
  };
  const handlePhoneSubmit = async (event) => {
    event.preventDefault();
    const data = {
      phone,
      first_name: props?.firstName || 'Guest',
      last_name: (props?.lastName !== null && props.lastName) || 'Guest',
      datetime: new Date().getTime(),
      source_url: window.location.href,
    };
    if (isChecked === true) {
      try {
        // setLoading(true);
        const response = await KapivaCmsApi.post('/unlock_details', data);
        if (response.data?.error === false) {
          const responseValue = response.data?.data[0]?.value;
          setMessage({
            type: 'success',
            messageText: 'Offers Successfully fetched',
          });
          setOffer(JSON.parse(responseValue));
        } else {
          setMessage({
            type: 'warning',
            messageText: 'Sorry No Offers Available',
          });
        }
      } catch (error) {
        // setMessage({
        //   type: 'warning',
        //   messageText: 'Sorry No Offers Available',
        // });
        console.log(error);
      } finally {
        // setLoading(false);
      }
    }
  };
  return {
    phone,
    setPhone,
    handlePhoneSubmit,
    handlePhoneNumberChange,
    handleIsChecked,
    isChecked,
    offer,
    // loading,
    message,
  };
}

export default useSubscribePhoneNumber;
