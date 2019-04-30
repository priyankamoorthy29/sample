import React,{Component}from 'react';
import {Link} from "react-router-dom";
import ModuleTaskItem from './ModuleTask/ModuleTaskItem';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../actions/moduleTaskAction";




 class ModuleBoard extends Component{

     componentDidMount(){
         this.props.getBacklog();
     }
    render(){
        const{module_tasks}=this.props.module_tasks
        let BoardContent;
        let todoItems=[]
       

const BoardAlgorithm = module_tasks => {
    if(module_tasks.length < 1){
        return (
           < div className="alert alert-info text-center" role="alert"
           No Module Tasks on tghis Board
           ></div>
        );
    } else {
        const tasks= module_tasks.map(module_task =>(
            <ModuleTaskItem key={module_task.id} module_task={module_task}/>
        ));

        for(let i=0; i<tasks.length; i++){
            if(tasks[i].props.module_task.moduleName!==""){
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
                            <h3>Module List</h3>
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

BoardContent= BoardAlgorithm(module_tasks);

        return(
    <div className="container">
        <Link to="/addModuleTask" className="btn btn-success mb-3" id="btncreate">
            <i className="fas fa-plus-circle"> Create Module </i>
        </Link>
        <br />
        <hr />
        {BoardContent}
       
    </div>

        )
       
    }
}
ModuleBoard.propTypes={
    getBacklog:PropTypes.func.isRequired,
module_tasks:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
module_tasks:state.module_task
})


export default connect(
    mapStateToProps,
    {getBacklog}
    )(ModuleBoard); 