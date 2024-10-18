
import SideNav from '@/components/SideNav';
import TopNav from './TopNav';

const Layout = ({children}) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-none md:w-[300px]">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto md:p-12"><TopNav />{children}</div>
    </div>
  )
}

export default Layout
