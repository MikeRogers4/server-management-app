import styles from './toggleGrid.module.scss'
import { FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa'
import { useState } from 'react'
import * as _ from 'lodash'

export default function ToggleGrid({ data, title, onClick }) {
    const [togglingRecords, setTogglingRecords] = useState([])
    const toggleItem = function (data) {
        setTogglingRecords(togglingRecords.concat([data.name]))
        onClick(data).then(function () {
            setTogglingRecords(_.pull(togglingRecords, data.name))
        })
    }

    if (!_.isEmpty(togglingRecords)) {
        _.each(togglingRecords, function (togglingRecord) {
            const datum = _.find(data, (datum) => datum.name === togglingRecord)

            if (datum) {
                datum.toggling = true
            }
        })
    }
    return <div>
        <h1 className={styles.title}>{title}</h1>
        {data.map((datum, index) => (
            <div key={`grid-${index}`} className={styles.item} >
                <div>{datum.name}</div>
                {datum.toggling ? <FaExclamationTriangle key={`icon-${index}`} className={styles.exclamationIcon} /> :
                    (<div onClick={() => toggleItem(datum)}>{datum.toggled ?
                        <FaCheck key={`icon-${index}`} className={styles.checkIcon} />
                        : <FaTimes key={`icon-${index}`} className={styles.timesIcon} />}</div>)}
            </div>
        ))}
    </div>
}