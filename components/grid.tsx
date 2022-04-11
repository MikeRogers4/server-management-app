import dynamic from 'next/dynamic';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import styles from './grid.module.scss'
const SmartGrid = dynamic(() => import('smart-webcomponents-react/grid'), {
    ssr: false,
    loading: () => <p>Loading...</p>
})

export default function Grid({ dataSource }) {
    const columns = [{
        label: 'Name',
        dataField: 'name'
    }]
    const selection = {
        enabled: true,
        checkBoxes: {
            enabled: true
        }
    }
    const dataSourceSettings = {
        dataFields: [{ name: 'id', dataType: 'number' }, { name: 'name', dataType: 'string' }]
    }

    return <SmartGrid className={styles.smartGrid} id='grid' columns={columns} selection={selection} dataSource={dataSource}
        dataSourceSettings={dataSourceSettings} />
}