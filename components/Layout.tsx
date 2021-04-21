import Navbar from "./Nevbar"

export interface LayoutProps {

}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
    return (<div className="content">
        <Navbar />
        {children}
    </div>);
}

export default Layout;