
let message = [
    "Initializing hacking","Hacking Lucky Pal username","Lucky Pal your username has been found","Lucky Pal we connecting to your old Instagram account please wait...","Lucky Pal your Instagram account has been hacked","To Retrive your account you have to pay 10000Rs","If you do not pay the money you will be jailed for 1.5 years as you watched lots of 18+videos"
  ];
  function chirags(message){
  const sleep = async (seconds) =>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(true)
        
      },seconds*1000)
    })
  }
  const showHack = async (message) =>{
    await sleep(2)
  console.log(message)
    hacker.innerHTML =hacker.innerHTML + message +"<br>"
    
    
    
  }
  (async () =>{
    for(let i = 0; i<message.length; i++){
     await showHack(message[i])
    
     
    }
    
  })() }chirags(message)
  