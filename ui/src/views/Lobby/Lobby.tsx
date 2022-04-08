import React from 'react';
import { H1, Row, Column, TextField, PrimaryButton, Validate } from '@fnox/fabstracta';
import { validateRequiredField } from '@fnox/fabstracta-platform';
import { playerLogIn } from 'actions/authentication';
import { useDispatch } from 'hooks/useDispatch';
import { useTypedSelector } from 'hooks/useTypedSelector';

export const Lobby: React.FC = () => {
	const dispatch = useDispatch();

	const playerAuth = useTypedSelector((state) => state.entities.playerAuth);
	const joinRoom = () => {
		dispatch(playerLogIn(playerAuth));
	};

	return (
		<>
			<H1>Hello World! It's fika time!</H1>
			<Row>
				<Column>
					<TextField
						borderColor="gray"
						required
						entityKey="playerAuth.playerName"
						title="Player name"
						validators={[validateRequiredField]}
					/>
				</Column>
			</Row>
			<Row>
				<Column>
					<Validate entities="playerAuth" onClick={joinRoom}>
						<PrimaryButton testID="join-room">Join room</PrimaryButton>
					</Validate>
				</Column>
			</Row>
		</>
	);
};
