import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";

function makeAsync() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve(24);
    } else {
      reject(new Error("Error"));
    }
  });
}

function makeRx() {
  return new Observable((observer) => {
    for (let i = 1; i <= 10; i++) {
      observer.next(i);
    }
    // observer.error(new Error("Error Rx"));
    observer.complete("Fin");
  });
}

// makeAsync()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message))
//   .finally(() => console.log("Se acabo la promesa"));

// makeRx().subscribe((data) => console.log(data));

const sb = makeRx().subscribe({
  next: (data) => console.log(data),
  error: (error) => console.log(error.message),
  complete: () => {
    console.log("Se acabo el observable");
  },
});

sb.unsubscribe();

const s = new Subject();
const r = new ReplaySubject();
const b = new BehaviorSubject(1);
