import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Menu from './pages/Menu';
import Stores from './pages/Stores';
import Cart from './pages/Cart';
import { IntlProvider } from "react-intl";
import { useState } from "react";
import {
  LocaleContext,
  SupportedLocale,
  defaultLocale,
  getMessages,
} from "./contexts/LocaleContext";

const queryClient = new QueryClient();
interface LocaleData {
  locale: SupportedLocale;
  messages: { [key: string]: string };
}

function App() {
  const [localeData, setLocaleData] = useState<LocaleData>({
    locale: defaultLocale,
    messages: getMessages(defaultLocale),
  });
  const changeLocale = (newLocale: SupportedLocale) => {
    console.log(`Trying to change locale to: ${newLocale}`);
    setLocaleData({ locale: newLocale, messages: getMessages(newLocale) });
  };
  return (
    <LocaleContext.Provider value={{ locale: localeData.locale, changeLocale }}>
      <IntlProvider
        defaultLocale={defaultLocale}
        locale={localeData.locale}
        messages={localeData.messages}
      >
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/stores" element={<Stores></Stores>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </IntlProvider>
    </LocaleContext.Provider>
  )
}

export default App
