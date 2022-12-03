import React, { useState, useEffect } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { getRequest } from "../../utils/request"

const Dashboard = () => {
  const [ageData, setAgeData] = useState([])

  useEffect(() => {
    getChartValue()
  }, [])

  const getChartValue = async () => {
    const result = await getRequest(`chartage`)

    setAgeData(result)
  }

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <ResponsiveContainer width="99%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={ageData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="INCOME_RANGE" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Dashboard
