import { addLocaleData } from 'react-intl';
import Enlang from './entries/en_US';
import Eslang from './entries/es';

const AppLocale = {
  en: Enlang,
  es: Eslang,
};

addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);

export default AppLocale;
