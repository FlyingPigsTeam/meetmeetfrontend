import React from 'react'
import {useParams,Navigate} from "react-router-dom"
const ActiveRedirect = () => {

    const { idroom } = useParams();
    return (<Navigate to={"/room/" + idroom + "/info"} replace />)
}
  
export default ActiveRedirect