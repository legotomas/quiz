import React from 'react';


function SomeQuestion({answered}:{answered: (value:string)=>void}) {
  return (
      <div>
        set text: <input type="text" onChange={e => answered(e.target.value)}/>
      </div>
  );
}

export default SomeQuestion;
