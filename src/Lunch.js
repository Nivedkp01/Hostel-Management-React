import React from 'react'
import './Lunch.css'
function Lunch() {
    const items=[]

    for(let i=100;i<=110;i++)
    {
        items.push(<button className='room'>{i}</button>)
    }
for(let i=200;i<=210;i++)
{
    items.push(<button className='room'>{i}</button>)
}
for(let i=300;i<=310;i++)
{
    items.push(<button className='room'>{i}</button>)
}
  return (
    <div>
      <h1 className='he'>It's Lunch Time Guyzz😍</h1>
      {items}
    </div>
  )
}

export default Lunch
