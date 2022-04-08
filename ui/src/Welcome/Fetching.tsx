import React from 'react';
import { useDispatch } from 'react-redux';
import {
	PrimaryButton,
	Row,
	Column,
	Button,
	Card,
	Spinner,
	Table,
	TableCell,
	TableHeader,
	TableRow,
	H4,
	BodyText,
	Icon,
	List,
} from '@fnox/fabstracta';
import { get } from '@fnox/fabstracta-funky';
import { usePagination, fetchList, When, hasData } from '@fnox/fabstracta-platform';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getCities } from './utils';

export const FetchCitiesTable = () => {
	const dispatch = useDispatch();
	const cities = useTypedSelector(({ lists }) => get(lists, 'cities.items', []));

	const fetchCities = async () => {
		dispatch(fetchList('cities', getCities()));
	};

	const getRows = () => {
		return cities?.map((row, i) => {
			return (
				<TableRow key={`myTable${i}`}>
					<TableCell>{row.city}</TableCell>
					<TableCell>{row.population}</TableCell>
					<TableCell>{row.country}</TableCell>
				</TableRow>
			);
		});
	};
	return (
		<Card>
			<H4> We can even fetch some data from an API endpoint </H4>
			<br />
			<Row>
				<BodyText>
					You can take a look at the <code>Fetching.tsx</code> component and there you will find the{' '}
					<code>FetchCitiesTable</code> component to see how you can fetch a list from an API and use the selector to
					display the data.
				</BodyText>
			</Row>
			<Button feedbackWhen="cities" onClick={fetchCities}>
				Click to Fetch Cities Data
			</Button>
			<br />
			<Spinner when="cities">
				<When truthy={hasData(cities)}>
					<h5 style={{ textAlign: 'center' }}>Wow we got {cities?.length} cities</h5>
					<br />
					<Table rows={getRows()}>
						<TableHeader sortable>City</TableHeader>
						<TableHeader sortable>Population</TableHeader>
						<TableHeader>Country</TableHeader>
					</Table>
				</When>
			</Spinner>
		</Card>
	);
};

const PaginationDemo = () => {
	const [pagination, { next }] = usePagination('todos', `/api/todos/todos-v1`, { query: { limit: 10 }, pageSize: 10 });
	const todos = useTypedSelector((state) => state.lists.todos);
	return (
		<>
			<Card>
				<BodyText>
					In the list we are loading data from the TODOs API <code>/api/todos/todos-v1</code>.
					<br />
					Click on the &quot;Load More&quot; button below to see the pagination in action.
				</BodyText>
			</Card>
			<List>
				{todos?.items?.map((todo) => {
					return (
						<Row key={todo.id}>
							<Column width={160}> {todo.domain} </Column>
							<Column width={160}> {todo.action} </Column>
							<Column> {todo.due} </Column>
							<Column collapse>
								<Icon size={20} name="lock" />
							</Column>
						</Row>
					);
				})}
				<Spinner when="todos" />
				<Row>
					<div
						style={{ display: 'flex', flexDirection: 'column', width: '100%', background: 'white', padding: '2rem' }}
					>
						<PrimaryButton onClick={() => next()} disabled={!pagination.hasNextPage}>
							{!pagination.hasNextPage ? 'No more data to fetch' : 'Load More'}
						</PrimaryButton>
						<ul>
							<li>
								<strong>CurrentPageNumber: {pagination.currentPageNumber}</strong>
							</li>
							<li>
								<strong>HasNextPage: {JSON.stringify(pagination.hasNextPage)}</strong>
							</li>
							<li>
								<strong>Accumulated items: {pagination.accumulated.length}</strong>
							</li>
							<li>
								<strong>CurrentPage items: {pagination.currentPage.length}</strong>
							</li>
						</ul>
					</div>
				</Row>
			</List>
		</>
	);
};
export const Fetching = () => {
	const user = useTypedSelector(({ user }) => user);
	return (
		<>
			<Row>
				<Column width="620px">
					<FetchCitiesTable />
				</Column>
				<Column width="620px">
					<Card>
						<BodyText>
							If you are logged in you can see below an example of how you can paginate data coming from an API.
						</BodyText>
					</Card>
					<Row>
						<Column>
							<When truthy={user.name}>
								<PaginationDemo />
							</When>
						</Column>
					</Row>
				</Column>
			</Row>
		</>
	);
};
