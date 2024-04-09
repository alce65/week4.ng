import { take, map, interval, of, mergeAll } from "rxjs";

const rx = interval(1000).pipe(
  take(5),
  map(() => of(1, 2, 3, 4, 5)),
);

rx.pipe(mergeAll()).subscribe(console.log);
