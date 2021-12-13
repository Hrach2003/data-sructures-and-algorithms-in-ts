import { Compare } from "./../../helpers/comparator";
import { Heap } from "./heap";

export class MaxHeap<T> extends Heap<T> {
  constructor(compare: Compare<T>) {
    super(compare);
  }

  isCorrectOrder(first: T, second: T): boolean {
    return this.comparator.greaterThanOrEqual(first, second);
  }
}
