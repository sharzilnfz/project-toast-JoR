import { createContext, useMemo, useState } from 'react';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export const variantContext = createContext();

const VariantProvider = ({ children }) => {
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);

  const value = useMemo(() => {
    return { variant, setVariant, VARIANT_OPTIONS };
  }, [variant]);

  return (
    <variantContext.Provider value={value}>{children}</variantContext.Provider>
  );
};

export default VariantProvider;
