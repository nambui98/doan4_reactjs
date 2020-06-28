import Enlang from './entries/en-US';
import Itlang from './entries/it_IT';
import { addLocaleData } from 'react-intl';

const AppLocale = {
  en: Enlang,
  it: Itlang,
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.it.data);

export default AppLocale;
