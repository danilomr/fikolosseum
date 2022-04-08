import moment from 'moment';
import { addLocale, useLocale } from 'ttag';
import { mergeAll } from '@fnox/fabstracta-funky';
import platformLocale from '@fnox/fabstracta-platform/i18n/en.po.json';
import fabstractaLocale from '@fnox/fabstracta/i18n/en.po.json';
import en from '../../../i18n/en.po.json';
import 'moment/locale/sv';

const defaultLocale = process.env.LOCALE || 'sv'; // Default source language is Swedish

export const initLocales = async (locale = defaultLocale): Promise<'en' | null> => {
	moment.locale(locale);
	/**
	 * We want to add and use a locale only if it's different from the default swedish.
	 */
	if (locale === 'en') {
		const locales = mergeAll([en, fabstractaLocale, platformLocale]);
		addLocale(locale, locales as any);
		useLocale(locale); // eslint-disable-line
		return locale;
	}

	return null;
};
