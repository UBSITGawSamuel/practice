function getWeekNumber(date = new Date()) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - startOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
  }


  const weeklyMaterials = [
    [
      {
        title: "🌍 Intro to SDG 11",
        desc: "Learn the basics of sustainable cities and communities.",
        link: "https://sdgs.un.org/goals/goal11"
      },
      {
        title: "🚍 Greener Transportation Methods",
        desc: "Explore transportation alternatives in Metro Manila.",
        link: "https://unhabitat.org"
      }
    ],
    [
      {
        title: "🏙️ Case Study: Urban Sustainability in Cebu",
        desc: "Discover what Cebu is doing to promote SDG 11.",
        link: "#"
      },
      {
        title: "🎥 Video: Planning Eco-Friendly Cities",
        desc: "A short video on innovative city designs.",
        link: "https://www.youtube.com"
      }
    ],
    [
      {
        title: "📘 Download: SDG Toolkit for Students",
        desc: "Download a PDF with activities to engage your community.",
        link: "#"
      },
      {
        title: "💡 Activity: Map Your City’s Needs",
        desc: "Use this interactive tool to assess your neighborhood.",
        link: "#"
      }
    ]
  ];

  const weekNum = getWeekNumber();
  const feedIndex = weekNum % weeklyMaterials.length;
  const feed = weeklyMaterials[feedIndex];

  const materialsContainer = document.getElementById('materials');

  feed.forEach(material => {
    const div = document.createElement('div');
    div.className = 'material';
    div.innerHTML = `
      <h3>${material.title}</h3>
      <p>${material.desc}</p>
      <a href="${material.link}" target="_blank">Learn More</a>
    `;
    materialsContainer.appendChild(div);
  });