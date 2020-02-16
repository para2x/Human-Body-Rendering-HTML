$('#human-body').on('click', '.part', (ev) => {
  console.log({id: '#human_body', value: ev.target.id})
  Shiny.setInputValue('human_body', ev.target.id)
  
})

function gradientColor(bodyPart) {
  var name = Object.keys(bodyPart)[0];
  var value = Object.values(bodyPart)[0];
  var color;
  
  if (value < 25) {
    color = 'blue';
  } else if (value < 50) {
    color = 'green';
  } else {
    color = 'red';
  }
    
  var element = document.getElementById(name);
    if (element) {
    element.style.fill = color;
  }
}

Shiny.addCustomMessageHandler('body_data', function(color) {
    parts = color.body_part
    vals = color.values
    
    var obj = {};
    parts.forEach(function(item, index) {
      obj[item] = vals[index]
    })
    
  const assignColor = (el, value) => {
  if (value < 25) {
      el.style.fill= "blue";
  } else if (value < 50) {
      el.style.fill= "green";
  } else {
      el.style.fill= "red";
  }
}

    /* THIS IS WHERE WE NEED THE CODE BELOW FROM THE SEND CUSTOM MESSAGE
       BUT WE NEED TO SET TIMEOUT FOR THE SVG TO LOAD
    */
    setTimeout(function(){ 
      for (key in obj){
    const el = document.getElementById(key);
    if (obj[key] < 25) {
      el.style.fill= "#481567FF";
  } else if (obj[key] < 50) {
      el.style.fill= "#453781FF";
  } else if (obj[key] < 75) {
      el.style.fill= "#40478FF";
  } else {
      el.style.fill= "#39568CFF";
  }
    //etc.
}
    }, 100);
    
    })