import React from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

const OrderButton = () => {
    const navigate = useNavigate()

    const handleCreateOrder = () => {
    const uniqueID = uuidv4()
    console.log(uniqueID);
    navigate(`/order/${uniqueID}`)
    } 
  return (
    <button onClick={handleCreateOrder}>Создать заявку</button>
  )
}

export default OrderButton