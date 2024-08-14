import { createContext,useState } from 'react'

export const MenuContext = createContext();

export function ContextMenu({children}) {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
      setOpenMenu(prevOpenMenu => !prevOpenMenu)
    };
  return (
    <MenuContext.Provider value={{openMenu, toggleMenu,setOpenMenu}}>
        {children}
    </MenuContext.Provider>
  )
}

export default ContextMenu