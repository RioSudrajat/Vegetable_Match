function checkVegetable() {
  const phValue = parseFloat(document.getElementById("phValue").value);
  const vegetableList = document.getElementById("vegetableList");
  const infoContent = document.getElementById("infoContent");

  // Clear previous results
  vegetableList.innerHTML = "";
  infoContent.innerHTML =
    "<p>Select a vegetable to see details about planting and care.</p>";

  if (isNaN(phValue) || phValue < 0 || phValue > 14) {
    alert("Please enter a valid pH value between 0 and 14.");
    return;
  }

  const vegetables = [
    {
      name: "Artichoke",
      minPH: 6.5,
      maxPH: 7.5,
      planting: "Spring/Fall",
      image: "assets/Arithcoke.png",
      care: "Requires well-drained soil and full sun",
    },
    {
      name: "Asparagus",
      minPH: 6.0,
      maxPH: 6.8,
      planting: "Early Spring",
      image: "assets/Asparagus.png",
      care: "Needs deep, fertile soil and full sun",
    },
    {
      name: "Bawang Pre",
      minPH: 6.5,
      maxPH: 7.0,
      planting: "Cool seasons",
      image: "assets/BawangPre.png",
      care: "Prefers cool temperatures and consistent moisture",
    },
    {
      name: "Bayam",
      minPH: 6.0,
      maxPH: 7.0,
      planting: "Spring/Fall",
      image: "assets/Bayam.png",
      care: "Tolerates partial shade, needs regular watering",
    },
    {
      name: "Brokoli",
      minPH: 6.0,
      maxPH: 6.8,
      planting: "Cool seasons",
      image: "assets/Brokoli.png",
      care: "Requires rich soil and consistent moisture",
    },
    {
      name: "Brussell Kecambah",
      minPH: 6.5,
      maxPH: 6.5,
      planting: "Late Summer",
      image: "assets/Brussell.png",
      care: "Needs cool temperatures and rich soil",
    },
    {
      name: "Endive",
      minPH: 5.5,
      maxPH: 5.5,
      planting: "Fall/Spring",
      image: "assets/Endive.png",
      care: "Prefers cooler temperatures and consistent moisture",
    },
    {
      name: "Kailan",
      minPH: 5.5,
      maxPH: 6.5,
      planting: "Cool seasons",
      image: "assets/Kailan.png",
      care: "Tolerates various soil conditions",
    },
    {
      name: "Kangkung",
      minPH: 5.5,
      maxPH: 6.5,
      planting: "Wet/Tropical seasons",
      image: "assets/Kangkung.png",
      care: "Thrives in moist environments",
    },
    {
      name: "Kubis",
      minPH: 6.5,
      maxPH: 7.0,
      planting: "Cool seasons",
      image: "assets/Kubis.png",
      care: "Requires fertile, well-drained soil",
    },
    {
      name: "Kubis Bunga",
      minPH: 6.5,
      maxPH: 7.0,
      planting: "Cool seasons",
      image: "assets/KubisBunga.png",
      care: "Needs consistent moisture and rich soil",
    },
    {
      name: "Pakcoy",
      minPH: 7.0,
      maxPH: 7.0,
      planting: "Cool seasons",
      image: "assets/Pakcoy.png",
      care: "Prefers neutral soil and consistent watering",
    },
    {
      name: "Sawi Manis",
      minPH: 5.5,
      maxPH: 6.5,
      planting: "Cool seasons",
      image: "assets/SawiManis.png",
      care: "Tolerates slightly acidic soil",
    },
    {
      name: "Sawi Pahit",
      minPH: 6.0,
      maxPH: 6.5,
      planting: "Cool seasons",
      image: "assets/SawiManis.png",
      care: "Requires well-drained soil",
    },
    {
      name: "Seledri",
      minPH: 6.5,
      maxPH: 6.5,
      planting: "Spring/Fall",
      image: "assets/Seledri.png",
      care: "Needs consistent moisture and rich soil",
    },
    {
      name: "Selada",
      minPH: 6.0,
      maxPH: 7.0,
      planting: "Cool seasons",
      image: "assets/Selada.png",
      care: "Prefers cool temperatures and partial shade",
    },
    {
      name: "Silverbeet",
      minPH: 6.0,
      maxPH: 7.0,
      planting: "Spring/Fall",
      image: "assets/Silverbeet.png",
      care: "Tolerates various soil conditions",
    },
    {
      name: "Cabe",
      minPH: 6.0,
      maxPH: 6.5,
      planting: "Warm seasons",
      image: "assets/Cabe.png",
      care: "Requires full sun and well-drained soil",
    },
    {
      name: "Kacang Polong",
      minPH: 6.0,
      maxPH: 7.0,
      planting: "Cool seasons",
      image: "assets/KacangPolong.png",
      care: "Prefers cool temperatures and rich soil",
    },
    {
      name: "Okra",
      minPH: 6.0,
      maxPH: 6.8,
      planting: "Warm seasons",
      image: "assets/Okra.png",
      care: "Thrives in full sun and warm conditions",
    },
    {
      name: "Tomat",
      minPH: 6.0,
      maxPH: 6.5,
      planting: "After last frost",
      image: "assets/Tomat.png",
      care: "Needs full sun and support for growth",
    },
    {
      name: "Terong",
      minPH: 5.5,
      maxPH: 7.0,
      planting: "Warm seasons",
      image: "assets/Terong.png",
      care: "Requires warm soil and full sun",
    },
    {
      name: "Timun",
      minPH: 5.5,
      maxPH: 7.0,
      planting: "Warm seasons",
      image: "assets/Timun.png",
      care: "Prefers warm, well-drained soil",
    },
    {
      name: "Wortel",
      minPH: 5.5,
      maxPH: 7.0,
      planting: "Spring/Fall",
      image: "assets/Wortel.png",
      care: "Needs loose, sandy soil",
    },
    {
      name: "Terong Ungu",
      minPH: 5.5,
      maxPH: 6.7,
      planting: "Warm seasons",
      image: "assets/TerongUngu.png",
      care: "Requires full sun and rich soil",
    },
    {
      name: "Lobak",
      minPH: 6.0,
      maxPH: 6.0,
      planting: "Cool seasons",
      image: "assets/Lobak.png",
      care: "Prefers well-drained, fertile soil",
    },
    {
      name: "Ubi Jalar",
      minPH: 5.8,
      maxPH: 6.0,
      planting: "Warm seasons",
      image: "assets/Ubijalar.png",
      care: "Needs warm, well-drained soil",
    },
    {
      name: "Talas",
      minPH: 5.5,
      maxPH: 6.5,
      planting: "Tropical seasons",
      image: "assets/Talas.png",
      care: "Thrives in moist, rich soil",
    },
    {
      name: "Kentang",
      minPH: 5.5,
      maxPH: 5.8,
      planting: "Early Spring",
      image: "assets/Kentang.png",
      care: "Prefers acidic, well-drained soil",
    },
    {
      name: "Bawang Merah",
      minPH: 5.5,
      maxPH: 6.5,
      planting: "Cool seasons",
      image: "assets/BawangMerah.png",
      care: "Requires well-drained soil",
    },
    {
      name: "Bawang Putih",
      minPH: 6.0,
      maxPH: 6.5,
      planting: "Fall/Winter",
      image: "assets/Bawangputih.png",
      care: "Needs fertile, well-drained soil",
    },
  ];

  const recommended = vegetables.filter(
    (v) => phValue >= v.minPH && phValue <= v.maxPH
  );

  vegetables.forEach((veg) => {
    if (phValue >= veg.minPH && phValue <= veg.maxPH) {
      const card = document.createElement("div");
      card.innerHTML = `
<h3>${veg.name}</h3>
<img src="${veg.image}" alt="${veg.name}" style="width:100%; border-radius:8px;">
`;
      card.addEventListener("click", () => {
        infoContent.innerHTML = `
  <h3>${veg.name}</h3>
  <p><strong>Planting:</strong> ${veg.planting}</p>
  <p><strong>Care:</strong> ${veg.care}</p>
  <img src="${veg.image}" alt="${veg.name}" style="width:100%; border-radius:8px;">
`;
      });
      vegetableList.appendChild(card);
    }
  });
}
