import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const TeacherDetails = () => {
  //!1.yol navigate yolladığı path e id yi gömerek yolladı, burada da useParams la id yi çektik*******

  //   const { id } = useParams();
   // path ile yollanan id yi useParams hook uyla yakaladık
  //   const [kisi, setKisi] = useState({});


  //   useEffect(() => {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then((res) => setKisi(res.data))
  //   }, [id]);

  //!2.yol
  //! useLocation.//  navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
  const {
    state: { kisi },
  } = useLocation();

  // console.log(kisi);

  const navigate=useNavigate()

  return (
    <div className="text-center">
      <img
        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${kisi.id}`}
        alt=""
      />
      <h3>{kisi.name} </h3>
      <h2>{kisi.email} </h2>
      <h5>{kisi.website} </h5>
      <h5>{kisi.phone} </h5>

      <div>
        <button onClick={()=>navigate(-1)} className='btn btn-success'>GO BACK</button>
        <button onClick={()=>navigate("/")} className='btn btn-warning'>GO HOME</button>
      </div>
    </div>
  );
}

export default TeacherDetails