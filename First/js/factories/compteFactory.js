myApp.factory('Comptes', function(){
  this.comptes = [{
      id: 1,
      libelle: 'courant',
      solde: 202.50
  }, {
      id: 2,
      libelle: 'epargne',
      solde: 350.50
  }];
  return this;
});
