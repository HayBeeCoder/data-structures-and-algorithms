
class Node{
    constructor(data){
        this.data = data 
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.count = 0
    }

    addFirst(value){
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.count += 1

    }
   
    addLast(value){
        let newNode = new Node(value)
        let currentNode = this.head
        if(this.head == null){
            this.head = newNode 
            this.count++
            return;
        } 
        while( currentNode.next != null){
            currentNode = currentNode.next
        }
        currentNode.next = newNode.next 
        this.count++
    }

}

module.exports = {LinkedList,Node}