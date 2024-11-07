import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"
import "./Navbar.scss"

export default function Navbar() {
    return (
        <header>
            <DesktopNavigation />
            <MobileNavigation />
        </header>
    )
}