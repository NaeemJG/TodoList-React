import React, {useState} from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import orange from '@material-ui/core/colors/orange';



const ToDoItem = (props) => {
  const color = orange.A100;
  const [style, setStyle] = useState('')
  const changeOnMouseOver = () => {
    setStyle('#fdcb6e')
  }
  const changeOnMouseOut = () => {
    setStyle('')
  }
  return (
    <div>
      <ListItem>
          <ListItemText>
            {props.text}
          </ListItemText>
          <Checkbox color={color}/>
          <DeleteIcon style={{color: style}} onMouseOut={changeOnMouseOut} onMouseOver={changeOnMouseOver} className="listItem" onClick={() => {props.onChecked(props.id)}}/>
      </ListItem>
    </div>
    
  );
}

export default ToDoItem;
