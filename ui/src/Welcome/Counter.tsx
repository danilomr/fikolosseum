import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, EntityText, Column, Card, BodyText, SecondaryButton } from '@fnox/fabstracta';
import { ACTIONS } from '../actions/definitions';

export const Counter = () => {
	const dispatch = useDispatch();
	return (
		<Card>
			<Row>
				<Column>
					<BodyText>
						Simple counter using action dispatch and a reducer to react to the action and update the state.
					</BodyText>
					<BodyText>
						Check the <code>WelcomeCounter.tsx</code> component and <code>welcomeReducer.ts</code> to see how it&apos;s
						all connected under the hood.
					</BodyText>
				</Column>
			</Row>
			<Row>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div className="clicker" style={{ padding: '0 1.8rem 0 0' }}>
						<SecondaryButton size="small" onClick={() => dispatch({ type: ACTIONS.INCREASE_CLICKS })}>
							Increase Clicks
						</SecondaryButton>
					</div>
					<BodyText>
						<h2 className="counter" style={{ color: '#bfdcbb' }}>
							<EntityText path="welcome.clicks" />
						</h2>
					</BodyText>
				</div>
			</Row>
		</Card>
	);
};
