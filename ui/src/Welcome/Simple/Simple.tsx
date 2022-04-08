import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@fnox/fabstracta';
import styles from './Simple.module.scss';

export const Simple = () => {
	return (
		<div className={styles.container}>
			<p>Simple Component living at &quot;/welcome/simple&quot; </p>
			<p>Check &quot;Simple.module.scss&quot; to see how the component is styled using CSS Modules</p>
			<p>
				<Link className={styles.link} to="/">
					Go <Icon name="arrow" color="#fff" />
				</Link>
			</p>
		</div>
	);
};
