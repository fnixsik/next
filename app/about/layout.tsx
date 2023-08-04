import Link from "next/link";

const TeamLayot = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/about/contacts'>contacts</Link>
                </li>
                <li>
                    <Link href='/about/team'>team</Link>
                </li>
            </ul>
            {children}
        </div>
     );
}
 
export default TeamLayot;