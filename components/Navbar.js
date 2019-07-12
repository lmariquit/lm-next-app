import Link from 'next/link'

const Navbar = () => (
	<div>
		<ul>
			<li><Link href="/"><a>HOME</a></Link></li>
			<li><Link href="/about"><a>ABOUT</a></Link></li>
		</ul>
	</div>

);

export default Navbar;