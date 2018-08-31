const {Subject} = require('rxjs')

const myObservable = new Subject()
myObservable.subscribe(value => console.log(value))
myObservable.next('foo')