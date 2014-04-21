var iter = require("./");

it('iterates a fn between given range', function(done){
  var t = 2;

  iter(3, 9, function(next, i){
    t++;
    expect(i).to.be.equal(t);
    next();
  }).done(function(){
    expect(t).to.equal(8);
    done();
  });
});

it('stops when an error is passed', function(done){
  var t   = -1,
      err = new Error();

  iter(5)
    .run(function(next, i){
      t++;
      expect(t < 4).to.true;

      if(i == 3){
        next(err);
        return;
      }

      next();
    })
  .error(function(errRef){
    expect(t).to.equal(3);
    expect(errRef).to.equal(err);
    done();
  });
});

it('should work with sync functions as well', function(done){
  var ctr = 0;

  iter(10)
    .run(function (done, i) {
      expect(i).to.equal(ctr++);
      if (i % 2 == 0) return done();
      setTimeout(done, 50, undefined);
    })
    .done(function () {
      expect(ctr).to.equal(10);
      done();
    });
});

describe('parallel', function(){

  it('runs paralelly', function(done){
    var ctr = 0;

    iter.parallel(10)
      .run(function (done, i) {
        expect(i).to.equal(ctr++);
        setTimeout(function () {
          done();
        }, 10);
      })
      .done(function () {
        expect(ctr).to.equal(10);
        done();
      });
  });

  it('still runs in order', function(done){
    var coll = [];

    iter.parallel(5)
      .run(function (done, i) {
        setTimeout(function () {
          coll.push(i);
          done();
        }, 1000 - (i*250));
      })
      .done(function () {
        expect(coll).to.deep.equal([4, 3, 2, 1, 0]);
        done();
      });
  });

  it('may not actually be async', function(done){
    var ctr = 0;

    iter.parallel(10)
      .run(function (done, i) {
        expect(i).to.equal(ctr++);
        if (i % 2 == 0) return done();
        setTimeout(done, 50, undefined);
      })
      .done(function () {
        expect(ctr).to.equal(10);
        done();
      });
  });

  it('keeps running on errors', function(done){
    var ctr = 0;

    iter.parallel(5)
      .run(function (done, i) { return done(i % 2 == 0 ? new Error('failed-' + i) : undefined); })
      .error(function (error, i) {
        expect(i).to.equal(ctr * 2);
        ctr++;
      })
      .done(function () {
        done();
      });
  });

});
