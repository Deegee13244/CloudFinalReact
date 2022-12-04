import React, { useState, useEffect } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
} from "recharts"
import { Spinner } from "reactstrap"
import { getRequest } from "../../utils/request"
import "./style.css"

const Dashboard = () => {
  const [ageData, setAgeData] = useState([])
  const [incomeData, setIncomeData] = useState([])
  const [homeownerData, setHomeownerData] = useState([])

  useEffect(() => {
    getChartValue()
  }, [])

  const getChartValue = async () => {
    const result = await getRequest(`chartage`)
    setAgeData(result)

    const resultIncome = await getRequest(`chartincome`)
    setIncomeData(resultIncome)

    const resultHome = await getRequest(`charthomeowner`)
    const homeownerValue = {}
    if (resultHome) {
      resultHome.map((item) => {
        if (!homeownerValue[item?.DEPARTMENT]) {
          homeownerValue[item?.DEPARTMENT] = { [item?.HOMEOWNER]: item?.count }
        } else {
          homeownerValue[item?.DEPARTMENT][item?.HOMEOWNER] = item?.count
        }
        return true
      })
    }

    const homeOwnerTotal = []
    if (homeownerValue) {
      Object.keys(homeownerValue).forEach((key, value) => {
        var m = { name: key }
        Object.keys(homeownerValue[key]).forEach((key2, value2) => {
          const t = key2.trim()
          m[t] = homeownerValue[key][key2]
        })
        homeOwnerTotal.push(m)
      })
    }
    setHomeownerData(homeOwnerTotal)
  }

  const spinnerComponent = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
        height: "500px",
      }}
    >
      <Spinner type="grow" color="warning" />
    </div>
  )

  return (
    <>
      <div className="dashboard-summary-container">
        <h2>Summary of Dashboard: </h2>
        As seen in the dashboard charts, customer engagement is highest among
        those with mid-range salaries, likely due to those customers having
        enough income to buy groceries without financial worries but not having
        so much income that they turn to higher-priced stores and products.
        Additionally, customer spending seems highest among middle-aged adults,
        likely due to similar reasons as income. Both of these factors have very
        similar effects on customer spending and engagement, with the graphs
        showing similar trends.
      </div>
      <div className="dashboard-container">
        <div>
          <h3>Sales affected by Age</h3>
          {ageData.length > 0 ? (
            <div style={{ width: "500px", height: "500px" }}>
              <ResponsiveContainer width="100%" height="100%">
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
                  <XAxis
                    textAnchor="end"
                    sclaeToFit="true"
                    verticalAnchor="start"
                    interval={0}
                    angle="-20"
                    dataKey="AGE_RANGE"
                    style={{
                      fontSize: "0.7rem",
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Percentage",
                      angle: -90,
                      position: "insideLeft",
                    }}
                    tickFormatter={(tick) => {
                      return `${tick}%`
                    }}
                    sclaeToFit
                  />

                  <Tooltip />
                  <Bar dataKey="percentage" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            spinnerComponent()
          )}
        </div>
        <div>
          <h3>Sales affected by Income</h3>
          {incomeData.length > 0 ? (
            <div style={{ width: "500px", height: "500px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={incomeData}
                    dataKey="count"
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={130}
                    fill="#82ca9d"
                    label={(entry) => entry.INCOME_RANGE}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            spinnerComponent()
          )}
        </div>

        <div>
          <h3>Sales affected by Income</h3>
          {homeownerData.length > 0 ? (
            <div style={{ width: "500px", height: "500px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={homeownerData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    textAnchor="end"
                    sclaeToFit="true"
                    verticalAnchor="start"
                    interval={0}
                    dataKey="name"
                    style={{
                      fontSize: "0.7rem",
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Count",
                      angle: -90,
                      position: "insideLeft",
                    }}
                    // tickFormatter={(tick) => {
                    //   return `${tick}%`
                    // }}
                    sclaeToFit
                  />

                  <Tooltip />
                  <Bar dataKey="Homeowner" fill="#003f5c" />
                  <Bar dataKey="Renter" fill="#ff6361" />
                  <Bar dataKey="null" fill="#ffa600" />
                  <Legend />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            spinnerComponent()
          )}
        </div>
      </div>
    </>
  )
}

export default Dashboard
