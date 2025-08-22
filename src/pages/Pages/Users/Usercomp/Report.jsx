import React from 'react'

const report = [
    {price:"$8,098.32", type:'Payment'},
    {price:"$901,256.01", type:'Loan income'},
    {price:"$987,256.32", type:'Gross amount'},
    {price:"$564,256.01", type:'Jobs create'},
]

const Report = () => {
  return (
    <div>
      {
        report.map(({price,type})=>(
            <div className=''>
                <h1>{price}</h1>
                <p>{type}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Report
