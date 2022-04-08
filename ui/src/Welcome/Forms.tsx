import React from 'react';
import { Card, Column, Row } from '@fnox/fabstracta';
import { FormAutoComplete } from './FormAutoComplete';
import { FormFilter } from './FormFilter';
import { FormTagSelect } from './FormTagSelect';
import { FormValidation } from './FormValidation';
import { FormsInStateTree } from './FormsInStateTree';

export const Forms: React.FC = () => {
	return (
		<Row>
			<Column width="600px">
				<Card>
					<FormValidation />
				</Card>
				<Row>
					<Card>
						<FormTagSelect />
					</Card>
				</Row>
			</Column>

			<Column width="600px">
				<Row>
					<Card>
						<FormsInStateTree />
					</Card>
				</Row>
				<div>
					<Card>
						<FormAutoComplete />
					</Card>
				</div>
				<div>
					<Card>
						<FormFilter />
					</Card>
				</div>
			</Column>
		</Row>
	);
};
