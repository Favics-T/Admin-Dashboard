export const lineData = {
  labels: [0, 5, 15, 25, 35, 45, 55, 65, 85, 95, 105, 125],
  datasets: [
    {
      label: "Steps",
      data: [100, 200, 300, 250, 400, 350, 450, 500, 600, 550, 650, 700],
      borderColor: "#533FE4",
      backgroundColor: "rgba(83, 63, 228, 0.2)",
      fill: true,
      tension: 0.3, 
      pointBackgroundColor: "#533FE4",
    },
  ],
};


export const barChart ={
    labels:[0,5,10,25,35,45,55,65,75,85,95,105],
    datasets:[
        {
            label:false,
            data:[300,200,100,300]
        }
    ]
}
