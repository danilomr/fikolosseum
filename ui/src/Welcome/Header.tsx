import React from 'react';

export const Header: React.FC = () => (
	<div style={{ margin: '2rem' }}>
		<h2 style={{ color: '#ffc200', textAlign: 'center', letterSpacing: '0.20rem', fontWeight: 'bold' }}>
			Welcome to the
			<span
				style={{
					background: '#003825',
					border: '3px solid #deffde',
					padding: '0.8rem',
					margin: '0.5rem',
					color: 'white',
				}}
			>
				FABSTRACTA
			</span>
			template
		</h2>
	</div>
);
