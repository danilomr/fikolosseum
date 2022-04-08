import React from 'react';
import { H1, H4, Row, Column, TextField, Button, Validate } from '@fnox/fabstracta';
import { validateRequiredField } from '@fnox/fabstracta-platform';
import { useDispatch } from 'hooks/useDispatch';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { playerLogIn } from 'actions/authentication';

export const Lobby: React.FC = () => {

	const dispatch = useDispatch();

	const playerAuth = useTypedSelector((state) => state.entities.playerAuth);
    const joinRoom = () => {
    	dispatch(playerLogIn(playerAuth));
    }

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
						<Button testID="join-room" >Join room</Button>
					</Validate>
				</Column>
			</Row>
		</>
	);

};
