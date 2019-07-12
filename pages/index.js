import Link from 'next/link';

const Index = () => (
	<div>
		<ul>
			<li><Link href="/"><a>HOME</a></Link></li>
			<li><Link href="/about"><a>ABOUT</a></Link></li>
		</ul>
		<h1>Welcome to Loren's Next.js App</h1>
	</div>
);

export default Index; 