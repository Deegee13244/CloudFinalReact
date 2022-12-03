import React, { useState, useEffect } from "react"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { getRequest } from "../../utils/request"
const data = [
  {
    name: "Page A",
    count: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    count: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    count: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    count: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    count: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    count: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    count: 3490,
    pv: 4300,
  },
]
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
