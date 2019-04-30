import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import{connect} from "react-redux";
import {deleteModuleTask}from "../../actions/moduleTaskAction";

 class ModuleTaskItem extends Component{
onDeleteClick(mt_id){
this.props.deleteModuleTask(mt_id);
}

    render(){
        const{module_task}=this.props;
        return(
            <div className="card mb-3 bg-light" id="board">

            <div className="card-header text-primary">
                ID: {module_task.id}
            </div>
            <div className="card-body bg-light"  id="title">
                <h5 className="card-title">{module_task.moduleName}</h5>
                {/* <p className="card-text text-truncate ">
                    {project_task.projectName}
                </p> */}

                <Link 
                to = {`updateModuleTask/${module_task.id}`} className="btn btn-success"
                >
                   Edit
                </Link>

                <button className="btn btn-danger ml-4"
                onClick={this.onDeleteClick.bind(this,module_task.id )}
                >Delete
                </button>
            </div>
        </div>
        );
    }
    }

    ModuleTaskItem.propTypes={
        deleteModuleTask:PropTypes.func.isRequired
    };


    export default  connect(
    null,
    {deleteModuleTask}
    )(ModuleTaskItem); 