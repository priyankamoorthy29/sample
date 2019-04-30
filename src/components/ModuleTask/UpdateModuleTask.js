import React,{Component}from 'react';
//import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";

import {getModuleTask, addModuleTask} from "../../actions/moduleTaskAction";

 class UpdateModuleTask extends Component{

constructor(){
    super();
    this.state={
             id:"",
             moduleName:"",
           
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}    


componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({errors: nextProps.errors});
    }
const{ id,moduleName} = nextProps.module_task;

this.setState({
    id,
  moduleName,
   
});

}

componentDidMount(){
    const {mt_id} = this.props.match.params;
    this.props.getModuleTask(mt_id);
}

onSubmit(e){
e.preventDefault()
const updatedTask = {
        id:this.state.id,
        moduleName:this.state.moduleName,
       
};

this.props.addModuleTask(updatedTask, this.props.history);
}

onChange(e){
    this.setState({[e.target.name]:e.target.value})
}

    render(){
        const {errors}= this.state;
        return(
<div className="addModuleTask">
        <div className="container">
            <div className="row">
                <div className="col-md-10 m-auto">
                {/* <Link to="/" className="btn btn-light">
                        Back to Board
                </Link> */}
                    <h4 className="display-4 text-center"  id="updateHeading"> Update Module </h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            name="moduleId" 
                            placeholder="Module Id" disabled

                           
                            />
                        </div>
                        <div className="form-group">
                            <input
                            className="form-control form-control-lg" 
                            placeholder="moduleName" 
                            name="moduleName"
                            value={this.state.moduleName}
                            onChange={this.onChange}
                            />
                        </div>
                       
                        <input type="submit" className="btn btn-success btn-block mt-4" id="submit" />
                    </form>
                </div>
            </div>
        </div>
    </div>

        )
    }
}


UpdateModuleTask.propTypes={
    module_task:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    getModuleTask:PropTypes.func.isRequired,
    addModuleTask:PropTypes.func.isRequired
    
};

const mapStateToProps = state => ({
    module_task:state.module_task.module_task,
    errors:state.errors
});

export default connect(
    mapStateToProps,
     {getModuleTask, addModuleTask}
     ) (UpdateModuleTask);

