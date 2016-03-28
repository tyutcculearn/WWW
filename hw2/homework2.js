function pass()
{
	url = document.getElementById("content").value;
	if(url == "") alert("Error,Please input XML url");
    xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","./" + url,false);
	xmlhttp.send(null);
	if(!xmlhttp.responseXML) alert("Error in XML file.");
	xmlcontent = xmlhttp.responseXML;
	if(url == "Japanfood.xml")
	{
		openwindows = window.open("");
		openwindows.document.write("<!DOCTYPE html>");
		openwindows.document.write("<html>");
		openwindows.document.write("<head><title>Japanfood</title></head>");
		openwindows.document.write("<body style = 'text-align: center; font-family:Cursive'>");
		openwindows.document.write("<h3>Menu</h3><br/>");
		foodname = xmlcontent.getElementsByTagName("foodname");
		price = xmlcontent.getElementsByTagName("price");
		description = xmlcontent.getElementsByTagName("description");
		calories = xmlcontent.getElementsByTagName("calories");
		for(i = 0; i < foodname.length; i++)
		{
			openwindows.document.write("<strong>" + foodname[i].childNodes[0].nodeValue + "</strong><br/>");
			openwindows.document.write(price[i].childNodes[0].nodeValue + "("+ calories[i].childNodes[0].nodeValue + ")<br/>");
			openwindows.document.write(description[i].childNodes[0].nodeValue + "<br/><br/>");
		}
		openwindows.document.write("<h3>Basketball</h3><br/>");
		openwindows.document.write("No data<br/>");
		openwindows.document.write("</body>");
		openwindows.document.write("</html>");
	} 
	else if(url == "basketball.xml")
	{
		openwindows = window.open("");
		openwindows.document.write("<!DOCTYPE html>");
		openwindows.document.write("<html>");
		openwindows.document.write("<head><title>Basketball</title></head>");
		openwindows.document.write("<body style = 'text-align: center; font-family:Cursive'>");
		openwindows.document.write("<h3>Menu</h3><br/>No data<br/>");
		openwindows.document.write("<h3>Basketball</h3><br/>");
		image = xmlcontent.getElementsByTagName("Image");
		Team = xmlcontent.getElementsByTagName("Team");
		City = xmlcontent.getElementsByTagName("City");
		Color = xmlcontent.getElementsByTagName("Color");
		BColor = xmlcontent.getElementsByTagName("BColor");
		Name = xmlcontent.getElementsByTagName("name");
		age = xmlcontent.getElementsByTagName("age");
		position = xmlcontent.getElementsByTagName("position");
		Coach = xmlcontent.getElementsByTagName("Coach");
		Stadium = xmlcontent.getElementsByTagName("Stadium");
		Video = xmlcontent.getElementsByTagName("Video");
		for(i = 0; i < image.length; i++)
			openwindows.document.write("<a href='#"+ i +"'><image src = " + image[i].childNodes[0].nodeValue + " style = 'width: 80px;height: 80px;'></image></a>");
		for(i = 0; i < image.length; i++)
		{
			openwindows.document.write("<center><a name="+ i +"><table border='1' style = 'width:550px;background-color:"+ BColor[i].childNodes[0].nodeValue+"; color:"+Color[i].childNodes[0].nodeValue+"; text-align:center'>");
			openwindows.document.write("<tr><td colspan='6' style = 'height:100px;'>" + Team[i].childNodes[0].nodeValue + "</td></tr>");
			openwindows.document.write("<tr><td rowspan='2' style = 'height:200px; width:80px;'><image src = " + image[i].childNodes[0].nodeValue + " style = 'width: 50px;height: 50px;'></image></td>");
			openwindows.document.write("<td colspan='3'>All-star</td><td>Coach</td><td>Stadium</td></tr>");
			openwindows.document.write("<tr><td>" + Name[i].childNodes[0].nodeValue + "</td>");
			openwindows.document.write("<td>Age:" + age[i].childNodes[0].nodeValue + "</td>");
			openwindows.document.write("<td>" + position[i].childNodes[0].nodeValue + "</td>");
			openwindows.document.write("<td>" + Coach[i].childNodes[0].nodeValue + "</td>");
			openwindows.document.write("<td>" + Stadium[i].childNodes[0].nodeValue + "</td></tr>");
			openwindows.document.write("<tr><td colspan='6'><iframe width='550' height='200' src='"+Video[i].childNodes[0].nodeValue + "'frameborder='0' allowfullscreen></iframe></td></tr>");
			openwindows.document.write("</table></a></center><br/>");
			openwindows.document.write("</body>");
			openwindows.document.write("</html>");
		}
	}
	else if(url == "mixed.xml")
	{
		openwindows = window.open("");
		openwindows.document.write("<!DOCTYPE html>");
		openwindows.document.write("<html>");
		openwindows.document.write("<head><title>mixed</title></head>");
		openwindows.document.write("<body style = 'text-align: center; font-family:Cursive'>");
		openwindows.document.write("<h3>Menu</h3><br/>");
		foodname = xmlcontent.getElementsByTagName("foodname");
		price = xmlcontent.getElementsByTagName("price");
		description = xmlcontent.getElementsByTagName("description");
		calories = xmlcontent.getElementsByTagName("calories");
		image = xmlcontent.getElementsByTagName("Image");
		Team = xmlcontent.getElementsByTagName("Team");
		City = xmlcontent.getElementsByTagName("City");
		Color = xmlcontent.getElementsByTagName("Color");
		BColor = xmlcontent.getElementsByTagName("BColor");
		Name = xmlcontent.getElementsByTagName("name");
		age = xmlcontent.getElementsByTagName("age");
		position = xmlcontent.getElementsByTagName("position");
		Coach = xmlcontent.getElementsByTagName("Coach");
		Stadium = xmlcontent.getElementsByTagName("Stadium");
		Video = xmlcontent.getElementsByTagName("Video");
		for(i = 0; i < foodname.length; i++)
		{
			openwindows.document.write("<strong>" + foodname[i].childNodes[0].nodeValue + "</strong><br/>");
			openwindows.document.write(price[i].childNodes[0].nodeValue + "("+ calories[i].childNodes[0].nodeValue + ")<br/>");
			openwindows.document.write(description[i].childNodes[0].nodeValue + "<br/><br/>");
		}
		openwindows.document.write("<h3>Basketball</h3><br/>");
		for(i = 0; i < image.length; i++)
			openwindows.document.write("<a href='#"+ i +"'><image src = " + image[i].childNodes[0].nodeValue + " style = 'width: 80px;height: 80px;'></image></a>");
		for(i = 0; i < image.length; i++)
		{
			openwindows.document.write("<center><a name="+ i +"><table border='1' style = 'width:550px;background-color:"+ BColor[i].childNodes[0].nodeValue+"; color:"+Color[i].childNodes[0].nodeValue+"; text-align:center'>");
			openwindows.document.write("<tr><td colspan='6' style = 'height:100px;'>" + Team[i].childNodes[0].nodeValue + "</td></tr>");
			openwindows.document.write("<tr><td rowspan='2' style = 'height:200px; width:80px;'><image src = " + image[i].childNodes[0].nodeValue + " style = 'width: 50px;height: 50px;'></image></td>");
			openwindows.document.write("<td colspan='3'>All-star</td><td>Coach</td><td>Stadium</td></tr>");
			openwindows.document.write("<tr><td>" + Name[i].childNodes[0].nodeValue + "</td>");
			openwindows.document.write("<td>Age:" + age[i].childNodes[0].nodeValue + "</td>");
			openwindows.document.write("<td>" + position[i].childNodes[0].nodeValue + "</td>");
			openwindows.document.write("<td>" + Coach[i].childNodes[0].nodeValue + "</td>");
			openwindows.document.write("<td>" + Stadium[i].childNodes[0].nodeValue + "</td></tr>");
			openwindows.document.write("<tr><td colspan='6'><iframe width='550' height='200' src='"+Video[i].childNodes[0].nodeValue + "'frameborder='0' allowfullscreen></iframe></td></tr>");
			openwindows.document.write("</table></a></center><br/>");
			openwindows.document.write("</body>");
			openwindows.document.write("</html>");
		}
	}
}
