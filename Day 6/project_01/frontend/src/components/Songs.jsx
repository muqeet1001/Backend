import React from 'react'
import play from '../assets/play-line.svg'
import pause from '../assets/pause-line.svg'
function Songs({songsData}) { 
  return (
     <div className="songs w-full  mt-10 ">
          <h1 className='text-2xl font-bold'>Recommanded Songs</h1>
          <div className="son flex flex-col gap-4 ">
            {songsData.map((song,index)=>{
                return(
                 <div key={index} className='border rounded bg-amber-50 flex items-center justify-between'>
                  <div className="a">
                      <h3 className='text-xl font-medium ml-4'>{song.title}</h3>
                   <p className='ml-4'>{song.artist}</p>
                  </div>
                  <div className="button flex gap-4">
                     <img src={play} className =" w-10 h-10 cursor-pointer rounded-full hover:scale-110 active:scale-95 transition-transform duration-200 shadow-md hover:shadow-lg ml-5"alt="" />
                     <img className='w-10 h-10 cursor-pointer rounded-full hover:scale-110 active:scale-95 transition-transform duration-200 shadow-md hover:shadow-lg mr-10' src={pause} alt="" />
                  </div>
                 </div>
                )
            })}
          </div>
     </div>
  )
}

export default Songs