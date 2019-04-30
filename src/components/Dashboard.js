import React from 'react'
export default function Navbar() {
    
        return(
            <div className="sidenav">

            <h id="heading">DefectTracker</h>
            <br/>
            <div className="project">
            <h id="heading">Projects</h>
            </div>
            <a href="/addProjectTask" id="add">  <i className="fa fa-edit"> Add Project  </i></a>
            <a href="/"  id="list"><i className="fa fa-list">List Project  </i></a>
            <div  className="modules">
            <h id="heading">Modules</h>
            </div>

            <a href="/addModuleTask" id="add"><i className="fa fa-edit"> Add Modules  </i></a>
             <a href="/module"  id="list"><i className="fa fa-list"> List Modules  </i></a>
             <div className="defect">
             <h id="heading">Defects</h>
             </div>
             <a href="/addDefectTask" id="add"><i className="fa fa-edit">Add Defect  </i></a>
             <a href="/defect"  id="list"><i className="fa fa-list">List Defect  </i></a>
          </div>
          
        )
    
}
 
 