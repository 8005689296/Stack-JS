class Stack {
            constructor(){
                        this.items = [];
            }
            add(element){
                        this.items.push(element);
            }
            remove(){
                        this.items.pop()
            }
            size(){
                        this.items.length;
            }
            peek(){
                        let a = this.items.length-1;
                        console.log(a);
            }
}
let st1 = new Stack();
st1.add(32);
st1.add(12);
st1.add(3);
st1.add(9);
st1.add(6);
console.log(st1.items);
st1.remove();
console.log(st1.items);
st1.peek();
console.log(st1.items.length-1);

console.log(st1.items.length);