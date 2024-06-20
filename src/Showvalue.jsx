import React from 'react'


export default function showvalue({info}){

  let comm =info.map((e)=> {
     return (<ul className='w-50 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-white dark:text-white'> 
      {e.map((e2,i2) => {
      return  i2 === 0? <h1 className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 text-2xl'> {e2}</h1> : <li key={i2} className='text-sm w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>{e2}</li> })
     }</ul>)
  })
  
  return (
    
    <div className='result'>
          {comm}
    </div>
  )
}
