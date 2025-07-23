const Countrye = document.querySelector('.city')
const NumberColor = document.querySelectorAll( 'h4')
const h3 = document.querySelectorAll('h3')
const h5  =  document.querySelector('.illizi h5');


function GitNameCityOfPAYER( CityNname ){


let  params = {
country : "DZ",
city : CityNname ,
  }

   axios.get( " https://api.aladhan.com/v1/timingsByCity" , {
   params : params ,
 
   })
   .then((response)=>{

    const timings = response.data.data.timings

     
      Timeprayerofcity("a" , timings.Sunrise) 
      Timeprayerofcity("b" , timings.Dhuhr)
      Timeprayerofcity("c" , timings.Asr)
      Timeprayerofcity("d" , timings.Maghrib)
      Timeprayerofcity("e" , timings.Isha)
   
       
         const Day = response.data.data.date.hijri.weekday.ar
         const Wekday = response.data.data.date.readable
          Timeprayerofcity("time" , Wekday + "  " + Day )   
           
   }).catch((error)=>{

  alert(error)
})




}
function Timeprayerofcity(id , timings){

document.getElementById(id).innerHTML = timings
}






document.getElementById('sss').innerHTML = `<option disabled selected>اخترالدولة</option>`

let country = ["ALGERIA" , "LIBYA" , "TUNISIA"]





    for (let i = 0; i < country.length; i++) {
    const element = country[i];
       let z = `
          <option>${element}</option>
        
       `
       document.getElementById('sss').innerHTML += z
      
  const algeriaX = ["Illizi" , "Touggourt" , "Adrar" , "Laghouat"]
  const libyaenx  = ["Sabhā" , "Surt" ,"tarabulus" , "Ghāt"]
  const Tounsia = [ "Sousse" , "Nabeul" , "Sfax" , "Zaghouan"]
   document.getElementById('sss').addEventListener('change' , function(){

         document.getElementById('ddd').innerHTML =''
        
      if (this.value === "ALGERIA" ) {
         Countrye.innerHTML = "ALGERIA"
         
        document.getElementById('ddd').innerHTML = `<option disabled selected>اختر الولاية</option>`
          for (let i =0; i < algeriaX.length; i++) {
               const element = algeriaX[i];

                  const a = `
                   <option>${element}</option>
                  `
       
            document.getElementById('ddd').innerHTML += a
          }
          
      }else if(this.value === "LIBYA" ) {
          Countrye.innerHTML = "LIBYA"
 document.getElementById('ddd').innerHTML = `<option disabled selected>اختر الولاية</option>`
            for (let i =0; i < libyaenx.length; i++) {
               const element = libyaenx[i];

                  const e = `
                   <option>${element}</option>
                  `
            document.getElementById('ddd').innerHTML += e
        }
      }else if (this.value === "TUNISIA") {
          Countrye.innerHTML = "TUNISIA"
          document.getElementById('ddd').innerHTML = `<option disabled selected>اختر الولاية</option>`
           for (let i =0; i < Tounsia.length; i++) {
               const element = Tounsia[i];

                  const e = `
                   <option>${element}</option>
                  `
            document.getElementById('ddd').innerHTML += e
        }
         
      }
   })
       
     

   }




document.getElementById('ddd').addEventListener('change' , function(){

  if (this.value === "Illizi" ) {
   GitNameCityOfPAYER("illizi")
   h5.innerHTML = "illizi"
  }else if(this.value === "Touggourt" ){
  GitNameCityOfPAYER("Touggourt")
    h5.innerHTML = "Touggourt"
  }else if (this.value === "Adrar" ) {
   GitNameCityOfPAYER("Adrar")
     h5.innerHTML = "Adrar"
  }else if(this.value === "Laghouat" ){
   GitNameCityOfPAYER("Laghouat")
     h5.innerHTML = "Laghouat"
  }
 
})





function LibyencITEnAMEaPaAA(CityName){


  

let  params = {
country : "LY",
city : CityName ,
  }

   axios.get( " https://api.aladhan.com/v1/timingsByCity" , {
   params : params ,
 
   })
   .then((response)=>{

    const timings = response.data.data.timings

     
      Timeprayerofcity("a" , timings.Sunrise) 
      Timeprayerofcity("b" , timings.Dhuhr)
      Timeprayerofcity("c" , timings.Asr)
      Timeprayerofcity("d" , timings.Maghrib)
      Timeprayerofcity("e" , timings.Isha)
   
       
         const Day = response.data.data.date.hijri.weekday.ar
         const Wekday = response.data.data.date.readable
          Timeprayerofcity("time" , Wekday + "  " + Day )   
           
   }).catch((error)=>{

  alert(error)
})
}


document.getElementById('ddd').addEventListener('change' ,function(){
if (this.value === "Sabhā" ) {
   LibyencITEnAMEaPaAA("سبها")
   h5.innerHTML = "Sabhā"
}else if (this.value === "Surt") {
   LibyencITEnAMEaPaAA("Surt")
    h5.innerHTML = "Surt"
}else if (this.value === "tarabulus") {
   LibyencITEnAMEaPaAA("طرابلس")
    h5.innerHTML = "tarabulus"
}else if (this.value === "Ghāt" ) {
   LibyencITEnAMEaPaAA("غات")
    h5.innerHTML = "Ghāt"
}
})


function TUNISIACityName(CityName){

let  params = {
country : "TN" ,
city : CityName ,
  }

   axios.get( " https://api.aladhan.com/v1/timingsByCity" , {
   params : params ,
 
   })
   .then((response)=>{

    const timings = response.data.data.timings

     
      Timeprayerofcity("a" , timings.Sunrise) 
      Timeprayerofcity("b" , timings.Dhuhr)
      Timeprayerofcity("c" , timings.Asr)
      Timeprayerofcity("d" , timings.Maghrib)
      Timeprayerofcity("e" , timings.Isha)
   
       
         const Day = response.data.data.date.hijri.weekday.ar
         const Wekday = response.data.data.date.readable
          Timeprayerofcity("time" , Wekday + "  " + Day )   
           
   }).catch((error)=>{

  alert(error)
   })


}


document.getElementById('ddd').addEventListener('change' ,function(){
  
if (this.value === "Sousse" ) {
   TUNISIACityName("Sousse")
   h5.innerHTML = "Sousse"
}else if (this.value === "Nabeul") {
   TUNISIACityName("Nabeul")
    h5.innerHTML = "Nabeul"
}else if (this.value === "Sfax") {
   TUNISIACityName("Sfax")
    h5.innerHTML = "Sfax"
}else if (this.value === "Zaghouan" ) {
   TUNISIACityName("Zaghouan")
    h5.innerHTML = "Zaghouan"
}
document.getElementById('time').style.color = "rgb(224, 57, 57)"
document.getElementById('city').style.color = "rgb(224, 57, 57)"
document.getElementById('prayer').style.color = "rgb(224, 57, 57)"
NumberColor.forEach((x)=>{
 x.style.color = "rgb(224, 57, 57)"
   
})
  h3.forEach((d) =>{

   d.style.color = "rgb(224, 57, 57)"

  })
})

