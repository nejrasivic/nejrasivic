var i=0;
var imagefiles=['n1.jpg','n2.jpg','n3.png','n4.jpg','n5.jpg','n6.jpg'];
window.setInterval(startSlider,1500);
function startSlider()
{
	document.getElementById("topimg").src="slike/pocetna/"+imagefiles[i];
	i++;
	if(i>5)
	{
		i=0;
	}
}
// funkcija koja prikazuje slike na početnoj stranici
// mijenjaju se nakon određenog vremenskog intervala 
// funkcija slider
