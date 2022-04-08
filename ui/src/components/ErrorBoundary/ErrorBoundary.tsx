import React from 'react';
import { t } from 'ttag';
import { AwesomeIcon, BodyText, H1, HrefButton, Icon } from '@fnox/fabstracta';
import { frontendLog } from '@fnox/fabstracta-platform';
import styles from './ErrorBoundary.module.scss';
import GenericError from './generic-error.svg';

const GenericErrorView: React.FC = () => (
	<div className={styles.container}>
		<div className={styles.content}>
			<H1>{t`Ursäkta, här blev det lite fel.`}</H1>
			<br />
			<BodyText size="large">
				Vi vet om felet och felsöker vad som kan ha gått snett. Prova gärna att uppdatera sidan igen om några minuter.Om
				det fortfarande inte fungerar kan du kika på vår driftinformation nedan
			</BodyText>
			<HrefButton
				href="https://status.fortnox.se"
				target="_blank"
				icon={<AwesomeIcon name="external-link" size="xs" />}
			>
				STATUS.FORTNOX.SE &nbsp;&nbsp;
			</HrefButton>
			<BodyText size="small" className={styles.support}>
				<Icon name="issues" /> &nbsp; Inga driftstörningar just nu? Vi hjälper dig gärna på &nbsp;
				<a href="https://support.fortnox.se" target="_blank" rel="noreferrer noopener">
					support.fortnox.se
				</a>
			</BodyText>
		</div>
		<img src={GenericError} alt="Something went wrong!" />
	</div>
);

interface State {
	hasError: boolean;
}
/**
 * Error boundaries work like a JavaScript catch {} block, but for components.
 * Only class components can be error boundaries.
 * In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.
 *
 * https://reactjs.org/docs/error-boundaries.html
 */
export class ErrorBoundary extends React.Component<unknown, State> {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch({ message }, { componentStack }) {
		// Log the error message and component stack
		// You can choose to add additional log data about your app in the data object
		frontendLog({ message, data: { stack: componentStack, userAgent: navigator.userAgent } })();
	}

	render() {
		if (this.state.hasError) {
			return <GenericErrorView />;
		}

		return this.props.children;
	}
}
