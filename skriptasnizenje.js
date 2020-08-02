
function ucitajsnizenja (){
    var artik = {
        "proizvodi":[
            {"slika" : "./slike/mjakna1.jpg",
                "staracijena": "95KM",
                "novacijena" : "75KM"},
            {
                "slika" : "./slike/mjakna2.jpg",
                "staracijena": "105KM",
                "novacijena" : "85KM"
            },
            {
                "slika" : "./slike/mjakna3.jpg",
                "staracijena": "75KM",
                "novacijena" : "53KM"
            },
            {
                "slika" : "./slike/mjakna4.jpg",
                "staracijena": "1005KM",
                "novacijena" : "900KM"
            },
            {
                "slika" : "./slike/mjakna5.jpg",
                "staracijena": "96KM",
                "novacijena" : "76KM"
            },
            {
               "slika" : "./slike/mjakna6.jpg",
                "staracijena": "95KM",
                "novacijena" : "75KM"
            },
            {
               "slika" : "./slike/mnjakna1.jpg",
                "staracijena": "75KM",
                "novacijena" : "55KM"
            },       
            {
                "slika" : "./slike/mnjakna2.jpg",
                "staracijena": "65KM",
                "novacijena" : "45KM"
            },
            
            {
                "slika" : "./slike/mnjakna3.jpg",
                "staracijena": "70KM",
                "novacijena" : "50KM"
                
            },
            
            {
                "slika" : "./slike/mnjakna4.jpg",
                "staracijena": "85KM",
                "novacijena" : "65KM"
                
            },
            {
                "slika" : "./slike/mnjakna5.jpg",
                "staracijena": "70KM",
                "novacijena" : "50KM"
                
            },
            {
                "slika" : "./slike/mnjakna6.jpg",
                "staracijena": "85KM",
                "novacijena" : "60KM"
                
            },
            {
                "slika" : "./slike/zajakna1.jpg",
                "staracijena": "80KM",
                "novacijena" : "60KM"
                
            },
            {
                "slika" : "./slike/zajakna2.jpg",
                "staracijena": "75KM",
                "novacijena" : "50KM"
                
            },
            {
                "slika" : "./slike/zajakna3.jpg",
                "staracijena": "95KM",
                "novacijena" : "65KM"
                
            },
            {
                "slika" : "./slike/zajakna4.jpg",
                "staracijena": "90KM",
                "novacijena" : "70KM"
                
            },
            {
                "slika" : "./slike/zajakna5.jpg",
                "staracijena": "75KM",
                "novacijena" : "65KM"
                
            },
            {
                "slika" : "./slike/zajakna6.jpg",
                "staracijena": "105KM",
                "novacijena" : "90KM"
                
            },
    
            {
                "slika" : "./slike/znjakna1.jpg",
                "staracijena": "95KM",
                "novacijena" : "70KM"
                
            },
            {
                "slika" : "./slike/znjakna2.jpg",
                "staracijena": "300KM",
                "novacijena" : "245KM"
            },
            {
                "slika" : "./slike/znjakna3.jpg",
                "staracijena": "65KM",
                "novacijena" : "45KM"
                
            },
            {
                "slika" : "./slike/znjakna4.jpg",
                "staracijena": "95KM",
                "novacijena" : "75KM"
            
            },
            {
                "slika" : "./slike/znjakna5.jpg",
                "staracijena": "105KM",
                "novacijena" : "75KM"
            },
            {
                "slika" : "./slike/znjakna6.jpg",
                "staracijena": "75KM",
                "novacijena" : "50KM"
                
            }
        ]
    }
    var x= document.getElementById("demo")
    for (i=0; i<artik.proizvodi.length; i++){
        console.log(artik.proizvodi.length)
        var mojdiv=document.createElement("div")
        mojdiv.setAttribute("class","div1")
        var mojinput=document.createElement("input")
        mojinput.setAttribute("type","image")
        mojinput.setAttribute("src",artik.proizvodi[i].slika)
        mojinput.setAttribute("alt","submit")
        mojdiv.appendChild(mojinput)
        var mojbr=document.createElement("p")
        mojbr.innerHTML= "Stara cijena: " + artik.proizvodi[i].staracijena
        mojdiv.appendChild(mojbr)
        var mojbr2=document.createElement("p")
        mojbr2.innerHTML="Nova cijena: "+ artik.proizvodi[i].novacijena
        mojdiv.appendChild(mojbr2)
        var moja=document.createElement("a")
        moja.setAttribute("href","kupi.html")
        moja.setAttribute("class","button")
        moja.innerHTML="Kupi"
        mojdiv.appendChild(moja)
        x.appendChild(mojdiv)

    }
}


		