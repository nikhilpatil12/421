const ctx = document.getElementById("myChart");
let myChart;

n = 10;
var datay = [n];
var datax = [0];
i = 1;
while (n != 1) {
  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = n * 3 + 1;
  }
  i += 1;
  datay.push(n);
  datax.push(i);
}

var handleInputChange = (num) => {
  var datay = [num];
  var datax = [0];
  i = 1;
  while (num != 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    i += 1;
    datay.push(num);
    datax.push(i);
  }

  if (myChart) {
    myChart.destroy();
  }
  const ctx = document.getElementById("myChart");
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: datax,
      datasets: [
        {
          label: "Value",
          data: datay,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: datax,
    datasets: [
      {
        label: "Value",
        data: datay,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
