import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import { SettingsOutlined, ChevronLeft, ChevronRightOutlined, HomeOutlined, ShoppingCartOutlined, Groups2Outlined, ReceiptLongOutlined, PublicOutlined, PointOfSaleOutlined, TodayOutlined, CalendarMonthOutlined, AdminPanelSettingsOutlined, TrendingUpOutlined, PieChartOutlined } from '@mui/icons-material'
import FlexBetween from './FlexBetween'
import profileImage from "assets/pfp2.jpeg"

const Sidebar = ({
  drawerWidth, iseSidebarOpen, setIsSidebarOpen, isNonMobile
}) => {
  const {pathname} = useLocation()
  const [active, setActive] = useState("")
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(()=> {
    setActive(pathname.substring(1))
  }, [pathname])
  
  return (
    <Box component="nav">
      
    </Box>
  )
}

export default Sidebar