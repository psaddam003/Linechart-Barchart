
 $(window).load(function() {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "March 2019"
    },
    axisY:{
      includeZero: false
    },
    data: [{        
      type: "line",       
      dataPoints: [
        { y: 18 , indexLabel: "",markerColor: "#ff9800", markerType: "circle"},
        { y: 20 , indexLabel: "",markerColor: "#ff9800", markerType: "circle"},
        { y: 22,  indexLabel:  "",markerColor: "#99FF33", markerType: "circle" },
        { y: 22 ,indexLabel:  "",markerColor: "#99FF33", markerType: "circle" },
        { y: 22,indexLabel:  "",markerColor: "#99FF33", markerType: "circle"  },
        { y: 20 , indexLabel: "",markerColor: "#ff9800", markerType: "circle"},
        { y: 22 ,indexLabel:  "",markerColor: "#99FF33", markerType: "circle" },
        
       
      ]
    }]
  });
  chart.render();
     
})
$(window).load(function() {
  var chart = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "February 2019"
    },
    axisY:{
      includeZero: false
    },
    data: [{        
      type: "line",       
      dataPoints: [
        { y: 18  , indexLabel: "",markerColor: "#ff9800", markerType: "circle"},
        { y: 20 , indexLabel: "",markerColor: "#ff9800", markerType: "circle"},
        { y: 22,  indexLabel:  "",markerColor: "#99FF33", markerType: "circle" },
        { y: 22 ,indexLabel:  "",markerColor: "#99FF33", markerType: "circle" },
        { y: 22,indexLabel:  "",markerColor: "#99FF33", markerType: "circle"  },
        { y: 20 , indexLabel: "",markerColor: "#ff9800", markerType: "circle"},
        { y: 22 ,indexLabel:  "",markerColor: "#99FF33", markerType: "circle" },
        
       
      ]
    }]
  });
  chart.render();
     
})
$(window).load(function() {
  var chart = new CanvasJS.Chart("chartContainer4", {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "January 2019"
    },
    axisY:{
      includeZero: false
    },
    data: [{        
      type: "line",       
      dataPoints: [
        { y: 18 , indexLabel: "",markerColor: "#ff9800", markerType: "circle"},
        { y: 20 , indexLabel: "",markerColor: "#ff9800", markerType: "circle"},
        { y: 22,  indexLabel:  "",markerColor: "#99FF33", markerType: "circle" },
        { y: 22 ,indexLabel:  "",markerColor: "#99FF33", markerType: "circle" },
        { y: 22,indexLabel:  "",markerColor: "#99FF33", markerType: "circle"  },
        { y: 20 , indexLabel: "",markerColor: "#ff9800", markerType: "circle"},
        { y: 22 ,indexLabel:  "",markerColor: "#99FF33", markerType: "circle" },
        
       
      ]
    }]
  });
  chart.render();
     
})





 

$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });




   
    
    $(window).load(function() {
   
	
      var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        
        title:{
          text:""
        },
        axisX:{
          interval: 1
        },
        axisY2:{
          // interlacedColor: "rgba(1,77,101,.2)",
          gridColor: "rgba(1,77,101,.1)",
          title: ""
        },
        data: [{
          type: "bar",
          name: "companies",
          axisYType: "secondary",
          color: "#99FF33",
          dataPoints: [
            { y: 22.45, label: "March 1" },
            { y: 18.15, label: "March 2",color:"#ff9800" },
            { y: 22.09, label: "March 3" },
            { y: 22.30, label: "March 4" },
            { y: 19, label: "March 5",color:"#ff9800"  },
            { y: 22, label: "March 6" },
            { y: 22.9, label: "March 7" },
            
          ]
        }]
      });
      chart.render();
       
    })
    $(window).load(function() {
   
	
      var chart = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        
        title:{
          text:""
        },
        axisX:{
          interval: 1
        },
        axisY2:{
          // interlacedColor: "rgba(1,77,101,.2)",
          gridColor: "rgba(1,77,101,.1)",
          title: ""
        },
        data: [{
          type: "bar",
          name: "companies",
          axisYType: "secondary",
          color: "#99ff33",
          dataPoints: [
            { y: 22.45, label: "March 1" },
            { y: 18.15, label: "March 2",color:"#ff9800" },
            { y: 22.09, label: "March 3" },
            { y: 22.30, label: "March 4" },
            { y: 19, label: "March 5",color:"#ff9800" },
            { y: 22, label: "March 6" },
            { y: 22.9, label: "March 7" },
            
          ]
        }]
      });
      chart.render();
      
     
  })
  $(window).load(function() {
   
	
    var chart = new CanvasJS.Chart("chartContainer5", {
      animationEnabled: true,
      
      title:{
        text:""
      },
      axisX:{
        interval: 1
      },
      axisY2:{
        // interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: ""
      },
      data: [{
        type: "bar",
        name: "companies",
        axisYType: "secondary",
        color: "#99ff33",
        dataPoints: [
          { y: 22.45, label: "March 1" },
          { y: 18.15, label: "March 2",color:"#ff9800" },
          { y: 22.09, label: "March 3" },
          { y: 22.30, label: "March 4" },
          { y: 19, label: "March 5",color:"#ff9800" },
          { y: 22, label: "March 6" },
          { y: 22.9, label: "March 7" },
          
        ]
      }]
    });
    chart.render();
    
   
})

  