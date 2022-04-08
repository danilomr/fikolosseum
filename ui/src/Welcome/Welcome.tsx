import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { BodyText, Button, Card, Column, EntityText, fetchUser, H4, Menu, MenuItem, Row } from '@fnox/fabstracta';
import { entityValues, When } from '@fnox/fabstracta-platform';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Counter } from './Counter';
import { DemoIcons } from './DemoIcons';
import { Fetching } from './Fetching';
import { Forms } from './Forms';
import { Header } from './Header';
import { FabstractaLogo } from './Logo';
import { PlaygroundInfo } from './PlaygroundInfo';
import { Simple } from './Simple/Simple';

const containerStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '2em',
	height: '100%',
	width: '100%',
};

export const WelcomeScreen: React.FC = () => {
	const dispatch = useDispatch();
	const user = useTypedSelector(({ user }) => user);

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<>
			<Menu direction="horizontal">
				<FabstractaLogo />
				<MenuItem activeOnlyWhenExact navigateTo="/welcome" icon="home">
					Home
				</MenuItem>
				<MenuItem navigateTo="/welcome/fetching" icon="raket">
					Fetch Data
				</MenuItem>
				<MenuItem navigateTo="/welcome/simple" icon="time">
					Simple Route
				</MenuItem>
				<MenuItem navigateTo="/welcome/forms" icon="invoicing">
					Forms
				</MenuItem>
				<When truthy={user.name}>
					<div style={{ marginLeft: 'auto', marginRight: '2rem' }}>
						You are logged in as <strong>{user.name}!</strong>
					</div>
				</When>
			</Menu>

			<div style={containerStyle}>
				<div>
					<Row>
						<Column>
							<Header />
						</Column>
					</Row>
					<Row />
					<Route path="/welcome/simple">
						<Simple />
					</Route>
					<Route path="/welcome/fetching">
						<Fetching />
					</Route>
					<Route path="/welcome/forms">
						<Forms />
					</Route>
					<Route exact path="/welcome">
						<Row>
							<Column width="600px">
								<PlaygroundInfo />
							</Column>
							<Column width="600px">
								<DemoIcons />
							</Column>
						</Row>
						<Row />
						<Row>
							<Column width="600px">
								<Row />
								<Row>
									<Counter />
								</Row>
							</Column>
							<Column width="600px">
								<Card>
									<Row>
										<BodyText>
											You can use EntityText to quickly extract values from entities in the shape of a simple span.
										</BodyText>
									</Row>
									<Row>
										<H4>
											<EntityText path="welcome.hello" />
										</H4>
									</Row>
									<Row>
										<Button
											onClick={() => dispatch(entityValues('welcome', { hello: 'Why hello there, I am new state!' }))}
										>
											Change entity state
										</Button>
									</Row>
								</Card>
							</Column>
						</Row>
					</Route>
				</div>
			</div>
		</>
	);
};
