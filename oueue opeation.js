// enqueue, dequeue, front , rear,isempty

class Queue {
            constructor(){
                      this.item = [];
                        
            }
            enqueue(element,length){
                        if(this.item==length-1){
                                    console.log("overflow");
                        } 
                        return this.item.push(element);
            }
            dequeue(){
                        if(this.item.length==0){
                                    console.log("underflow")
                        }
                        return this.item.shift();
            }
            front(){
                        return this.item(0);
            }
            isEmpty(){
                        if(this.item.length>0){
                                    return false;
                        }else {
                                    return true;
                        }
            }
}
let q1 = new Queue();

q1.enqueue(23);
q1.enqueue(24);
q1.enqueue(25);
console.log(q1.item);
console.log(q1.item.shift());
console.log(q1.item);
q1.isEmpty();
console.log(q1.item.length>0);