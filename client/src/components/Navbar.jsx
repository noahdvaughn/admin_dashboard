import React, {useState} from 'react'
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material'
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import profileImage from 'assets/pfp2.jpeg'
import { AppBar, Toolbar, useTheme } from '@mui/material'

const Navbar = () => {
  const dispath = useDispatch()
  const theme = useTheme()
  return (
    <AppBar
    sx={{
      position: "static",
      background: "none",
      boxShadow: "none"
    }}
    >
      <Toolbar sx={{ justifyContent: "space-between"}}>
        {/* Leftside */}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar