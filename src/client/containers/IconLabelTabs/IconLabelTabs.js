import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import HomeIcon from 'material-ui-icons/Home';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';

export default class IconLabelTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper className="c-tab">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<HomeIcon />} label="Home" component={Link} to="/" />
          <Tab icon={<FavoriteIcon />} label="About" component={Link} to="/about" />
          <Tab icon={<PersonPinIcon />} label="Profile" component={Link} to="/profile" />
        </Tabs>
      </Paper>
    );
  }
}
