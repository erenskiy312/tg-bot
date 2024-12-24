import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const OrderForm = () => {
    const { id } = useParams();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = async (e) => {

        const TELEGRAM_BOT_TOKEN = '7861606981:AAHtM4EeD1SvDPRA1vGZ3RBo_1y3ZUmJfsM';
        const TELEGRAM_CHAT_ID = '1098665423';
        const message = `ID: ${id}, Name: ${name}, Phone: ${phone}`;

        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            reply_markup : {
                inline_keyboard: [
                    [{  text: 'car', callback_data: id}]
                ],
            }
        })
    }
  return (
    <div>
        <form action={handleSubmit}>
            <input type="text"
              placeholder='Имя'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="tel"
               placeholder='Номер телефона'
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
            />
            <button type='submit'>Отправить</button>
        </form>
    </div>
  )
}

export default OrderForm