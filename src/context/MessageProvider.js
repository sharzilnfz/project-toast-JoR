import { createContext, useMemo, useState } from 'react';

export const messageContext = createContext();

const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState('');

  const value = useMemo(() => {
    return { message, setMessage };
  }, [message]);

  return (
    <messageContext.Provider value={value}>{children}</messageContext.Provider>
  );
};

export default MessageProvider;
