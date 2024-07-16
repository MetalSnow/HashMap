import { HashSetNode } from './node.js';

export default class HashSet {
  constructor(capacity = 16) {
    this.size = 0;
    this.capacity = capacity;
    this.loadFactor = 0.75;
    this.buckets = new Array(capacity);
  }

  hash(key) {
    let hashCode = 0;

    let primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  growBuckets() {
    this.capacity *= 2;
    const newBuckets = new Array(this.capacity);

    this.buckets.forEach((bucket) => {
      if (bucket) {
        let curr = bucket;
        let idx = this.hash(bucket.key);
        if (newBuckets[idx]) {
          newBuckets[idx].next = new HashSetNode(bucket.key);
        } else {
          newBuckets[idx] = new HashSetNode(bucket.key);
        }

        while (curr.next) {
          idx = this.hash(bucket.next.key);
          if (newBuckets[idx]) {
            newBuckets[idx].next = new HashSetNode(curr.next.key);
          } else {
            newBuckets[idx] = new HashSetNode(curr.next.key);
          }

          curr = curr.next;
        }
      }
    });

    this.buckets = newBuckets;
  }

  set(key) {
    if (!this.has(key)) {
      if (this.size >= this.loadFactor * this.capacity) {
        this.growBuckets();
      }
    }

    const idx = this.hash(key);
    const node = new HashSetNode(key);
    let current = this.buckets[idx];

    if (!this.buckets[idx]) {
      this.buckets[idx] = node;
      this.size += 1;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = node;
      this.size += 1;
    }
  }

  get(key) {
    const idx = this.hash(key);
    let current = this.buckets[idx];

    if (this.buckets[idx]) {
      if (this.buckets[idx].key === key) {
        return this.buckets[idx].value;
      } else {
        while (current.next) {
          return current.next.key === key
            ? current.next.value
            : (current = current.next);
        }
      }
    }
    return null;
  }

  has(key) {
    const idx = this.hash(key);
    let current = this.buckets[idx];

    if (this.buckets[idx]) {
      if (this.buckets[idx].key === key) {
        return true;
      } else {
        while (current.next) {
          return current.next.key === key ? true : (current = current.next);
        }
      }
    }
    return false;
  }

  remove(key) {
    let idx = this.hash(key);
    let current = this.buckets[idx];

    if (this.buckets[idx]) {
      if (this.buckets[idx].key === key) {
        this.buckets[idx] = undefined;
        this.size -= 1;
        return true;
      } else {
        while (current.next) {
          if (current.next.key === key) {
            current.next = null;
            this.size -= 1;
            return true;
          }
          current = current.next;
        }
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== undefined) {
        this.buckets[i] = undefined;
        this.size -= 1;
      }
    }

    this.capacity = 16;
    this.buckets = new Array(this.capacity);
  }

  keys() {
    let keys = [];

    this.buckets.forEach((bucket) => {
      let curr = bucket;
      if (bucket) {
        keys.push(bucket.key);

        while (curr.next) {
          keys.push(curr.next.key);

          curr = curr.next;
        }
      }
    });

    return keys;
  }
}
