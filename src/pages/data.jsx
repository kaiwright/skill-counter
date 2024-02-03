import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { getDatabase, ref, onValue } from "firebase/database";

function Data() {
  const [skillData, setSkillData] = useState({ skills: {} });

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const skillsRef = ref(db, "skills");
      onValue(skillsRef, (snapshot) => {
        const skillData = snapshot.val();
        setSkillData(skillData);
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    // flatten object to just skills and just count
    const justNumbers = Object.keys(skillData).map(function (key) {
      return skillData[key].count;
    });
    console.log(justNumbers);

    const justSkills = Object.keys(skillData);
    console.log(justSkills);

    const data = {
      labels: justSkills,
      datasets: [
        {
          label: "Count",
          data: justNumbers,
          backgroundColor: [
            "rgb(225, 152, 9)",
            "rgb(85, 145, 145)",
            "rgb(176, 136, 171)",
            "rgb(94, 39, 225)",
            "rgb(42, 87, 9)",
            "rgb(107, 133, 220)",
            "rgb(50, 217, 35)",
            "rgb(136, 75, 168)",
            "rgb(153, 81, 87)",
            "rgb(91, 6, 74)",
            "rgb(215, 223, 79)",
            "rgb(249, 139, 20)",
            "rgb(164, 26, 252)",
            "rgb(77, 36, 146)",
            "rgb(194, 216, 220)",
            "rgb(34, 162, 175)",
            "rgb(20, 232, 186)",
            "rgb(179, 4, 67)",
            "rgb(247, 49, 205)",
            "rgb(189, 103, 34)",
            "rgb(204, 124, 114)",
            "rgb(206, 209, 139)",
            "rgb(90, 148, 105)",
            "rgb(138, 45, 132)",
            "rgb(135, 248, 103)",
            "rgb(208, 165, 238)",
            "rgb(243, 173, 178)",
            "rgb(221, 240, 56)",
            "rgb(31, 237, 160)",
            "rgb(242, 237, 248)",
            "rgb(84, 85, 144)",
            "rgb(124, 145, 172)",
            "rgb(211, 54, 93)",
            "rgb(120, 89, 26)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const chart = new Chart(document.getElementById("chart"), {
      type: "pie",
      data: data,
    });

    // Cleanup the chart instance when the component unmounts
    return () => {
      chart.destroy();
    };
  }, [skillData]);

  return (
    <div>
      <Container>
        <h3>Data Page</h3>
        <div className="w-50">
            <canvas id="chart"></canvas>
        </div>
      </Container>
    </div>
  );
}

export default Data;
