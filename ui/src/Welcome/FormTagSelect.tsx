import React from 'react';
import { BodyText, Column, Row, H4, TagSelect, TagSelectItem } from '@fnox/fabstracta';
import { getCities } from './utils';

export const FormTagSelect: React.FC = () => {
	return (
		<>
			<H4>TagSelect</H4>
			<br />
			<BodyText>
				Similarly to AutoComplete, the <code>TagSelect</code> component also fetches a list from a backend but renders
				the selected result as selected tags. Perfect for making multiple selections!
				<br />
				<br />
				<p>
					{`Want to know more about it's API or props? Click `}
					<a href="https://fabstracta.fnox.se/fabstracta/tagselect/Examples" target="_blank" rel="noreferrer">
						this{' '}
					</a>
					link.
				</p>
			</BodyText>
			<br />
			<Row>
				<Column>
					<TagSelect
						borderColor="gray"
						query={(s) => ({ q: s })}
						entityKey="cities.city"
						entityValue="city"
						name="power1"
						title="TagSelect Demo"
						endpoint={getCities()}
					>
						{(results) =>
							results.map((result, i) => (
								<TagSelectItem key={i} entityValue={result.city}>
									{result.city}
								</TagSelectItem>
							))
						}
					</TagSelect>
				</Column>
			</Row>
		</>
	);
};
