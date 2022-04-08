import React from 'react';
import { BodyText, Column, Row, Autocomplete, AutocompleteItem, Checkbox, Icon, H4 } from '@fnox/fabstracta';
import { getUsers } from './utils';

export const FormAutoComplete: React.FC = () => {
	const [users, setUsers] = React.useState<string[]>([]);
	const removeUser = (userToRemove) => {
		setUsers((previousUsers) => previousUsers.filter((user) => user !== userToRemove));
	};

	return (
		<>
			<H4>Autocomplete</H4>
			<br />
			<BodyText>
				Some components are able to filter and render a list provided by a backend service based on whats is typed into
				the the field. The filtration is handled in the backend.
				<br />
				<br />
				<p>
					Read more about the{' '}
					<a href="https://fabstracta.fnox.se/fabstracta/autocomplete/Examples" target="_blank" rel="noreferrer">
						AutoComplete
					</a>{' '}
					component or its partner in crime{' '}
					<a href="https://fabstracta.fnox.se/fabstracta/autocompleteItem/Examples" target="_blank" rel="noreferrer">
						AutoCompleteItem.{' '}
					</a>
				</p>
			</BodyText>
			<br />
			<Row>
				<Column>
					<Autocomplete
						title="Fetch users with this autocomplete!"
						entityKey="user.name"
						query={(s) => ({ searchQuery: s })}
						endpoint={getUsers()}
						name="users"
						borderColor="gray"
					>
						{(results) =>
							results.map((result, i) => (
								<AutocompleteItem key={i} entityValue={result.name}>
									<div
										style={{ width: '100%' }}
										onClick={() => setUsers((currentUsers) => [...currentUsers, result.name])}
									>
										{result.name}
									</div>
								</AutocompleteItem>
							))
						}
					</Autocomplete>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						{users?.map((user, i) => {
							return (
								<div style={{ display: 'flex', justifyContent: 'space-between' }} key={i}>
									<Checkbox borderColor="gray" label={user} entityKey={user} />
									<Icon size={18} name="trash" onClick={() => removeUser(user)} />
								</div>
							);
						})}
					</div>
				</Column>
			</Row>
		</>
	);
};
