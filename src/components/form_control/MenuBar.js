import { Menu, Dropdown } from 'antd'

const MenuBar = ({ children, menuItems, actionTrigger, disabled }) => {
  const menu = (
    <Menu>
      {menuItems &&
        menuItems.map((menu, i) => (
          <Menu.Item
            key={i}
            onClick={menu.action}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div className='context-menu-div'>
              {menu.text}
              {/* <span>Ctr + C</span> */}
            </div>
          </Menu.Item>
        ))}
    </Menu>
  )

  return (
    <Dropdown overlay={menu} trigger={[actionTrigger]} disabled={disabled}>
      <div
        className='site-dropdown-context-menu'
        // style={{
        //   textAlign: 'center',
        //   height: 200,
        //   lineHeight: '200px',
        // }}
      >
        {children}
      </div>
    </Dropdown>
  )
}

MenuBar.defaultProps = {
  menuItems: null,
  actionTrigger: 'click', //< click|hover|contextMenu(open when right clicked) >
  disabled: false,
}

export default MenuBar
