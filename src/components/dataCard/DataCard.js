import React from 'react'
import { Card, makeStyles } from '@material-ui/core'
import { CardHeader } from '@material-ui/core'
import { CardContent } from '@material-ui/core'

const useStyles = makeStyles({
    card: {
        width: '340px',
        height: '80px',
        border: '1px solid #bdc3cb',
        display: 'flex',
    },
    cardHeader: {
        textAlign: 'center',
        color: '#fff',
        borderBottom: '1px solid #000',
        backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
        fontSize: '16px',
    },
    cardContent: {
      
        padding:'30px 10px 10px 85px', 
        backgroundColor: 'rgb(229, 229, 243)',
        fontSize: '20px',
        fontWeight: 'bold',
        flexGrow: 1,
    },
})


const CardItem = (props) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                subheader={props.name}
                subheaderTypographyProps={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#fff',
                }}
            ></CardHeader>
            <CardContent className={classes.cardContent}>{props.value}</CardContent>
        </Card>
    )
}
const DataCard = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {props.cardItems &&
                props.cardItems.map((card) => (
                    <CardItem name={card.name} value={card.value} />
                ))}
        </div>
    )
}

export default DataCard
