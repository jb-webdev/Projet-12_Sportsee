import React from 'react'
import './intensity.css'
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

export default function Intensity(props) {
  const format = (kindValue) => {
    let toFrench;
    switch (kindValue) {
      case "cardio":
        toFrench = "Cardio";
        break;
      case "energy":
        toFrench = "Énergie";
        break;
      case "endurance":
        toFrench = "Endurance";
        break;
      case "strength":
        toFrench = "Force";
        break;
      case "speed":
        toFrench = "Vitesse";
        break;
      case "intensity":
        toFrench = "Intensité";
        break;
      default:
        toFrench = "";
        break;
    }
    return toFrench;
  }
  console.log(props.data);
  return (
    <section className="chartsIntensity">
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
            tickFormatter={(kindValue) => format(kindValue)}
            tick={{ fontSize: 12, fontWeight: 500 }}
            stroke="#ffffff"
            dy={5}
          />

          <Tooltip
            labelFormatter={(kindValue) => format(kindValue)}
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
