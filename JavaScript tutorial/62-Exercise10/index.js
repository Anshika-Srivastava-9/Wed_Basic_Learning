function Business_Name_Generator(adjkey,Shopkey,wordkey) {
let adjective={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let Shop_Name={
1:"Engine",
2:"food",
3:"garment"
}
let Another_word={
1:"Bros",
2:"Limited",
3:"Hub"
}
let name = adjective[adjkey] + " " + Shop_Name[Shopkey] + " " + Another_word[wordkey];
return name;
}

    console.log( Business_Name_Generator(1,3,2));
    console.log( Business_Name_Generator(3,1,3));


