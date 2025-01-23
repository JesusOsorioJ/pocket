import { useTranslation } from 'react-i18next';
import '../config/i18n'; 

function Language() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.language;

  return (
    <div>
      <button
        onClick={() => changeLanguage('es')}
        className={`p-[6px] rounded-l-lg ${currentLanguage === 'es' ? 'bg-black text-white' : 'bg-white text-black'}`}
      >
        Español
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`p-[6px] rounded-r-lg ${currentLanguage === 'en' ? 'bg-black text-white' : 'bg-white text-black'}`}
      >
        English
      </button>
    </div>
  );
}

export default Language;
