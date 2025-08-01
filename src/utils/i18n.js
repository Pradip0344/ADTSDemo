import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

I18n.fallbacks = true;
I18n.translations = {
  en: { home: 'Home', profile: 'Profile' },
  ar: { home: 'الرئيسية', profile: 'الملف الشخصي' },
};

const fallback = { languageTag: 'en' };
const { languageTag } = RNLocalize.findBestAvailableLanguage(['en', 'ar']) || fallback;
I18n.locale = languageTag;

export default I18n;