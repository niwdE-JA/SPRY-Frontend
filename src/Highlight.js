import React from 'react'

const Highlight=({message, value})=>{

  if (value===''){
    return (
    <>{message}</>
    )
  }
  let split_message = message.toLowerCase().split(value.toLowerCase())
  console.log(split_message)
  return (
    <>
        {
        split_message.map((user, i)=>{
            return(
                <>
                  <span>{ split_message[i]}</span>
                  {
                  (i !== (split_message.length - 1) )?
                  <span className="highlight-alt">{ value}</span>
                  :<></>
                  }
                  
                </>  
            )
        }
        )}
    </>
  );
}

export default Highlight