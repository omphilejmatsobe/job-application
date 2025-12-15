
export async function getJobsData():Promise<[]>
{
    let output = ""
    try{
        const data = await fetch("https://akil-backend.onrender.com/opportunities/search")
        output = await data.text()

    }
    catch(error)
    {
        console.error("Data fetching not successful", error)
    }

    const obj:[] = JSON.parse(output)
    console.log(obj)
    return obj.data
}