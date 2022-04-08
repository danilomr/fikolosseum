import React, { useEffect } from 'react';
import { BodyText, Column, Filter, FilterOption, H4, Row } from '@fnox/fabstracta';
import { fetchEntity, useEntity } from '@fnox/fabstracta-platform';
import { useDispatch } from '../hooks/useDispatch';
import { getUsers } from './utils';

type User = {
	id: number;
	name: string;
};

export const FormFilter: React.FC = () => {
	const [users] = useEntity<User[]>('users');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEntity('users', getUsers()));
	}, [dispatch]);

	return (
		<>
			<H4>Filter</H4>
			<br />
			<BodyText>
				These can be used when filtering lists or similar, or when selecting a value from a few different options.
				<br />
				<br />
				<p>
					Read more about the{' '}
					<a href="https://fabstracta.fnox.se/fabstracta/filter/Examples" target="_blank" rel="noreferrer">
						Filter
					</a>{' '}
					component.
				</p>
			</BodyText>
			<br />
			<Row>
				<Column>
					<Filter entityKey="user2" title="Choose user from filter" borderColor="gray">
						{users?.map((user) => (
							<FilterOption key={user.id} value={user.name}>
								{user.name}
							</FilterOption>
						))}
					</Filter>
				</Column>
			</Row>
		</>
	);
};
