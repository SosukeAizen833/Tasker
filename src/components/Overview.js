import  React, { Component} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default class Overview extends Component {
    constructor(props) {
        super(props);
        
        this.renderTasks = this.renderTasks.bind(this);
    }
    renderTasks(tasks){
            let taskArray = [];
            let tableRowStyle = {display: 'flex',justifyContent:"space-evenly",alignItems: 'center',backgroundColor: "orange",padding:"10px 6px"}
            for(let task of tasks){
                const element =(
                <div>
                    <Accordion style={{backgroundColor: "#DE9D90"}} key={task.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                        <Typography>{task.name}</Typography>
                        <Typography style={{marginLeft:"auto"}}>{task.priority}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {task.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                            
                </div>
                                
                )
                
                taskArray.push(element);
            }

            return taskArray;
      
    }
    render(){
        let taskTable = {
            display: 'flex',
            flexDirection: 'column',
            gap: "10px",
            width:"70%",
            padding: "10px"
        }
        return(
            <div style={taskTable}>
                {this.renderTasks(this.props.tasks)}
            </div>
    
        )
    }
}



