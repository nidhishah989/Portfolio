import {react} from 'react';
import "./projects.css";
import yimg from '../../style/meetsy_app.png';


const Project = ({gitrepoproject}) =>{

    console.log(gitrepoproject)
    console.log(gitrepoproject.prjimg)

    return (
        <div className='col-md-4 col-12 my-4'>
            <div className='card text-center h-100 shadow-lg projectcard'>
                <div className="card-header projecttitle"><h5>{gitrepoproject.title}</h5></div>
                {/* Carosole trial */}
                {/* Carosole trial */}
                <div className='projectpic'>
                <img className="projectimg" src={gitrepoproject.prjimg} alt={gitrepoproject.title}></img>
                </div>
                <div className ="card-body projectbody p-auto d-flex align-items-center">
                    {/* <p className="card-text"><small><a>GitHub Link</a></small></p> */}
                    {/* <h4 class="card-title">{gitrepoproject.title}</h4> */}
                    <p className='card-text'>{gitrepoproject.description}</p>
                </div>
                <ul class="list-group projecttoollist">
                <li class="list-group-item d-flex flex-wrap g-2" >
                    { 
                        
                        gitrepoproject.tools.map((tool,index) => {
                            // return <span className='badge bg-light text-dark d-flex align-items-center' key={index}>
                            //     {tool.ICON && <div dangerouslySetInnerHTML={{ __html: tool.ICON }} className="mr-1" style={{ height: '1em' }} />}
                            //     {tool.tool}
                            //     </span>

                            return <button className='btn btn-labeled d-flex align-items-center p-0 mx-1 my-1 toolkey' key={index}>
                            {tool.ICON && (
                              <span className='rounded-start text-dark toolsymbol'>
                                <i dangerouslySetInnerHTML={{ __html: tool.ICON }} className="fa-solid px-1" style={{ height: '1em' }} />
                              </span>
                            )}
                            <span style={{ padding: '5px'}}>{tool.tool}</span>
                          </button>
                        })
                        
                    }
                    </li>

                </ul>
                <div className="card-footer projectfoot d-flex">
                    <a href={gitrepoproject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <button className='btn btn-large btn-warning d-flex align-items-center'>
                        <span className='gitlogo'><i className="bi bi-github"></i></span>
                        <span className='mx-2 githublink'> GitHub </span>
                        <span className='pb-1'><i className="bi bi-box-arrow-up-right"></i></span>
                    </button>
                    </a>
                    {gitrepoproject.demoUrl && <a href={gitrepoproject.demoUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <button className='btn btn-large btn-danger d-flex align-items-center'>
                        <span className='gitlogo'><i class="bi bi-broadcast"></i></span>
                        <span className='mx-2 githublink'> Live Demo </span>
                        <span className='pb-1'><i className="bi bi-box-arrow-up-right"></i></span>
                    </button>
                    </a>}
                </div>
            </div>
        </div>
    )



};

export default Project;