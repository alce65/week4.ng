import { interval, take, map, of, forkJoin } from "rxjs";

// timer(2000).subscribe((data) => console.log(data));

const rx1 = interval(1000).pipe(
  take(5),
  map((item) => (item + 1) * 10),
);

const rx2 = of(1, 2, 3, 4, 5);
const rx3 = of(1, 2, 3, 4, 5).pipe(map((item) => item * 10));

forkJoin([rx3, rx2]).subscribe(console.log);
