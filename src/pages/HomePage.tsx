import { Button } from '@mui/material';
import NavBar from 'components/ui/NavBar';
import { SUPPORT_LANGUAGES } from 'i18n';
import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <NavBar />
      <div>Store keeper</div>
      <h2>{t('title')}</h2>
      <div>
        {SUPPORT_LANGUAGES.map((lang) => (
          <Button
            variant="contained"
            color="primary"
            onClick={() => i18next.changeLanguage(lang.id)}
            key={lang.id}
          >
            {lang.label}
          </Button>
        ))}
      </div>
    </>
  );
}
