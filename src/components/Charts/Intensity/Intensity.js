import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

export default function Intensity({ data }) {
  const formatActivity = (kindValue) => {
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
          data={data}

        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tickFormatter={(kindValue) => formatActivity(kindValue)}
            tick={{ fontSize: 12, fontWeight: 500 }}
            stroke="white"
            dy={5}
          />

          <Tooltip
            labelFormatter={(kindValue) => formatActivity(kindValue)}
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
