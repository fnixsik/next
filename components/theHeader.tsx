import Link from "next/link";

const header = () => {
    return ( 
        <header className="head">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
        </header>
     );
}
 
export default header;