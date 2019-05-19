import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class MapCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
          <Card className={classes.card}>
              <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        <AirportShuttleIcon/>
                    </Avatar>
                }
                action={
                    <IconButton>
{/*
                        <MoreVertIcon />
*/}
                    </IconButton>
                }
                title="서현역 -> 판교역"
                subheader="21.5km, 56분, 총 비용 5600원"
              />
              <CardMedia
                className={classes.media}
                image="https://cl.ly/924c75645b8c/map_sample.png"
                title="Paella dish"
              />
              <CardContent>
                  <Typography component="p">
                      [경로 1]
                  </Typography>
                  <Typography component="p">
                      출발지
                  </Typography>
                  <Typography component="p">
                      경유지
                  </Typography>
                  <Typography component="p">
                      목적지
                  </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
{/*
                  <IconButton aria-label="Add to favorites">
                      <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="Share">
                      <ShareIcon />
                  </IconButton>
*/}
                  <IconButton
                    className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                  >
                      <ExpandMoreIcon />
                  </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                      <Typography paragraph>상세경로:</Typography>
                      <Typography paragraph>
                          설명1
                      </Typography>
                      <Typography paragraph>
                          설명2
                      </Typography>
                      <Typography paragraph>
                          설명3
                      </Typography>
                  </CardContent>
              </Collapse>
          </Card>
        );
    }
}

MapCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapCard);