import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Button from '@material-ui/core/Button'

export class AddToFavourites extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Button onClick={this.props.addToFavourites} color='secondary'> <FontAwesomeIcon style={styles.icon} icon={faHeart} size='2x' /><span style={{marginLeft:'10px'}}>Add to favourites</span></Button>
            </div>
        )
    }

}
const styles = {
    myStyle: {
        color: 'yello'
    },
    icon: {
        verticalAlign: 'middle',
        margin: '0 auto'
    },
    container:{
        textAlign:'right',
        marginTop:'10px'
    }
}

export default AddToFavourites
