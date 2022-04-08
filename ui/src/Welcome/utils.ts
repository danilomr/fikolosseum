// NOTE: The following functions are used only for demo purposes - you don't need these in your app so you can safely delete them

const getHash = () => {
	if (process.env.NODE_ENV !== 'production') {
		return '/build';
	}
	const script: HTMLScriptElement = document.querySelector('script') as HTMLScriptElement;
	const url = new URL(script.src);
	return `/${url.pathname.split('/')[1]}`;
};

export const getCities = () => `${getHash()}/cities.json`;
export const getTransactions = () => `${getHash()}/transactions.json`;
export const getInvoice = () => `${getHash()}/invoice.json`;
export const getUsers = () => `${getHash()}/users.json`;
