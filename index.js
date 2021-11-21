async function getproject(){
    try {
        let project = await axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

        document.getElementById("title").innerHTML = project.data[0].productTitle; 
        document.getElementById("price").innerHTML = "Price: N" + project.data[0].productPrice;
        document.getElementById("description").innerHTML = project.data[0].productDescription;
        document.getElementById("image").src = "https://project1-bonsai-jacobtimms.vercel.app/" + project.data[0].productImage;


        document.getElementById("title2").innerHTML = project.data[1].productTitle; 
        document.getElementById("price2").innerHTML = "Price: N" + project.data[1].productPrice;
        document.getElementById("description2").innerHTML = project.data[1].productDescription;
        document.getElementById("image2").src = "https://project1-bonsai-jacobtimms.vercel.app/" + project.data[0].productImage;


        document.getElementById("title3").innerHTML = project.data[2].productTitle; 
        document.getElementById("price3").innerHTML = "Price: N" + project.data[2].productPrice;
        document.getElementById("description3").innerHTML = project.data[2].productDescription;
        document.getElementById("image3").src = "https://project1-bonsai-jacobtimms.vercel.app/" + project.data[0].productImage;
    }
    catch (err) {
        console.error (err)
    }

}
getproject()