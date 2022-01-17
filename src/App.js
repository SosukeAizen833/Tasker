
import React,{Component} from 'react';
import Header from './components/Header';
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks: [],
    }
    this.addTask = this.addTask.bind(this)


  }
  addTask(task) {
    this.setState({ tasks: this.state.tasks.push(task) });
  }
  render(){
    return (

        <div>
          <Header/>
          <form className='col-sm-4 mt-4 addTask container'>
            <div className='row'>
            <div className="form-group">
              <label for="name" >Name</label>
              <input type="text" className="form-control" placeholder="Homework"id="name"/>
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <textarea className="form-control" id="description"/>
            </div>
            <div className="form-group">
              <label for="priority">Priority</label>
              <select className="form-control" id="priority">
                <option value="1">High</option>
                <option value="2">Mid</option>
                <option value="3">Low</option>
              </select>
            </div>
            <button type="submit" style={{float: 'right', display: 'block',marginLeft: 'auto'}} className="btn btn-primary col-3 mt-4">Submit</button>
            </div>
          </form>

        </div>
    )
  }

  
}

export default App;
