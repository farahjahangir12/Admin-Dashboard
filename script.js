 document.addEventListener("DOMContentLoaded", displayCharts);

function displayCharts(){
    let salesChart = document.getElementById('sales').getContext('2d');
    let furnitureChart = document.getElementById('furnitures').getContext('2d');
    let citiesChart = document.getElementById('cities').getContext('2d');
    let demandChart=  document.getElementById('demands').getContext('2d');
    let customersChart=  document.getElementById('customers').getContext('2d');
    let productsChart=  document.getElementById('products').getContext('2d');

    const salesLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const salesData = {
        labels: salesLabels,
        datasets: [{
            label: 'Sales',
            data: [20, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const furnitureLabels=["Chairs","Tables","Sofas","Dinings","Beds","Desks","Puffies"];
    const furnitureData = {
        labels: furnitureLabels,
        datasets: [{
            label: 'Popularity',
            data: [100, 150, 200, 120, 180, 300, 250],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const citiesLabels = ['Islamabad', 'Karachi', 'Lahore', 'Faislabad', 'Multan', 'Sialkot', 'Hyderabad'];
    const citiesData = {
        labels: citiesLabels,
        datasets: [{
            label: 'Sales Per City',
            data: [250, 300, 200, 180, 120, 150, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    
    const demandLabels = ['July', 'August', 'September', 'October', 'November', 'December'];
    const demandData = {
        labels: demandLabels,
        datasets: [
            {
                label: 'High',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                data: [
                    {x: 1, y: 30, r: 10},
                    {x: 2, y: 70, r: 15},
                    {x: 3, y: 40, r: 12},
                    {x: 4, y: 60, r: 20},
                    {x: 5, y: 80, r: 18},
                    {x: 6, y: 20, r: 8},
                    {x: 7, y: 90, r: 25}
                ],
            },
            {
                label: 'Low',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                borderDash: [3, 3],
                data: [
                    {x: 1, y: 40, r: 12},
                    {x: 2, y: 50, r: 10},
                    {x: 3, y: 60, r: 15},
                    {x: 4, y: 70, r: 18},
                    {x: 5, y: 50, r: 14},
                    {x: 6, y: 30, r: 8},
                    {x: 7, y: 100, r: 22}
                ],
            },
            {
                label: 'Medium',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                data: [
                    {x: 1, y: 50, r: 9},
                    {x: 2, y: 40, r: 12},
                    {x: 3, y: 70, r: 13},
                    {x: 4, y: 80, r: 15},
                    {x: 5, y: 90, r: 10},
                    {x: 6, y: 60, r: 14},
                    {x: 7, y: 110, r: 20}
                ],
            }
        ]
    };
    
    const customersLabels=['Islamabad', 'Karachi', 'Lahore', 'Faislabad', 'Multan', 'Sialkot', 'Hyderabad']
    const customersData = {
        labels:customersLabels,
        datasets: [{
          label: 'Customers',
          data: [100,200,150,300,250,100,150],
          hoverOffset: 4,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
        }]
      };

    const productsLabels=["Chairs","Tables","Sofas","Dinings","Beds","Desks","Puffies"]
    const productsData = {
        labels:productsLabels,
        datasets: [{
          label: 'Islamabad',
          data: [100,200,150,300,250,100,150], 
          backgroundColor:'rgba(255, 99, 132, 0.2)',
          borderColor:'rgb(255, 99, 132)',
          borderWidth: 1
        },

        {
            label: 'Karachi',
            data: [92,122,130,100,55,60,40], 
            backgroundColor:'rgba(255, 159, 64, 0.2)',
            borderColor:'rgb(255, 159, 64)',
            borderWidth: 1
          },
          {
            label: 'Lahore',
            data: [65,97,72,66,120,150,200], 
            backgroundColor:'rgba(255, 205, 86, 0.2)',
            borderColor:'rgb(255, 205, 86)',
            borderWidth: 1
          },
          {
            label: 'Faislabad',
            data: [250,123,150,90,210,100,130], 
            backgroundColor:'rgba(75, 192, 192, 0.2)' ,
            borderColor:'rgb(75, 192, 192)',
            borderWidth: 1
          },
          {
            label: 'Multan',
            data: [78,200,150,190,220,100,270], 
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor:'rgb(54, 162, 235)',
            borderWidth: 1
          },
          {
            label: 'Sialkot',
            data: [300,210,88,100,70,100,150], 
            backgroundColor:'rgba(153, 102, 255, 0.2)',
            borderColor:'rgb(153, 102, 255)',
            borderWidth: 1
          },
          {
            label: 'Hyderabad',
            data: [100,200,130,178,150,300,230], 
            backgroundColor:'rgba(201, 203, 207, 0.2)',
            borderColor:'rgb(201, 203, 207)',
            borderWidth: 1
          },
    
    ]
      };


   
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 10
                    }
                }

            },
            x: {
                ticks: {
                    font: {
                        size: 10
                    }
                }
            },

        },
        

        layout: {
            padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
         }
       },

       plugins: {
        legend: {
            labels: {
                font: {
                    size: 8
                }       
            },
       
        }
    }
       
    };

    const config1 = {
        type: 'bar',
        data: salesData,
        options: chartOptions
    };

    const config2 = {
        type: 'bar',
        data: furnitureData,
        options: chartOptions
    };

    const config3 = {
        type: 'bar',
        data: citiesData,
        options: chartOptions
    };

    const config4 = {
        type: 'bubble',
        data: demandData,
        options: chartOptions
    };

    const config5 = {
        type: 'doughnut',
        data: customersData,
        options:{
            responsive: true,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        font: {
                            size: 8
                        }
                    }
                },
                
            },
            layout: {
                padding: {
                left: 10,
                right: 10,
                top: 12,
                bottom: 12
             }
           }

        }
    };

    const config6={
        type: 'bar',
        data: productsData,
        options: chartOptions
        
    }
    
    
    let chart1 = new Chart(salesChart,config1);
    let chart2 = new Chart(furnitureChart,config2);
    let chart3 = new Chart(citiesChart,config3);
    let chart4 = new Chart(demandChart,config4);
    let chart5 = new Chart(customersChart,config5);
    let chart6 = new Chart(productsChart,config6);

    
};

let sectionMain=document.getElementsByTagName('main');
sectionMain.firstElementChild.id='analytics';
let sectionTwo=document.querySelector('main > nth:child(2)');
sectionTwo.id='reportings'


