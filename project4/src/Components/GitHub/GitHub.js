import {useLoaderData} from 'react-router-dom'

const GitHub = () => {
  const data = useLoaderData()
    /*const [data,setData] = useState([]);
    useEffect(()=>{
        fetchh('ttps://api.github.com/users/AbdulAhad4455')
        .then(res => res.json())
        .then(data => { console.log(data)
            setData(data)})
    },[])*/
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub Followers :{data.followers}
      <img src={data.avatar_url} alt='Git-Pic' width={300}/>
    </div>
  )
}

export default GitHub
 export const githubInfoLoader = async ()=> {
  const respons = await fetch('https://api.github.com/users/AbdulAhad4455')
  return respons.json()
 }