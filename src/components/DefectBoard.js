import React,{Component}from 'react';
import {Link} from "react-router-dom";
import DefectTaskItem from './DefectTask/DefectTaskItem';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../actions/defectTaskAction";




 class DefectBoard extends Component{

     componentDidMount(){
         this.props.getBacklog();
     }
    render(){
        const{defect_tasks}=this.props.defect_tasks
        let BoardContent;
        let todoItems=[]
       

const BoardAlgorithm = defect_tasks => {
    if(defect_tasks.length < 1){
        return (
           < div className="alert alert-info text-center" role="alert"
           No Module Tasks on tghis Board
           ></div>
        );
    } else {
        const tasks= defect_tasks.map(defect_task =>(
            <DefectTaskItem key={defect_task.state} defect_task={defect_task}/>
        ));

        for(let i=0; i<tasks.length; i++){
            if(tasks[i].props.defect_task!==""){
                todoItems.push(tasks[i])
                }
                                 
        }

        return(
            <React.Fragment>

<div className="container">
            <div className="row">
              
                            <h3>Defect List</h3>
                     
                  {todoItems}                    
                </div>

              
            </div>
     
            </React.Fragment>
        )
    }
};

BoardContent= BoardAlgorithm(defect_tasks);

        return(
    <div className="container">
        <Link to="/addDefectTask" className="btn btn-success mb-3" id="btncreate">
            <i className="fas fa-plus-circle"> Create Defect </i>
        </Link>
        <br />
        <hr />
        {BoardContent}
       
    </div>

        )
       
    }
}
DefectBoard.propTypes={
    getBacklog:PropTypes.func.isRequired,
defect_tasks:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
defect_tasks:state.defect_task
})


export default connect(
    mapStateToProps,
    {getBacklog}
    )(DefectBoard); 