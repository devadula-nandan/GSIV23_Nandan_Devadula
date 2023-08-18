import Navbar from "./Navbar"
// This is the Layout Wrapper component containing the Navbar on top
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className="container px-3 py-4 mx-auto">
                {children}
            </div>
        </>
    )
}