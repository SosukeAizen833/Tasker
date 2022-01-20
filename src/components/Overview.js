import  React, { Component} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default class Overview extends Component {
    constructor(props) {
        super(props);
        
        this.renderTasks = this.renderTasks.bind(this);
    }
    completeTask(taskid){

    }
    renderTasks(tasks){
            let taskArray = [];
            let tableRowStyle = {display: 'flex',justifyContent:"space-evenly",alignItems: 'center',backgroundColor: "orange",padding:"10px 6px"}
            for(let task of tasks){
                const element =(
                <div>
                    <Accordion style={{backgroundColor: "#4d31cc",color: "#fff"}}key={task.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                        <Typography>{task.name}</Typography>
                        <Typography style={{marginLeft:"auto"}}><a>{task.priority == 1 ? "High" : task.priority==2 ? "Mid" : "Low"}</a></Typography>
                        <button style={{backgroundColor: "#4d31cc",border:"0px", marginLeft:"auto"}} onClick={(e)=>{this.props.deleteTask(task.id,e)}}><CheckCircleIcon/></button>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor: "white",color:"black"}}>
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
            padding: "10px"
        }
        return(
            <div style={{display:"block",margin: "0 auto", width: "100%"}}>
                <div style={taskTable}>
                    {this.renderTasks(this.props.tasks)}
                </div>
            </div>
    
        )
    }
}



