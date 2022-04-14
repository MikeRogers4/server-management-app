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
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            {data.map((datum, index) => (
                <div key={`grid-${index}`} className={styles.twoItems} >
                    <div>
                        <div>{datum.name}</div>
                        {datum.children ? <ul>
                            {datum.children.map((child, childIndex) => (
                                <li key={`li-${childIndex}`}>{child}</li>
                            ))}
                        </ul> : null}
                    </div>
                    {datum.toggling ? <FaExclamationTriangle key={`icon-${index}`} className={styles.exclamationIcon} /> :
                        (<div onClick={() => toggleItem(datum)}>{datum.toggled ?
                            <FaCheck key={`icon-${index}`} className={styles.checkIcon} />
                            : <FaTimes key={`icon-${index}`} className={styles.timesIcon} />}</div>)}
                </div>
            ))}
        </div>
    </div>
}