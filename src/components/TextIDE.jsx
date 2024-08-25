import React from 'react'
import { useForm } from 'react-hook-form'
import RTE from './RTE'

function TextIDE() {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className=''>
      <div className='relative top-12 z-2 w-[31.5vw] h-[1px] bg-black' />
      <div className='relative top-12 left-12'>
        <div className='flex relative mt-8'>
          <label className='flex text-xl font-semibold' htmlFor="title">Title</label>
        </div>
        <input className='relative h-8 mt-4 bg-[#fcfbfb] shadow w-[100%] bordere' id='title' type="text" />
      </div>
      <h2 className='relative top-20 left-12 font-semibold text-xl'>Content</h2>
      <form className='w-[100%] relative top-24 left-12' onSubmit={handleSubmit(onSubmit)}>
        <RTE
          name="myEditor"
          control={control}
          defaultvalue="<p></p>"
        />
      </form>
    </div>
  )
}

export default TextIDE