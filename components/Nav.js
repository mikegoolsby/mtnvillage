import Link from 'next/link'
import Navi from './styles/navistyles'
import Font from './styles/font'

export default function Nav() {
    return(
        <Font>
            <Navi>
                <Link href="/">Home</Link>
                <Link href="/houserules">Rules</Link>
                <Link href="/checkinout">Check In & Out</Link>
                <Link href="/amenities">amenities</Link>
            </Navi>
        </Font>

            
        
    )
}