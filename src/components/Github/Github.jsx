import React , {useEffect, useState} from "react";

function Github(){
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/RishiRaj0712')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <>
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>Github Repos: {data.public_repos}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </>
  )
}

export default Github