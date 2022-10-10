import React from 'react'
import './score.css'

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

export default function Score({ data }) {
  const todayScore = data;
  const scorePerCent = todayScore * 100;
  const rest = 100 - scorePerCent;
  const score = [
    { name: "objectif", value: scorePerCent, fillColor: '#ff0101' },
    { name: "objectif Restant", value: rest, fillColor: '#fbfbfb' },
  ];
  const scoreLabel = score[0].value + "%";
  const data0 = [{ name: "Score", value: 100 }];
  return (
    <section className="ScoreWrapper">
      <div className="ScoreTitle">Score</div>

      <ResponsiveContainer width="100%"
        height="100%"
      >
        <PieChart
        >
          <Pie
            data={data0}
            dataKey="Base"
            innerRadius={0}
            outerRadius={80}
            fill="white"
            stroke="none"
          />
          <Pie
            dataKey="value"
            data={score}
            innerRadius={"60%"}
            outerRadius={"70%"}
            startAngle={180}
            endAngle={-360}

          >
            {score.map((base, index) => (
              <Cell
                key={`progresse-${index}`}
                fill={base.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="ScoreLegend">
        <p className="scoreLabel">{scoreLabel}</p>
        <p className='scoreLabelText'>
          de votre <br />
          objectif
        </p>
      </div>
    </section>
  );
}

