M.AutoInit();
 $(document).ready(function(){
            $(".dropdown-trigger").dropdown({
        coverTrigger: false,
        constrainWidth: false,
        closeOnClick: false,
        alignment: 'right',
    hover:true}); 
    $("#ep").dropdown({
        coverTrigger: false,
        constrainWidth: false,
        closeOnClick: false,
        alignment: 'right',
    }); 
$("#epp").dropdown({
        coverTrigger: false,
        constrainWidth: false,
        closeOnClick: false,
        alignment: 'right',
    }); 
//  instance.recalculateDimensions();
        
        $('.scrollspy').scrollSpy();
           $('.collapsible').collapsible();
            });

 var client_compte = new Vue({

        el: '#creer_mon_compte',
        data: {
            indication_nom: '',
            validnom: /^([a-zA-Z_Ã©Ã¨~Â¨]+\s*)+$/,
            validprenom: /^([a-zA-Z_Ã©Ã¨~Â¨]+\s*)+$/,
            validadresse: /^\d+(\s[a-zA-Z_Ã©Ã¨~Â¨0-9]+)+\s*$/,
            indication_prenom: '',
            indication_adresse: '',
            indication_password: '',
            indication_password2: '',
            indication_mail: '',
            erreurs: 0,
            mail: '',
            nom: '',
            prenom: '',

            password: '',
            password2: '',

            adresse: '',
            rules: [
                {message: " une lettre en miniscule est recommandÃ©.", regex: /[a-z]+/},
                {message: " une lettre en majuscule est obligatoire .", regex: /[A-Z]+/},
                {message: "le mot de passe doit contenir 8 characters en minimum.", regex: /.{8,}/},
                {message: " un nombre est recommandÃ©.", regex: /[0-9]+/}]

        },
        methods: {

            verifnom: function () {
                if (this.nom == "") {
                    this.indication_nom = "veuillez renseignez votre nom svp";
                    this.erreurs++;
                } else if (!this.validnom.test(this.nom))
                {
                    this.indication_nom = "veuillez renseignez votre un nom valid";
                    this.erreurs++;
                } else {
                    this.indication_nom = "âœ…";
                }
            },
            verifprenom: function () {
                if (this.prenom == "") {
                    this.indication_prenom = "veuillez renseignez votre prenom svp";
                    this.erreurs++;
                } else if (!this.validprenom.test(this.prenom))
                {
                    this.erreurs++;
                    this.indication_prenom = "veuillez renseignez  un prenom valid";
                } else {
                    this.indication_prenom = "âœ…";
                }
            },
            verifadresse: function () {
                if (this.adresse == "") {
                    this.indication_adresse = "veuillez renseignez votre adresse svp";
                    this.erreurs++;
                } else if (!this.validadresse.test((this.adresse)))
                {
                    this.indication_adresse = "veuillez renseignez une adresse valid svp";
                    this.erreurs++;
                } else {
                    this.indication_adresse = "âœ…";
                }
            },
            verifpassword: function () {
                let errors = [];
                if (this.password == "") {
                    this.erreurs++;
                    this.indication_password = "veuillez renseignez votre mots de passe";
                } else {
                    for (let condition of this.rules) {
                        if (!condition.regex.test(this.password)) {
                            errors.push(condition.message);
                        }
                    }
                    if (errors.length === 0) {
                        this.indication_password = "âœ…";
                    } else {
                        this.indication_password = "";
                        this.erreurs++;
                    }
                    return errors;
                }
            },
            verifpassword2: function () {

                if (this.password2 != this.password) {
                    this.indication_password2 = "veuillez renseignez des mots de passes identiques";
                    this.erreurs++;
                } else if (this.password2 == "") {
                    this.indication_password2 = "veuillez renseignez un mots de passe Ã  nouveau";
                    this.erreurs++;
                } else {
                    this.indication_password2 = "âœ…";
                }
            },
            verifmail: function () {
                if (this.mail == "") {
                    this.erreurs++;
                    this.indication_mail = "veuillez renseignez votre email svp";
                } else {
                    axios.get("../produits/requete_email", {
                        params: {
                            email: client_compte.mail
                        }
                    })
                            .then(function (response) {

                                if (response.data == 1)
                                {
                                    client_compte.indication_mail = "deja utilisÃ©";
                                    client_compte.erreurs++;
                                } else {
                                    client_compte.indication_mail = "";
                                }
                            })
                            .catch(function (error) {
                                alert(error);
                            });
                }

            },
            submit: function (e) {
                this.erreurs = 0;
                this.verifnom();

                this.verifprenom();

                this.verifadresse();

                this.verifpassword();

                this.verifmail();

                this.verifpassword2();

                if (this.erreurs == 0) {
               

                    e.target.submit();
                }


            }
        }



    });
  

    var identifier_client = new Vue({

        el: '#identifier',
        data: {
            indication_pass: '',
                       indication_email: '',
            erreurs: 0,
            email: '',
            pass: ''
        },
        methods: {

           
            verifemail: function () {
                
                if (this.email == "") {
                    this.erreurs++;
                    this.indication_email = "veuillez renseignez votre email";
                } else {
                    axios.get("https://dev.amorce.org/gafriad/ci/index.php/produits/requete_email", {
                        params: {
                            email:identifier_client.email
                        }
                    })
                            .then(function (response) {

                                if (response.data == 1)
                                {
                                    identifier_client. indication_email = "âœ…";
                                  
                                } else if(response.data == 0) {
                                    identifier_client. indication_email = "compte introuvable";
                                      identifier_client.erreurs++;
                                }
                            })
                            .catch(function (error) {
                                alert(error);
                            });
                }
                    
                    },
                 
            verifpass: function () {
                if (this.pass == "") {
                    identifier_client.erreurs++;
                     identifier_client.indication_pass = "veuillez renseignez votre password svp";
                } else {
                    identifier_client.erreurs = 0;  
                        identifier_client.verifemail(); 
                    
                   if(identifier_client.erreurs==0) {
                       
                       
                        axios.get("https://dev.amorce.org/gafriad/ci/index.php/User/requete_pass", {
                        params: {
                            email: identifier_client.email,
                            password:identifier_client.pass
                        }
                    })
                            .then(function (response) {

                                if (response.data == 1)
                                {
                                    identifier_client.indication_pass = "bon";
                                   
                                } else {
                                    identifier_client.indication_pass = "mot de passe erronÃ©";
                                      identifier_client.erreurs++;
                                }
                            })
                            .catch(function (error) {
                                alert(error);
                            });
                       
                   }
                   else{ identifier_client.indication_pass="veuillez renseignez votre email";
                      identifier_client.erreurs++;}  
                    
                }

            },
            submit: function (e) {
                this.erreurs = 0;
                this.verifemail();
                this.verifpass();
                if (this.erreurs == 0) {
                    alert(this.erreurs);

                    e.target.submit();
                }


            }
        }



    });

    var identifier_client2 = new Vue({

        el: '#identifier2',
        data: {
            indication_pass: '',
                       indication_email: '',
            erreurs: 0,
            email: '',
            pass: ''
        },
        methods: {

           
            verifemail: function () {
                
                if (this.email == "") {
                    this.erreurs++;
                    this.indication_email = "veuillez renseignez votre email";
                } else {
                    axios.get("https://dev.amorce.org/gafriad/ci/index.php/produits/requete_email", {
                        params: {
                            email:identifier_client2.email
                        }
                    })
                            .then(function (response) {

                                if (response.data == 1)
                                {
                                    identifier_client2. indication_email = "âœ…";
                                  
                                } else if(response.data == 0) {
                                    identifier_client2. indication_email = "compte introuvable";
                                      identifier_client2.erreurs++;
                                }
                            })
                            .catch(function (error) {
                                alert(error);
                            });
                }
                    
                    },
                 
            verifpass: function () {
                if (this.pass == "") {
                    identifier_client2.erreurs++;
                     identifier_client2.indication_pass = "veuillez renseignez votre password svp";
                } else {
                    identifier_client2.erreurs = 0;  
                        identifier_client2.verifemail(); 
                    
                   if(identifier_client2.erreurs==0) {
                       
                       
                        axios.get("https://dev.amorce.org/gafriad/ci/index.php/user/requete_pass", {
                        params: {
                            email: identifier_client2.email,
                            password:identifier_client2.pass
                        }
                    })
                            .then(function (response) {

                                if (response.data == 1)
                                {
                                    identifier_client2.indication_pass = "âœ…";
                                   
                                } else {
                                    identifier_client2.indication_pass = "mot de passe erronÃ©";
                                      identifier_client2.erreurs++;
                                }
                            })
                            .catch(function (error) {
                                alert(error);
                            });
                       
                   }
                   else{ identifier_client2.indication_pass="veuillez renseignez votre email";
                      identifier_client2.erreurs++;}  
                    
                }

            },
            submit: function (e) {
                this.erreurs = 0;
                this.verifemail();
                this.verifpass();
                if (this.erreurs == 0) {
                    alert(this.erreurs);

                    e.target.submit();
                }


            }
        }



    });



    var tri = new Vue({
        el: '#prix',
        data: {
            selected: '',
            valeur: '',
            liste: []

        },
        methods: {
            prix: function () {

                axios.get("https://dev.amorce.org/gafriad/ci/index.php/produits/requete_select", {
                    params: {
                        prix: tri.selected                    }
                })

                        .then(function (response) {

                            if (response.data)

                            {
                                tri.liste = response.data;

                            }

                        })
                        .catch(function (error) {
                            alert(error);
                        });











            }}});



