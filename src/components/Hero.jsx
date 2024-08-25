import React, { useEffect, useState } from 'react'
import Button from './Button'
import { fetchData } from '../fetchData'
import Card from './Card'
import { IoIosArrowUp } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Input from './Input';
import CardTwoFoot from './CardTwoFoot';
import TextIDE from './TextIDE';
import Collapsible from './Collapse';
import Boards from './Board';


function Hero() {

  const [data, setData] = useState(null)


  useEffect(() => {
    async function callData() {
      try {
        const json = await fetchData()
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    callData();

  }, [])





  return (
    <>
      <div className='flex'>
        <Boards className="relative"
          title={`Journey Board`}
          children={<ul className="list-disc pl-4">
            <li className="font-semibold relative right-4">{data ? <p>{data.tasks[0].task_title}</p> : <p>Data Not Fetched</p>}</li>
            <li className="mt-2"> {data ? <p>{data.tasks[0].assets[0].asset_title}</p> : <p>Fetching Data</p>} </li>
            <li> {data ? <p>{data.tasks[0].assets[1].asset_title}</p> : <p>Fetching Data</p>} </li>
            <li> {data ? <p>{data.tasks[0].assets[2].asset_title}</p> : <p>Fetching Data</p>} </li>
            <li> {data ? <p>{data.tasks[0].assets[3].asset_title}</p> : <p>Fetching Data</p>} </li>
          </ul>}
        />
        <div className="relative w-60 flex text-wrap flex-wrap z-10 left-[95vw]">
          <div className="w-[40%] bg-black items-center flex flex-col">
            <h2 className="text-2xl p-6 shadow-2xl rounded-l-md top-4 flex flex-col items-center w-[2vw] text-white bg-black absolute left-[-60px]">
              <RxCross1 className='relative bottom-3' />
              {Array.from("Notice Board").map((char, index) => (
                <span
                  key={index}
                  className="block"
                  style={char === 'B' ? { marginTop: '30px' } : {}}
                >
                  {char}
                </span>
              ))}
            </h2>
            <div className='bg-white shadow-2xl rounded-l-md z-[-1] w-40 h-[54.6vh] top-4 right-24 absolute'></div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex w-[75vw] relative top-8 justify-between'>
          <div>
            {data ? <h1 className='relative text-[#0029ff] text-2xl font-bold'>{data.title}</h1> : <p>Fetching Data</p>}
          </div>
          <Button text={"Submit task"} />
        </div>
        <div className='w-[75%] relative top-20  pl-6 pt-6 h-40 bg-[#e9ecef]' >
          <div className='text-xl font-bold pb-4'>
            {data ? <p>{data.tasks[0].task_title}</p> : <p>Fetching Data</p>}
          </div>
          <div className=''>
            {data ? <p>{data.tasks[0].task_description}</p> : <p>Fetching Data</p>}
          </div>
        </div>
      </div>
      <div className='relative top-28 flex w-[80%] justify-evenly left-56'>
        <Card
          title={data ? <span className='relative left-8'>{data.tasks[0].assets[0].asset_title}</span> : <span>Fetching Data</span>}
          desc={data ? <span>{data.tasks[0].assets[0].asset_description}</span> : <span>Fetching Data</span>}
          content={data ? (
            <iframe
              className='relative top-16 w-full h-80'
              src={data.tasks[0].assets[0].asset_content}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          ) : ''}

        />
        <Card
          title={data ? <span className='relative left-24'>{data.tasks[0].assets[1].asset_title}</span> : <span>Fetching Data</span>}
          desc={data ? <span className='relative pl-2'>{data.tasks[0].assets[1].asset_description}</span> : <span>Fetching Data</span>}
          content={data ? (
            <div>
              <div className='bg-[#fdfdf1] w-[100%] flex items-center h-10 relative top-8'>
                <IoIosArrowUp className='relative left-2' />
                <h2 className='text-xl font-bold relative left-6'>Thread A</h2>
              </div>
              <div className='flex w-[90%] left-4 relative gap-3 justify-evenly'>
                <Input text={'Sub thread 1'} />
                <Input text={'Sub Interpretation 1'} />
              </div>
              <CardTwoFoot />
            </div>
          ) : ''}

        />
      </div>
      <div className='relative top-28 flex w-[80%] justify-evenly left-56 mt-12'>
        <Card
          title={data ? <span className='relative left-16'>{data.tasks[0].assets[2].asset_title}</span> : <span>Fetching Data</span>}
          desc={data ? <span className='relative pl-2'>{data.tasks[0].assets[2].asset_description}</span> : <span>Fetching Data</span>}
          content={data ? (
            <div className='w-[80%] h-40'>
              <TextIDE />
            </div>
          ) : ''}

        />
        <Card

          title={data ? <span className='relative left-28'>{data.tasks[0].assets[3].asset_title}</span> : <span>Fetching Data</span>}
          desc={data ? <span className=''>{data.tasks[0].assets[3].asset_description}</span> : <span>Fetching Data</span>}
          content={data ? (
            <>
              <div className='relative top-8 w-[120%]'>
                <Collapsible
                  className={`relative text-semibold text-xl bg-[#f2f2f2]`}
                  title={'Introduction'}
                  children={'The 4s Method, How to bring a idea into progress'}
                  btn={'See More'} />
              </div>
              <div className='relative top-8 w-[120%]'>
                <Collapsible
                  className={`relative text-semibold text-xl `}
                  title={'Thread A'}
                  children={'How arwe you going ? to develop strategy ? which method are are you going to use to develop strategy ? Waht if the project is lengthy ?'}
                  btn={'See More'} />
              </div>
              <div className='w-[80%] h-10 border border-solid border-2 mt-12 ml-12 flex items-center rounded'>
                <h3 className='text-xl font-semibold pl-2'>Example 1</h3>
              </div>
              <p className='relative top-6 left-16'>You have a concept, How willyou put into progress?</p>
            </>
          ) : ''}

        />
      </div>
    </>
  )
}

export default Hero