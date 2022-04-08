import React from 'react';
import { Card, H4 } from '@fnox/fabstracta';

export const PlaygroundInfo: React.FC = () => (
	<Card>
		<H4>Playground</H4>
		<br />

		<p>
			This page is a simple playground composed with various
			<a href="https://fabstracta.fnox.se/" target="_blank" rel="noreferrer">
				{' Fabstracta '}
			</a>
			components.
		</p>
		<p>
			Everything you see in this page sits under <code>src/Welcome</code>. Once you are done playing feel free to safely
			delete the folder.
		</p>
		<p>
			If you are just starting out with Fabstracta - don&apos;t forget to check out the{' '}
			<a href="https://fabstracta.fnox.se/" target="_blank" rel="noreferrer">
				documentation
			</a>{' '}
			and take the time to understand the Fortnox Design System, code standards and the plethora of components and
			utilities the framework provides.
		</p>
		<p>
			If you can&apos;t find the information you require or need help with Fabstracta always feel free to jump in to the
			official channel in Slack <code>#fabstracta-app-developers</code>. At the channel you will find plenty of
			developers ready to help with any concerns you might have.
		</p>
	</Card>
);
