const Layout = ({ children }) => {
    const nav = () => (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Register</a>
            </li>
        </ul>
    )

    return <>
        {nav()} {children}
    </>
}

export default Layout;
