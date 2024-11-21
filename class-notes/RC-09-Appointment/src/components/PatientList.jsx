import React from 'react'
import {FaTimesCircle} from "react-icons/fa"

const PatientList = ({hastalar,setPatient}) => {
  return (
    <div>
      {
        hastalar.map((hasta)=>(

          <div className={hasta.isDone===true ? "trueStil" : "falseStyle"}>
            <div>
              <h2>{hasta.patientName}</h2>
              <h3>{hasta.day}</h3>
              <h4>{hasta.myDoctor}</h4>
            </div>

            <FaTimesCircle style={{color:"red"}}
              onClick={()=>setPatient(hastalar.filter((a)=>a.id!==hasta.id))}
            />
          </div>

        ))
        }
    </div>
  )
}

export default PatientList