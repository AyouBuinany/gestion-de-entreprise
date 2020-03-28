var expres= require('express');
var fs= require('fs');
var app=expres();
var url = require('url');
var body_parser= require('body-parser');
app.use(body_parser.urlencoded({extended:false}));
app.use(expres.static('./tous'));
app.use(body_parser.json());
var t=[];
var list=[];
app.set('view engine','ejs');
 app.use('/',function(req,res,next){
     next();
 });


app.post('/',(req,resp)=>{
    console.log('request' +JSON.stringify(req.body));
   if(req.body.name==="" || req.body.password==="" || req.body.email==="" ){
resp.render('pages/file1',{error:'Remplir tous les champs!'});
    }
    else{
   for(var i=0;i<t.length;i++){
            console.log("le t " +t[i].email);
            if(req.body.email===t[i].email){
                console.log("le " + req.body.email + '= ' + t[i].email);
                resp.render('pages/file1',{error:'Valid your email Exist déja !'});
            return t.push();
            }
            else{
                resp.render('pages/file1',{error:'Your Welcome !'});
            }
        }
        t.push({
           "name": req.body.name,
           "email": req.body.email,
           "password": req.body.password
        });
    }
    console.log(t);
    fs.writeFile('./jsoninscris.json',JSON.stringify(t),(err)=>{
     console.log(err);

    });
});

app.post('/ejs',(req,resp)=>{
    for(var i=0;i<t.length;i++){
    if(req.body.email===t[i].email && req.body.password===t[i].password){
        var wd= fs.readFileSync('./jsonentreprise.json');
        list= JSON.parse(wd);
        resp.render('pages/Entreprise',{entr: list});
        app.get('/ejs',(request,response)=>{
            response.render('pages/Entreprise',{entr: list});
        });
    }

}
});

app.post('/d',function(req,resp){
if(req.body.Nom==="" || req.body.chef_département==="" || req.body.description==="" || req.body.Matricule==="" || req.body.salaire===""){
    resp.render('pages/Entreprise',{entr: list});
}
else{
for(var i in list){
    console.log('req' + req.body.entreprise);
    if(req.body.entreprise===list[i].nom){
        list[i].Département.push({
            "Nom":req.body.Nom,
            "chef_département":req.body.chef_département,
           "description":req.body.description,
           liste_matricules:[{
            "Matricule":req.body.Matricule,
            "nomMatricule":req.body.nomMatricule,
            "Prenom":req.body.Prenom,
            "Age":req.body.Age,
            "salaire":req.body.salaire
           }]
        });
        console.log("list2" +JSON.stringify(list[i]));
        fs.writeFile('./jsonentreprise.json',JSON.stringify(list),(err)=>{
            console.log(err);
        });
        resp.render('pages/Entreprise',{entr: list});
    }
}
}
});


app.get('/',(request,response)=>{
    response.render('pages/file1');
    var fileJson= fs.readFileSync('./jsoninscris.json');
    var data= JSON.parse(fileJson);
  t=data;
  console.log('data' +JSON.stringify(t));
});
app.post('/entre',(req,resp)=>{
    console.log('req' + JSON.stringify(req.body));
    if(req.body.nom==="" || req.body.locals==="" || req.body.descriptions==="" || req.body.Nom===""  || req.body.Matricule==="" || req.body.salaire===""){
        resp.render('pages/Entreprise',{entr: list,error:"REMPLIR TOUT LRS CHAMPS"});
return list.push();
    }else{
    for(var i in list){
        if(list[i].nom===req.body.nom){
            resp.render('pages/Entreprise',{entr: list,error:"Nom de entreprise déja exists"});
            return list.push();
        }else {
            console.log('list t est ' + JSON.stringify(list));
        }
    }
    list.push({
        "nom":req.body.nom,
        "locals":req.body.locals,
       "descriptions":req.body.descriptions,
       "Département":[{
        "Nom":req.body.Nom,
        "chef_département":req.body.chef_département,
       "description":req.body.description,
       liste_matricules:[{
        "Matricule":req.body.Matricule,
        "nomMatricule":req.body.nomMatricule,
        "Prenom":req.body.Prenom,
        "Age":req.body.Age,
        "salaire":req.body.salaire
       }]
    }]});
    }
    fs.writeFile('./jsonentreprise.json',JSON.stringify(list),(err)=>{
        console.log(err);
    });
    resp.render('pages/Entreprise',{entr: list,error:"YOUR WELCOME !"});
});
app.get('/entre',(request,response)=>{
    var wd= fs.readFileSync('./jsonentreprise.json');
        list= JSON.parse(wd);
    response.render('pages/Entreprise',{entr: list});
});
app.post('/new',(req,resp)=>{
    console.log(req.body.département);
   for(var i of list){
       for(var j of i.Département){
if(req.body.département===j.Nom){
    console.log(j.Nom +"=" + req.body.département );
    resp.render('pages/Salarie',{département:j.Nom,entreprise:i.nom,entr:j.liste_matricules});
       }
   }
}
});
app.post('/salarie',function(req,resp){
    for(var i of list){
        for(var j of i.Département){
     for(var z of j.liste_matricules){
   if(req.body.Prenom==="" || req.body.Age==="" || req.body.nomMatricule==="" || req.body.Matricule==="" || req.body.salaire==="" || req.body.Matricule===z.Matricule){
     resp.render('pages/Entreprise',{entr: list});
     return j.liste_matricules.push();
    }
}
     if(req.body.département===j.Nom){
        j.liste_matricules.push({
                "Matricule":req.body.Matricule,
                "nomMatricule":req.body.nomMatricule,
                "Prenom":req.body.Prenom,
                "Age":req.body.Age,
                "salaire":req.body.salaire
            });
            fs.writeFile('./jsonentreprise.json',JSON.stringify(list),(err)=>{
                console.log(err);
            });
        
            resp.render('pages/Salarie',{entreprise:i.nom,département:j.Nom,entr:j.liste_matricules});
}
     }
}
    });
app.listen(1230);
/*function clicked(){
    var m=[];
    var http= new XMLHttpRequest();
    http.open('GET','./jsoninscris.json',true);
    if(http.readyState==4 && http.status==200){
m=JSON.parse(http.responseText);
        for(var j=0;j<m.length;i++){
            if()
        }
    }
}*/