import React from 'react'
import './averageSession.css'
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";


/*const dataTest = [ 
  { day: 1, sessionLength: 30 },
  { day: 2, sessionLength: 23 },
  { day: 3, sessionLength: 45 },
  { day: 4, sessionLength: 50 },
  { day: 5, sessionLength: 0 },
  { day: 6, sessionLength: 0 },
  { day: 7, sessionLength: 60 },

]*/

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip_average">
        <p> {`${payload[0].value} `}min</p>
      </div>
    )
  }

  return null;
}
//{ data: { sessions } }
export default function AverageSession(props) {
  return (
    <section className="averageContainer">
      <div className="averageTitle">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%" padding={0}>
        <LineChart
          data={props.data}
          margin={{ top: 0, right: 0, left: 0, bottom: -10 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            padding={{ left: 20, right: 15 }}
            tick={false}
          />
          <YAxis
            hide={true}
            domain={["dataMin-50", "dataMax+50"]}
            padding={{ top: 10, bottom: -20 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "black",
              strokeOpacity: 0.08,
              strokeWidth: 30,
            }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            dot={false}
            activeDot={{
              stroke: "white",
              strokeOpacity: 1,
              fill: "white",
              strokeWidth: 15,
              r: 5,
            }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="formatXAxis">
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
    </section>
  )
}
