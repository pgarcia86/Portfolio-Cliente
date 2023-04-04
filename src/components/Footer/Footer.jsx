import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
	const [bounce, setBounce] = useState('fa-brands fa-github fa-2xl');

	const handleHover = () => {
		if (bounce === 'fa-brands fa-github fa-2xl') {
			setBounce('fa-brands fa-github fa-2xl fa-bounce');
		} else {
			setBounce('fa-brands fa-github fa-2xl');
		}
	};

	return (
		<div id='footer' onMouseEnter={handleHover} onMouseLeave={handleHover}>
			<Link to='https://github.com/eoGimenez'>
				<i class={bounce}>
					{' '}
					<span>GitHub</span>
				</i>
			</Link>
		</div>
	);
}
