function kepcsere(){
    document.getElementById('tipusKep').src="img/"+tipus+".png";
    if (tipus.includes("_")) {
        document.getElementById('tipusKep').alt=tipus.charAt(0).toUpperCase() + tipus.slice(1).replace('_',' ') + "gitár";
    } else {
        document.getElementById('tipusKep').alt=tipus.charAt(0).toUpperCase() + tipus.slice(1) + " gitár";
    }
    document.getElementById('tipusKep').title=document.getElementById('tipusKep').alt;
}