import React from 'react';
import { AwesomeIcon, Card, H4, H5, Icon, Row } from '@fnox/fabstracta';

const icons = [
	'megaphone',
	'pacman',
	'fordon',
	'cash',
	'raket',
	'note',
	'flag',
	'umbrella',
	'star',
	'clock',
	'lock',
	'stamp',
	'trash',
	'palm',
	'home',
	'invoicing',
	'send',
	'list',
	'search',
	'mail',
	'phone',
	'salary',
	'service',
	'flash_off',
	'crop_off',
	'album',
	'project',
	'date',
	'comment',
	'communication',
	'spinner',
	'spinner_78',
	'spinner_kvart',
	'subscriptions',
	'close_x',
	'Hamburger',
	'check_heavy',
	'time',
	'logout',
	'app',
	'company',
	'logo',
	'shop',
	'glasses',
	'tax',
	'hour_glass',
	'clover',
	'icecream',
	'draft',
	'debit_card',
	'halse_vinter',
	'car',
	'palm2',
	'health',
	'pen',
	'nocontext',
	'reciept',
	'woman',
	'industry',
	'broom',
];

export const DemoIcons: React.FC = () => {
	return (
		<Card>
			<Row>
				<H4>These are our very own internal awesome icons</H4>
			</Row>
			<Row>
				<div style={{ width: '648px' }}>
					{icons.map((icon) => (
						<Icon key={icon} name={icon} />
					))}
				</div>
			</Row>
			<Row>
				<H5>
					For the entire collection of icons check the{' '}
					<a href="https://fabstracta.fnox.se/fabstracta/webicons/Examples" target="_blank" rel="noreferrer">
						Fabstracta Documentation
					</a>
				</H5>
			</Row>
			<Row>
				<H4>And these are some of the icons available through Font Awesome</H4>
			</Row>
			<Row>
				<div style={{ width: '648px' }}>
					<AwesomeIcon name="power-off" />
					<AwesomeIcon name="address-card" />
					<AwesomeIcon name="anchor" />
					<AwesomeIcon name="check-square" />
					<AwesomeIcon name="memory" />
					<AwesomeIcon name="lock" />
					<AwesomeIcon name="user" />
					<AwesomeIcon name="apple-alt" />
				</div>
			</Row>
		</Card>
	);
};
