import React from 'react'
import { Tabs } from 'antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { PassportTable } from './PassportTable'
import { EventTable } from './EventTable'
import { districtList } from '../../utils/helper'

const { TabPane } = Tabs

export const DistrictTabs = ({ data }) => {
  return (
    <div>
      <Tabs defaultActiveKey='1' tabPosition={'left'} size={'large'}>
        {districtList.map((dis) => (
          <TabPane tab={dis} key={dis}>
            <Tabs defaultActiveKey='1' tabPosition={'top'} size={'large'}>
              <TabPane tab={'Паспорт'} key='Паспорт'>
                {<PassportTable district={dis} /> || 'Паспорт'}
              </TabPane>
              <TabPane tab={'Новости'} key='Новости'>
                {<EventTable district={dis} /> || 'Новости'}
              </TabPane>
            </Tabs>
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}
