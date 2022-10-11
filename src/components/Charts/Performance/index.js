/**
 * @file Performance is a component that returns a RadarChart
 * @author jean-jacques BOERO
 */
import React from 'react'
import './performance.css'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

/*const dataTest = [
    {
      "value": 200,
      "kind": 1
    },
    {
      "value": 240,
      "kind": 2
    },
    {
      "value": 80,
      "kind": 3
    },
    {
      "value": 80,
      "kind": 4
    },
    {
      "value": 220,
      "kind": 5
    },
    {
      "value": 110,
      "kind": 6
    }
  ]*/
/**
 * Display the RadarChart component
 * @component
 * @param {Array} data user Performance
 * @returns {reactElement}
 */
export default function Performance(props) {
  const kind = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio',
  }
  const getKind = (indexKind) => {
    return kind[indexKind]
  }

  return (
    <section className="chartsPerformance">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RadarChart
          //coordonnée du centre
          cx="50%"
          cy="50%"
          //rayon intérieur minim du cercle
          innerRadius="5%"
          //rayon extérieur maxminim du cercle
          outerRadius="60%"
          data={props.data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tickFormatter={getKind}
            tick={{ fontSize: 12, fontWeight: 500 }}
            stroke="#ffffff"
            dy={5}
          />

          <Tooltip
            labelFormatter={getKind}
          />

          <Radar
            name="Performance"
            dataKey="value"
            fill="#e60000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}
