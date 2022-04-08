import React from 'react';
import { Button, Column, H3, H4, Row, TextField, Validate, BodyText } from '@fnox/fabstracta';
import {
	validateOrgNumberField,
	validateRequiredField,
	validateEmailField,
	validatePhoneField,
} from '@fnox/fabstracta-platform';
import { useTypedSelector } from 'hooks/useTypedSelector';

const customMinLengthValidator = (text) => {
	if (text.length <= 1) {
		return 'Your name needs to be longer than one character';
	}
	return true;
};

const customIsNameValidator = (text) => {
	const re = new RegExp(/^(?=.{1,50}$)[a-zåäö]+(?:['_.\s][a-zåäö]+)*$/i);
	if (!text.match(re)) {
		return `${text} is not a name silly!`;
	}
	return true;
};

export const FormValidation: React.FC = () => {
	const newUser = useTypedSelector((state) => state.entities.newUser);
	const [savedUser, setSavedUser] = React.useState<string>();
	const submitForm = () => setSavedUser(JSON.stringify(newUser));

	return (
		<>
			<H4>Creating a new customer</H4>
			<H3>... with validation!</H3>
			<br />
			<p>
				Fabstracta has a lot of pre written validation for many types of scenarios. You can have a look at the
				validators provided by Fabstracta{' '}
				<a
					href="https://git.fnox.se/projects/FNX/repos/fabstracta-platform/browse/src/validation"
					target="_blank"
					rel="noreferrer"
				>
					here.
				</a>
			</p>
			<p>They return an error message that is shown beneath the input field if the validator fails</p>

			<Row>
				<Column>
					<TextField
						borderColor="gray"
						required
						entityKey="newUser.name"
						title="Name..."
						validators={[validateRequiredField, customMinLengthValidator, customIsNameValidator]}
					/>
				</Column>
				<Column>
					<br />
					<p>{`This "Name..." input field has one validator from Fabstracta and two custom validators.`}</p>
				</Column>
			</Row>

			<Row>
				<Column>
					<TextField
						borderColor="gray"
						required
						entityKey="newUser.email"
						title="Email..."
						validators={[validateEmailField]}
					/>
				</Column>
				<Column>
					<TextField
						borderColor="gray"
						required
						entityKey="newUser.phoneNumber"
						title="Phone Number..."
						validators={[validatePhoneField]}
					/>
				</Column>
			</Row>

			<Row>
				<Column>
					<TextField
						borderColor="gray"
						required
						entityKey="newUser.socialSecurityNumber"
						title="Org-/Social Security Number"
						validators={[validateOrgNumberField]}
					/>
				</Column>
				<Column></Column>
			</Row>

			{savedUser && <h5 style={{ wordWrap: 'break-word' }}>Saved:{savedUser}</h5>}

			<br />
			<Column>
				<Validate entities="newUser" onClick={submitForm}>
					<Button size="large">Register</Button>
				</Validate>
				<br />
				<BodyText>
					The register button is wrapped with the <code>Validate</code> component, which is connected to the same entity
					as the<code>{`TextField's`}</code> are. If you press this button and not all fields are valid, the invalid
					ones will display an error message.
				</BodyText>
			</Column>
		</>
	);
};
