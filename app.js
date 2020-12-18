window.addEventListener("load",()=>{
    let long;
    let lat;
    const key=`8fd8f71615d8b681bb303609304a0859`;
    let temperatureDesc=document.querySelector(".temp-desc");
    let tempdegree= document.querySelector(".degree");
    let timezone = document.querySelector(".timezone")
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`      
            
            fetch(api)
              .then(response=>{
                  return response.json();
              })
              .then(data=>{
                  console.log(data);
                  const {feels_like}= data.main;
                  tempdegree.textContent=Math.floor(feels_like-273);
                  const {country}=data.sys;
                  timezone.textContent=data.name +","+ country;

                  const {description}= data.weather[0];
                  temperatureDesc.textContent=description;


                });
        });
    }
    
});

