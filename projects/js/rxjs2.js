import { map, of } from "rxjs";

let rx = of(1, 2, 3, 4, 5);

rx = rx.pipe(map((item) => item * 2));

rx.subscribe({
  next: (data) => console.log(data),
  error: (error) => console.log(error.message),
  complete: () => {
    console.log("Se acabo el observable");
  },
});
