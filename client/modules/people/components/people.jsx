import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

// MATERIAL UI
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/more-vert'
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/navigation/close';
import ViewIcon from 'material-ui/svg-icons/av/playlist-add-check';

export default class People extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <Paper style={{ marginBottom: '10px', padding: '0 10px 10px 10px', display: 'flex' }}>
            <div style={{ flex: '3', paddingRight: '15px' }}>
              <TextField style={{ marginTop: '0' }}
                hintText="Add Person"
                floatingLabelText="Person"
                fullWidth={true}
                ref='person'
              />
              <small style={{ color: '#bbb' }}>***<i> Minimum of 3 characters</i></small>
            </div>

            <div style={{ marginTop: '24px', flex: '1' }}>
              <RaisedButton
                label="Add Person"
                primary={true}
                fullWidth={true}
              />
            </div>
          </Paper>
        </form>

        <Paper zDepth={1}>
          <List>
             <Subheader>Today</Subheader>
          </List>
        </Paper>
      </div>
    );
  }
}
