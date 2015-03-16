function Node(element) {
    this.element = element;
    this.next = null;
}


function LList() {
    // In the constructor, the list starts
    // with the head being a Node with value "head".
    // This is a placeholder of sorts.
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    //this.remove = remove;
    this.display = display;
}



//	function find(item)
//	
//	Purpose: Find node with value item.
//	
//	Arguments: 
//	
//		item - value to find
//	
//	Returns:
//	
//		Node with value item.

function find(item) {
    var currNode = this.head; // start from head
    while (currNode.element != item) {
        currNode = currNode.next; // iterate to next Node
    }
    return currNode; // return Node with value item
}




function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}



function display() {
    var currNode = this.head;
    string = "";
    while (!(currNode.next == null)) {
        string = string + "\n" + currNode.next.element;
        currNode = currNode.next;
    }
    alert(string);

}
