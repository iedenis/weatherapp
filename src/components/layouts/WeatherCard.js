import React from 'react'
import { Card, CardActionArea, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard = ({ minTemp, maxTemp, temperature, description, dayOfTheWeek, city, hasButton, removeFromFavourites, isDaily, getIconByDescription }) => {
    const icon = getIconByDescription(description)
    console.log("description", description);
    console.log(icon[1])
    return (
        <Card style={styles.card}>
            <CardActionArea>
                <CardContent>
                    <FontAwesomeIcon icon={icon[0]} color={icon[1]} size='9x' style={styles.cardIcon}></FontAwesomeIcon>
                    <Typography gutterBottom variant="h5" >
                        {dayOfTheWeek ? dayOfTheWeek : city}
                    </Typography>

                    {hasButton ? <Typography variant="body2" color="textSecondary" >
                        {description} {temperature}&deg;C
        </Typography> : <div>{description}</div>
                    }
                </CardContent>
            </CardActionArea>
            {hasButton ? <CardActions>
                <Button onClick={() => removeFromFavourites(city)} size="small" color="primary">
                    Remove
        </Button>
            </CardActions >
                : <CardActions>
                    <Typography >Min {minTemp}&deg;C</Typography>
                    <Typography >Max {maxTemp}&deg;C</Typography>

                </CardActions>}
        </Card>
    )
}
const styles = {
    
    card: {
        maxWidth: 170,
        marginBottom: '10px'
    },
    media: {
    },
    cardIcon: {
        verticalAlign: 'middle',
    }
};


export default WeatherCard
