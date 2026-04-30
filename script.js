function berechnen() {
  let blutung = document.getElementById("blutung").value;

  let phase = "";
  let risiko = 0;

  if (blutung == 3) {
    phase = "Menstruation";
    risiko = 0.1;
  } else if (blutung == 2) {
    phase = "frühe Zyklusphase";
    risiko = 0.3;
  } else if (blutung == 1) {
    phase = "mögliche fruchtbare Phase";
    risiko = 1;
  } else {
    phase = "möglicher Eisprung";
    risiko = 2;
  }

  // Kupferspirale reduziert stark
  let mitSpirale = risiko * 0.01;

  document.getElementById("phase").innerText =
    "Geschätzte Phase: " + phase;

  document.getElementById("wahrscheinlichkeit").innerText =
    "Schwangerschaftsrisiko: " + mitSpirale.toFixed(2) + "%";

  zeichneDiagramm(mitSpirale);
}


function zeichneDiagramm(wert) {
  const ctx = document.getElementById('chart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["niedrig", "mittel", "hoch"],
      datasets: [{
        label: 'Risiko %',
        data: [0.1, 1, wert],
      }]
    }
  });
}
