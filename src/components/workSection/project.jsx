import {react} from 'react';
import "./projects.css";

const Project = ({gitrepoproject}) =>{

    console.log(gitrepoproject)

    return (
        <div className='col-md-4 col-12 projectcard my-4'>
            <div className='card text-center h-100 shadow-lg projectcard'>
                <div className="card-header projecttitle"><h5>{gitrepoproject.title}</h5></div>
                <div className ="card-body">
                    <p className='card-text'>{gitrepoproject.description}</p>
                </div>
                <ul class="list-group">
                <li class="list-group-item d-flex flex-wrap g-2" >
                    { 
                        
                        gitrepoproject.tools.map((tool,index) => {
                            // return <span className='badge bg-light text-dark d-flex align-items-center' key={index}>
                            //     {tool.ICON && <div dangerouslySetInnerHTML={{ __html: tool.ICON }} className="mr-1" style={{ height: '1em' }} />}
                            //     {tool.tool}
                            //     </span>

                            return <button className='btn btn-labeled btn-primary d-flex align-items-center p-0 mx-1 my-1' key={index} disabled>
                            {tool.ICON && (
                              <span style={{ padding: '5px', background:'red' }} className='rounded-start text-dark'>
                                <i dangerouslySetInnerHTML={{ __html: tool.ICON }} className="fa-solid px-1" style={{ height: '1em' }} />
                              </span>
                            )}
                            <span style={{ padding: '5px'}}>{tool.tool}</span>
                          </button>
                        })
                        
                    }
                    </li>

                </ul>
                <div className="card-footer">
                    <a href={gitrepoproject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-large btn-primary d-flex align-items-center'>
                        <span className='gitlogo'><i className="bi bi-github"></i></span>
                        <span className='mx-2 githublink'> GitHub </span>
                        <span className='pb-1'><i className="bi bi-box-arrow-up-right"></i></span>
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )



};

export default Project;