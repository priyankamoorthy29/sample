import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import{connect} from "react-redux";
import {deleteDefectTask}from "../../actions/defectTaskAction";

 class DefectTaskItem extends Component{
onDeleteClick(dt_id){
this.props.deleteModuleTask(dt_id);
}

    render(){
        const{defect_task}=this.props;
        return(
            <div className="card mb-3 bg-light" id="board">

            <div className="card-header text-primary">
                ID: {defect_task.id}
            </div>
            <div className="card-body bg-light"  id="title">
                <h5 className="card-title">{defect_task.description}</h5>
                {/* <p className="card-text text-truncate ">
                    {project_task.projectName}
                </p> */}

                <Link 
                to = {`updateDefectTask/${defect_task.id}`} className="btn btn-success"
                >
                   Edit
                </Link>

                <button className="btn btn-danger ml-4"
                onClick={this.onDeleteClick.bind(this,defect_task.id )}
                >Delete
                </button>
            </div>
        </div>
        );
    }
    }

    DefectTaskItem.propTypes={
        deleteDefectTask:PropTypes.func.isRequired
    };


    export default  connect(
    null,
    {deleteDefectTask}
    )(DefectTaskItem); 
	