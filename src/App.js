
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Overview from './components/Overview';
import uniqid from 'uniqid';
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }
  addTask(event) {

    let name = event.target.name.value;
    let description = event.target.description.value;
    let priority = event.target.priority.value;
    let id = uniqid();
    let task = {name, description, priority,id}
    let tasks = this.state.tasks
    this.setState({ tasks: [...tasks, task] },() => {console.log(tasks)})
    event.preventDefault()
  }
  deleteTask(id,e){
      this.setState({
        tasks: this.state.tasks.filter(t => t.id != id)
      })
  }
  
  render(){
    
    return (

        <div id="app"style={{display: 'flex',flexDirection: 'column',alignItems: 'space-between',justifyContent: 'center'}}>
          <Header/>
          <h3>Your Daily Tasks- All in one place</h3>
          <form className='col-sm-4 addTask container' style={{flexGrow: '0'}} onSubmit={this.addTask}>
            <div className='row'>
            <div className="form-group">
              <label htmlFor="name" >Name</label>
              <input type="text"className="form-control" placeholder="Homework"id="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control"  id="description"/>
            </div>
            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select className="form-control" id="priority">
                <option value="1">High</option>
                <option value="2">Mid</option>
                <option value="3">Low</option>
              </select>
            </div>
            <button type="submit" style={{float: 'right', display: 'block',marginLeft: 'auto'}} className="btn btn-primary col-3 mt-4">Submit</button>
            </div>
          </form>
          <Overview tasks={this.state.tasks} deleteTask={this.deleteTask}/>
        
          
        </div>
    )
  }

  
}

export default App;
