import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import SocialLinks from '../SocialLinks'
import { getMenuApi } from '../../../api/menu'
import logoWhite from '../../../assets/img/png/logo-white.png'

import './MenuTop.scss'

export default function MenuTop() {
  const [menuData, setMenuData] = useState([])

  useEffect(() => {
    getMenuApi().then(response => {
      const arrayMenu = []
      response.menu.forEach(item => {
        item.active && arrayMenu.push(menuItem(item))
      })
      setMenuData(arrayMenu)
    })
  }, [])

  const menuItem = item => {
    let newItem = {}
    const external = item.url.indexOf('http') > -1 ? true : false
    if (external) {
      newItem = {
        label: (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {' '}
            {item.title}{' '}
          </a>
        ),
        key: item._id
      }
    } else {
      newItem = {
        label: <Link to={item.url}>{item.title}</Link>,
        key: item._id
      }
    }

    return newItem
  }

  return (
    <div className="main_menu-top-web">
      <div className="main_menu-top-web__logo">
        <Link to={'/'}>
          <img src={logoWhite} alt="Agustín Navarro Galdon" />
        </Link>
      </div>
      <div className="main_menu-top-web__item">
        <Menu className="menu-top-web" mode="horizontal" items={menuData} />
        <SocialLinks />
      </div>
    </div>
  )
}
