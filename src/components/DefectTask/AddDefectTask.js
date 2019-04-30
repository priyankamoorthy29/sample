import React,{Component}from 'react';
//import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";
import {addDefectTask} from "../../actions/defectTaskAction";



 class AddDefectTask extends Component{
     constructor(){
         super();
         this.state={
             
            description:"",
            steptocreate:"",
            severitiy:"",
            priority:"",
            defecttype:"",
            enteredby:"",
            entereddate:"",
            status:"",
            assigneto:"",
            fixedby:"",
            fixeddate:"",
            avilablein:"",
            comments:"",
           
           
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
    const newDefectTask={
        description:this.state.description,
        steptocreate:this.state.steptocreate,
        severitiy:this.state.severitiy,
        priority:this.state.priority,
        defecttype:this.state.defecttype,
        enteredby:this.state.enteredby,
        entereddate:this.state.entereddate,
        status:this.state.status,
        assigneto:this.state.assigneto,
        fixedby:this.state.fixedby,
        fixeddate:this.state.fixeddate,
        avilablein:this.state.avilablein,
        comments:this.state.comments,

        

    };
    console.log(newDefectTask);
    this.props.addDefectTask(newDefectTask, this.props.history)
}

    render(){
        const{errors}=this.state;
        return(
<div className="addDefectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-10 m-auto">
                    {/* <Link to="/" className="btn btn-light">
                        Back to Board
                    </Link> */}
                    <h4 className="display-4 text-center"  id="addHeading">Add Defect</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                           
                            className="form-control form-control-lg"
                            name="description" 
                            value={this.state.description}
                            placeholder="description " 
                            onChange={this.onChange}
                            />
                             <input type="text" 
                            
                            className="form-control form-control-lg"
                            name="steptocreate" 
                            value={this.state.steptocreate}
                            placeholder="steptocreate " 
                            onChange={this.onChange}
                            />
                             <input type="text" 
                          
                            className="form-control form-control-lg"
                            name="severitiy" 
                            value={this.state.severitiy}
                            placeholder="severitiy " 
                            onChange={this.onChange}
                            />
                             <input type="text" 
                            // className={classnames("form-control form-control-lg",{
                            //     "is-invalid":errors.summary
                            // } )}
                            className="form-control form-control-lg"
                            name="priority" 
                            value={this.state.priority}
                            placeholder="priority " 
                            onChange={this.onChange}
                            />
                             <input type="date" 
                           
                            className="form-control form-control-lg"
                            name="defecttype" 
                            value={this.state.defecttype}
                            placeholder="defecttype " 
                            onChange={this.onChange}
                            />
                             <input type="text" 
                         
                            className="form-control form-control-lg"
                            name="enteredby" 
                            value={this.state.enteredby}
                            placeholder="enteredby " 
                            onChange={this.onChange}
                            />
                             <input type="date" 
                           
                            className="form-control form-control-lg"
                            name="entereddate" 
                            value={this.state.entereddate}
                            placeholder="entereddate " 
                            onChange={this.onChange}
                            />
                             <input type="text" 
                            
                            className="form-control form-control-lg"
                            name="status" 
                            value={this.state.status}
                            placeholder="status " 
                            onChange={this.onChange}
                            />
                             <input type="text" 
                           
                            className="form-control form-control-lg"
                            name="assigneto" 
                            value={this.state.assigneto}
                            placeholder="assigneto " 
                            onChange={this.onChange}
                            />
                             <input type="text" 
                           
                            className="form-control form-control-lg"
                            name="fixedby" 
                            value={this.state.fixedby}
                            placeholder="fixedby " 
                            onChange={this.onChange}
                            />
                             <input type="date" 
                           
                            className="form-control form-control-lg"
                            name="fixeddate" 
                            value={this.state.fixeddate}
                            placeholder="fixeddate " 
                            onChange={this.onChange}
                            />
                             <input type="text" 
                           
                            className="form-control form-control-lg"
                            name="avilablein" 
                            value={this.state.avilablein}
                            placeholder="avilablein " 
                            onChange={this.onChange}
                            />
                             <input type="text" 
                            // className={classnames("form-control form-control-lg",{
                            //     "is-invalid":errors.summary
                            // } )}
                            className="form-control form-control-lg"
                            name="comments" 
                            value={this.state.comments}
                            placeholder="comments " 
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

AddDefectTask.propTypes={
    addDefectTask:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors:state.errors
})

export default connect(mapStateToProps, {addDefectTask}) (AddDefectTask);

