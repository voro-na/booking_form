import React, {useState} from "react";
import styles from './bookingForm.module.css'
import Button from "../button/button";

const floors = Array.from({length: 25}, (_, index) => index + 3)
const rooms = Array.from({length: 10}, (_, index) => index + 1)

const BookingForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const data = {
            tower: form.get('towerSelected'),
            floor: form.get('floorSelect'),
            room: form.get('roomSelect'),
            date: form.get('dateSelect'),
            time: form.get('timeSelect'),
            duration: form.get('intervalSelect'),
            comment: form.get('comment')

        }
        resetForm(e)
        console.log(JSON.stringify(data))
    }
    const resetForm = (e) => {
        e.preventDefault()
        e.target.reset()
    }
    return <div className={styles.container}>
        <h2 className={styles.title}>Бронирование переговорной</h2>
        <form className={styles.form}
              onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="towerSelected" className={styles.label}>Башня</label>
            <select name="towerSelected"
                    id="towerSelected"
                    required
                    className={styles.form__input}>
                <option value=''>Выберите башню</option>
                <option value="A">Башня А</option>
                <option value="B">Башня B</option>
            </select>

            <label htmlFor="floorSelect" className={styles.label}>Этаж</label>
            <select id="floorSelect"
                    name="floorSelect"
                    className={styles.form__input}
                    required>
                <option value=''>Выберите этаж</option>
                {floors.map((floor) => (
                    <option key={floor} value={floor}>
                        Этаж {floor}
                    </option>
                ))}
            </select>

            <label htmlFor="roomSelect" className={styles.label}>Номер переговорной</label>
            <select id="roomSelect"
                    name="roomSelect"
                    required
                    className={styles.form__input}>
                <option value=''>Выберите переговорную</option>
                {rooms.map((room) => (
                    <option key={room} value={room}>
                        Переговорная {room}
                    </option>
                ))}
            </select>
            <label htmlFor='dateSelect' className={styles.label}>Дата</label>
            <input type="date" id='dateSelect' name='dateSelect' className={styles.form__input} required/>

            <label htmlFor='timeSelect' className={styles.label}>Время</label>
            <input type="time" id='timeSelect' name='timeSelect' className={styles.form__input} required/>

            <label htmlFor="intervalSelect" className={styles.label}>На сколько бронирование</label>
            <select id="intervalSelect" name="intervalSelect" className={styles.form__input} required>
                <option value="">Выберите интервал</option>
                <option value="5">5 минут</option>
                <option value="15">15 минут</option>
                <option value="30">30 минут</option>
                <option value="60">1 час</option>
                <option value="120">2 часа</option>
            </select>

            <label htmlFor='comment' className={styles.label}>Коментарий</label>
            <textarea name="comment"
                      id="comment"
                      cols="30"
                      rows="10"
                      className={styles.form__input}></textarea>
            <Button text='Отправить' type='active' onClick={handleSubmit}/>
            <Button text='Сбросить' type='inactive' onClick={resetForm}/>
        </form>
    </div>
}

export default BookingForm
