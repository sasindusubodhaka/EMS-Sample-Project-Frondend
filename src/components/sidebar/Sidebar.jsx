import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useNavigate } from 'react-router-dom'

const sidebarWidth = '240px'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: sidebarWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: sidebarWidth,

    },
    listItem: {
        backgroundColor: '#000045',
        color: '#fff',
        minHeight: '60px',
        '&:hover': {
            backgroundColor: '#4c5355',
        },
    },
    sbListitem: {
        paddingLeft: '50px',
        color: '#fff',
        backgroundColor: '#000059',
        '&:hover': {
            backgroundColor: '#4c5355',
        },
    },
}))
const Sidebar = (props) => {
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <>       
            <div className={classes.toolbar} />
            <Divider />
            <List style={{ minWidth: 'inherit' }}>
                <ListItem style={{ height: '75px' }}>
                    <div
                        style={{
                            display: 'flex',
                            paddingLeft: '60px',
                        }}
                    >
                        <img src="/images/ems_logo.png" style={{ width: '80px' }} alt="abc" />
                    </div>
                </ListItem>
                <Divider />
                {props.menuItems.map((item, index) => {
                    return item.children ? (
                        <React.Fragment key={index}>
                            <ListItem className={classes.listItem} key={item.name}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.name}</ListItemText>
                            </ListItem>
                            {item.children.map((child) => (
                                <ListItem
                                    button
                                    key={child.name}
                                    className={classes.sbListitem}
                                    onClick={() => navigate(child.url)}
                                >
                                    <ListItemIcon>{child.icon}</ListItemIcon>
                                    <ListItemText>{child.name}</ListItemText>
                                </ListItem>
                            ))}
                            <Divider />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <ListItem
                                button
                                key={item.name}
                                className={classes.listItem}
                                onClick={() => navigate(item.url)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.name}</ListItemText>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    )
                })}
            </List>
            {/* </Drawer> */}
        </>
    )
}

export default Sidebar
