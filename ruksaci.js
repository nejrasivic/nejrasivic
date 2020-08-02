var i=0;
var imagefiles=['rruksak1.jpg','rruksak2.jpg','rruksak3.jpg','rruksak4.jpg','rruksak5.jpg'];
window.setInterval(startSlider,1500);
function startSlider()
{
	document.getElementById("topimg").src="slike/ruksaci/"+imagefiles[i];
	i++;
	if(i>4)
	{
		i=0;
	}
}
// funkcija koja prikazuje slike na početnoj stranici
// mijenjaju se nakon određenog vremenskog intervala 
// funkcija slider


