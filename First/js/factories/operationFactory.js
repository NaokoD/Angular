myApp.factory('Operations', function(){
  this.operations = [{
      id: 1,
      libelle: 'courant',
      date: Date.now(),
      montant: 202.50
  }, {
      id: 2,
      libelle: 'epargne',
      date: Date.now(),
      montant:350.50
  }];
  return this;
});
