import React,{Component}from 'react';
//import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";
import {addModuleTask} from "../../actions/moduleTaskAction";



 class AddModuleTask extends Component{
     constructor(){
         super();
         this.state={
            moduleName:"",
           
           //  errors:{ }
         };
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
     }

     componentWillReceiveProps(nextProps){
if(nextProps.errors){
    this.setState({errors:nextProps.errors})
}
     }

onChange(e){
this.setState({[e.target.name]:e.target.value})
}

onSubmit(e){
    e.preventDefault();
    const newModuleTask={
        moduleName:this.state.moduleName,
      

    };
    console.log(newModuleTask);
    this.props.addModuleTask(newModuleTask, this.props.history)
}

    render(){
        const{errors}=this.state;
        return(
<div className="addModuleTask">
        <div className="container">
            <div className="row">
                <div className="col-md-10 m-auto">
                    {/* <Link to="/" className="btn btn-light">
                        Back to Board
                    </Link> */}
                    <h4 className="display-4 text-center"  id="addHeading">Add Module</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            // className={classnames("form-control form-control-lg",{
                            //     "is-invalid":errors.summary
                            // } )}
                            className="form-control form-control-lg"
                            name="moduleName" 
                            value={this.state.moduleName}
                            placeholder="module Name " 
                            onChange={this.onChange}
                            />
                            {/* <p>{errors.summary}</p> */}

                            {/* {
                              errors.summary && (
                                  <div className="invalid-feedback"></div>
                              )
                            } */}
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

AddModuleTask.propTypes={
    addModuleTask:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors:state.errors
})

export default connect(mapStateToProps, {addModuleTask}) (AddModuleTask);