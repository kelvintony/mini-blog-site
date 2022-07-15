import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-box1'>
				<img
					className='navbar-logo'
					src='https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-nodes-cryptocurrency-vitaliy-gorbachev-blue-vitaly-gorbachev.png'
					alt='pix-1'
				/>
				<Link className='btn-links' to='/'>
					<h1 className='navbar-heading'>Project-X</h1>
				</Link>
			</div>
			<div className='navbar-box2'>
				<h5>Jenny Ivy</h5>
				<Link to='posts/createpost' className=' btn-links btn-login'>
					Create Post
				</Link>
				<button className='btn-login'>Login</button>
			</div>
		</nav>
	);
};

export default Navbar;
