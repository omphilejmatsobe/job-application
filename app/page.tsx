'use client'

import Image from "next/image";
import { useState } from "react";

interface job
{
  tite:string;
  desription:string;

}

export default function Home() {
  const [jobList, setJobList] = useState([1, 2, 3, 4, 5,])
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans flex-col gap-5 py-20">
      <div className="w-full max-w-md mx-auto md:max-w-4xl justify-start items-start flex flex-col">
        <h1 className="text-3xl font-bold">
          Opportunities
        </h1>
        <h3  className="text-slate-500">
          {`Showing ${jobList.length} results`}
        </h3>
      </div>

        {
          jobList.map((job, idx)=>(
              <div key={"job_"+idx} className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl">
                <div className="md:flex w-full">
                  <div className="md:shrink-0">
                    <div className="w-full">
                      <img className="h-48 w-full md:h-full md:w-48" src={`/images/${idx+1}.jpg`}/>
                    </div>
                      
                  </div>
                  <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-black font-semibold">Social Media Assistant</div>
                      <h3 className="block mt-1 text-lg leading-tight font-medium text-slate-500  hover:underline">
                        Young Men Christians Association . Addis Ababa, Ethiopia
                      </h3>
                      <h2>

                      </h2>
                      <p className="mt-2 text-black">As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.
                      </p>
                      <div className="mt-5 flex flex-row gap-3">
                        <button type="button" className="text-body bg-green-100 text-green-400 box-border border hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-6 py-2.5 focus:outline-none">In Person</button>
                        <button type="button" className="text-body text-yellow-400 box-border border  hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-6 py-2.5 focus:outline-none">Education</button>
                        <button type="button" className="text-body text-purple-600 box-border border  hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-6 py-2.5 focus:outline-none">IT</button>

                      </div>
                  </div>
                </div>
              </div>
          ))
        }

    </div>
  );
}
