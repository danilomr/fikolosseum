import React from 'react';
import { BodyText, Column, EntityText, H3, Row, TextField } from '@fnox/fabstracta';

export const FormsInStateTree: React.FC = () => {
	return (
		<>
			<BodyText>
				Many components such as the <code>TextField</code> component are tied to the state tree.So all input changes end
				up in the specified entity without having to wire manually actions and reducers.
			</BodyText>
			<br />
			<Row>
				<Column>
					<BodyText>
						You wrote:{' '}
						<H3>
							<EntityText path="writer.value" />
						</H3>
					</BodyText>
					<TextField borderColor="gray" required entityKey="writer.value" title="Your thoughts go here ..." />
				</Column>
			</Row>
		</>
	);
};
