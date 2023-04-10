function drawCard(){
    const card = document.getElementById("Card1")
    const image = document.createElement('img')
    image.src = '/Assets/profile.jpg'
    const canvas = card.getContext('2d')
    
    //Draw main outer and inner filled rectangle

    canvas.fillStyle = "#3c5f66"
    canvas.strokeRect(80,100,400,400)
    canvas.fillRect(80,100,400,160)
    
    //Draw circle to hold profile picture

    canvas.beginPath()
    canvas.arc(280,230, 100,0,3*Math.PI)
    canvas.strokeStyle = '#2465D3'
    canvas.stroke()
    
    //Draw inner rectangular holding professional status

    canvas.strokeStyle = "black"
    canvas.strokeRect(155,360,260,100)
    canvas.fillStyle = "black";
    canvas.font = "20px Pacifico cursive"
    canvas.fillText("Shraddha Raj", 220, 400);
    canvas.fillText("UI/UX designer",215,420)
    
    //to upload image. 
    image.onload = ()=>{ canvas.drawImage(image, 170, 120, 220, 220)}
    canvas.clip()
}