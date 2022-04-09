import React from 'react';
import { Card, H1, Row, Column, Table, TableCell, TableHeader, TableRow } from '@fnox/fabstracta';

export const RoundResults: React.FC = () => {
	let roundResults = null;
	roundResults = [
		{ player: { playerName: 'Danilo' }, place: 1, score: 27 },
		{ player: { playerName: 'Oskar' }, place: 2, score: 20 },
		{ player: { playerName: 'Fatlum' }, place: 3, score: 19 },
		{ player: { playerName: 'Caroline' }, place: 4, score: 12 },
		{ player: { playerName: 'Olof' }, place: 5, score: 11 },
		{ player: { playerName: 'Evan' }, place: 6, score: 10 },
	];

	const getTableRowsWithRoundResults = () => {
		return roundResults?.map((roundResult, index) => {
			return (
				<TableRow key="`roundResult${index}`">
					<TableCell>{roundResult.place}</TableCell>
					<TableCell>{roundResult.player.playerName}</TableCell>
					<TableCell>{roundResult.score}</TableCell>
				</TableRow>
			);
		});
	};

	return (
		<>
			<H1>Round 0001! You did great!</H1>
			<Row>
				<Column>
					<Card>
						<Table rows={getTableRowsWithRoundResults()}>
							<TableHeader>Place</TableHeader>
							<TableHeader>Player</TableHeader>
							<TableHeader>Score</TableHeader>
						</Table>
					</Card>
				</Column>
			</Row>
		</>
	);
};
