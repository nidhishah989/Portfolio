import React from 'react';


const Skill = ({ icon, label,bkcolor }) => {
  
  
  return(
  <div className="col col-lg-2 text-center">
    <div className="p-md-3">
      <div className="btn custom-button" style={{backgroundColor:bkcolor}}>
        <span>
          {icon}
          {label && <b>{label}</b>}
        </span>
      </div>
    </div>
  </div>
);

};

export default Skill;
