import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

// MATERIAL UI
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'react-avatar';
// import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/navigation/close';
import ViewIcon from 'material-ui/svg-icons/av/playlist-add-check';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MenuIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = () => (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem primaryText="View Task" leftIcon={<ViewIcon />}> </MenuItem>
        <MenuItem primaryText="Edit" leftIcon={<EditIcon />}> </MenuItem>
        <MenuItem primaryText="Delete" leftIcon={<DeleteIcon />}></MenuItem>
    </IconMenu>
);


export default class People extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      field: '',
      listData: this.props.people,
      data: {},
      openPerson: false,
      openDeleteDialog: false
    };

  }

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
            {this.state.listData.map((data, index) => (
              <ListItem key={index}
                leftAvatar={<Avatar name={data.fullname} size={45} round={true} />}
                primaryText={data.fullname}
                secondaryText={data.secondaryText}
                 rightIconButton={rightIconMenu()}
              />
            ))}
          </List>
        </Paper>
      </div>
    );
  }
}
