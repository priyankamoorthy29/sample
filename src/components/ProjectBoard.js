import React,{Component}from 'react';
import {Link} from "react-router-dom";
import ProjectTaskItem from './ProjectTask/ProjectTaskItem';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../actions/projectTaskActions";




 class ProjectBoard extends Component{

     componentDidMount(){
         this.props.getBacklog();
     }
    render(){
        const{project_tasks}=this.props.project_tasks
        let BoardContent;
        let todoItems=[]
       

const BoardAlgorithm = project_tasks => {
    if(project_tasks.length < 1){
        return (
           < div className="alert alert-info text-center" role="alert"
           No Project Tasks on tghis Board
           ></div>
        );
    } else {
        const tasks= project_tasks.map(project_task =>(
            <ProjectTaskItem key={project_task.id} project_task={project_task}/>
        ));

        for(let i=0; i<tasks.length; i++){
            if(tasks[i].props.project_task.projectName!==""){
                todoItems.push(tasks[i])
                }
                
                           
        }

        return(
            <React.Fragment>

<div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card text-center mb-4"  id="card">
                        <div className="card-header bg-dark text-white">
                            <h3>Project List</h3>
                        </div>
                    </div>
                  {todoItems}                    
                </div>

              
            </div>
        </div>
            </React.Fragment>
        )
    }
};

BoardContent= BoardAlgorithm(project_tasks);

        return(
    <div className="container">
        <Link to="/addProjectTask" className="btn btn-success mb-3" id="btncreate">
            <i className="fas fa-plus-circle"> Create Project </i>
        </Link>
        <br />
        <hr />
        {BoardContent}
       
    </div>

        )
       
    }
}

ProjectBoard.propTypes={
    getBacklog:PropTypes.func.isRequired,
    project_tasks:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
project_tasks:state.project_task
})


export default connect(
    mapStateToProps,
    {getBacklog}
    )(ProjectBoard); 