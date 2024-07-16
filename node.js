export { HashMapNode, HashSetNode };

class HashMapNode {
  constructor(key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashSetNode {
  constructor(key = null, next = null) {
    this.key = key;
    this.next = next;
  }
}
