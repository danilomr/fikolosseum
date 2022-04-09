import React from 'react';
import { Card, H1, Row, Column, Table, TableCell, TableHeader, TableRow, PrimaryButton } from '@fnox/fabstracta';
import { When } from '@fnox/fabstracta-platform';
import { setPlayerReadyForNextRound } from 'actions/room';
import { useDispatch } from 'hooks/useDispatch';

export const Room: React.FC = () => {
	const dispatch = useDispatch();

	const setReady = () => {
		dispatch(setPlayerReadyForNextRound());
	};

	let players = null;
	players = [
		// test with score
		{ playerName: 'Caroline', isReadyForNextRound: true },
		{ playerName: 'Danilo', isReadyForNextRound: false },
		{ playerName: 'Evan', isReadyForNextRound: false },
		{ playerName: 'Fatlum', isReadyForNextRound: true },
		{ playerName: 'Olof', isReadyForNextRound: false },
		{ playerName: 'Oskar', isReadyForNextRound: true },
	];
	players = [
		// test with score
		{ playerName: 'Danilo', isReadyForNextRound: false, place: 1, score: 27 },
		{ playerName: 'Oskar', isReadyForNextRound: true, place: 2, score: 20 },
		{ playerName: 'Fatlum', isReadyForNextRound: true, place: 3, score: 19 },
		{ playerName: 'Caroline', isReadyForNextRound: true, place: 4, score: 12 },
		{ playerName: 'Olof', isReadyForNextRound: false, place: 5, score: 11 },
		{ playerName: 'Evan', isReadyForNextRound: false, place: 6, score: 10 },
	];

	const hasResults = players?.length > 0 && players[0].place > 0;
	const playerIsReady = () => {
		return <span>I am ready!</span>;
	};
	const playerIsNotReady = () => {
		return <span>I am not ready yet!</span>;
	};
	const getTableRows = () => {
		return players?.map((player, index) => {
			return (
				<TableRow key={`player${index}`}>
					<When truthy={hasResults}>
						<TableCell>{player.place}</TableCell>
					</When>
					<TableCell>{player.playerName}</TableCell>
					<When truthy={hasResults}>
						<TableCell>{player.score}</TableCell>
					</When>
					<TableCell>{player.isReadyForNextRound ? playerIsReady() : playerIsNotReady()}</TableCell>
				</TableRow>
			);
		});
	};

	return (
		<>
			<H1>Hello user! You are in the room 001!</H1>
			<Row>
				<Column>
					<Card>
						<Table rows={getTableRows()}>
							<When truthy={hasResults}>
								<TableHeader>Place</TableHeader>
							</When>
							<TableHeader>Player</TableHeader>
							<When truthy={hasResults}>
								<TableHeader>Score</TableHeader>
							</When>
							<TableHeader></TableHeader>
						</Table>
					</Card>
				</Column>
			</Row>
			<Row>
				<Column>
					<Card>
						<PrimaryButton testID="set-ready-for-round" onClick={setReady()}>
							I am ready!
						</PrimaryButton>
					</Card>
				</Column>
			</Row>
		</>
	);
};
