import Nav from './nav'
import Logo from './logo'

const Header = () => (
  <header className="flex sm:flex-row sm:items-center sm:justify-between flex-col items-start py-6 px-6">
    <Logo />
    <Nav />
  </header>
)

export default Header
