import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '@fnox/fabstracta';
import { hasValue } from '@fnox/fabstracta-funky';
import { useFabstracta } from '@fnox/fabstracta-platform';
import { initLocales } from './locales';

/**
 * Runtime loading translations using `ttag`.
 * Every app based on fabstracta-template comes with a script defined in package.json called `translate`
 * Once you run `npm run translate` ttag cli will extract the translations and convert the .po files to .json files
 * for swedish and english translations ( i18n/sv.po.json and i18n/en.po.json ).
 *
 * The `Localize` component will load and initialize the localization based on user settings.
 * It does that by dispatching `fetchUser()` request and then reading the `locale` from the `user` object in state (redux store).
 *
 * We need to make sure to re-render the app once the localization is initialized
 * and in order to do that we need to call the children as function as well as forceUpdate().
 *
 * @example usage
	<Localize>
		{(locale) => (<YourAppGoesHere />)}
	</Localize>
 */
export const Localize = ({ children }) => {
	const dispatch = useDispatch();
	const [, updateState] = useState<any>();
	const defaultLocale = process.env.LOCALE || 'sv';
	const user = useFabstracta(({ user }) => user);
	const { locale = defaultLocale } = user;

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	useEffect(() => {
		// Don't try to load anything if we don't have a user
		if (!hasValue(user)) {
			return;
		}
		const init = locale?.split('_')[0] || 'sv';
		initLocales(init).then((locale) => locale && updateState({}));
	}, [locale, user]);

	return children(locale);
};
