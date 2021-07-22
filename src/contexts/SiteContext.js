import { createContext, useState } from 'react';

export const SiteContext = createContext(null);

export default function SiteContextProvider({ children }) {
  const [siteName, setSiteName] = useState([]);
  const [siteDescription, setSiteDescription] = useState(false);
  const [siteAddress, setSiteAddress] = useState('');
  const [sitePostcode, setSitePostcode] = useState('');
  const [siteCity, setSiteCity] = useState('');
  const [siteCountry, setSiteCountry] = useState('');
  const [siteCategory, setSiteCategory] = useState('');
  return (
    <SiteContext.Provider
      value={{
        siteName,
        setSiteName,
        siteDescription,
        setSiteDescription,
        siteAddress,
        setSiteAddress,
        sitePostcode,
        setSitePostcode,
        siteCity,
        setSiteCity,
        siteCountry,
        setSiteCountry,
        siteCategory,
        setSiteCategory,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
