import React from 'react'
import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave - done
* 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth - done
* 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно - done
* 4 - сделать стили в соответствии с дизайном - done
* */

const HW9 = () => {
    return (
        <div id={'hw9'}>
            <div className={s2.hwTitle}>Homework #9</div>

            <div className={s2.hw}>
                <Clock />
            </div>
        </div>
    )
}

export default HW9
