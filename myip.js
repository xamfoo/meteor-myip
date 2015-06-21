if (Meteor.isClient) {
  Template.myip.onCreated(function () {
    Meteor.call('myip', function (e, r) {
      if (e) throw e;
      Session.set('result', r);
    });
  });

  Template.myip.helpers({
    result: function () {
      var result = Session.get('result');
      console.log(result);
      return EJSON.stringify(result, {indent: true});
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    myip: function () {
      console.log(this.connection);
      return this.connection;
    }
  });
}
