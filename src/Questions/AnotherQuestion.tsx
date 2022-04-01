import React from 'react';


function AnotherQuestion({answered}:{answered: (value:string)=>void}) {
  return (
      <div>
        select option:
        <select onChange={e => answered(e.target.value)}>
            <option>Some option</option>
            <option>Another option</option>
        </select>
      </div>
  );
}

export default AnotherQuestion;
