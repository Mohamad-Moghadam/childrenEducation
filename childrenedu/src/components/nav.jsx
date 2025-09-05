import { Link } from "./link"

export function NavBar() {


    return <div>
        <ul>
            <li>
                <Link anylink="Contact"/>
            </li>
            <li>
                <Link anylink="Student Life"/>
            </li>
            <li>
                <Link anylink="Admissions"/>
            </li>
            <li>
                <Link anylink="Academics"/>
            </li>
            <li>
                <Link anylink="About Us"/>
            </li>
            <li>
                <Link anylink="Home"/>
            </li>
        </ul>
        <section>
            <img src="../assets/Logo (1).png" alt="Logo of little learners" />
        </section>
    </div>
}