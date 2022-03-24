/* LinkedList */

class listNode {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}

class LinkedList {
     constructor(head = null) {
          this.head = head;
     }

     size() {
          let count = 0;
          let node = this.head;
          while (node) {
               count++;
               node = node.next;
          }
          return count;
     }

     clear() {
          this.head = null;
     }

     getLast() {
          let lastNode = this.head;
          if (lastNode) {
               while (lastNode.next) {
                    lastNode = lastNode.next;
               }
          }
          return lastNode;
     }

     getFirst() {
          return this.head;
     }

     appendLast(data) {
          let node = this.head;
          if (node) {
               while (node.next) {
                    node = node.next;
               }
               node.next = new listNode(data);
          } else {
               this.head = new listNode(data);
          }
     }

     removeNode(data) {
          let node = this.head;
          let aux = this.head;

          if (node.data == data) {
               this.head = node.next;
               return;
          }

          while (node.next.data != data && node.next != null) {
               node = node.next;
          }

          aux = node;
          node.next.next = aux;
          return;
     }

     appendFirst(data) {
          let node = this.head;
          let newNode = new listNode(data);

          if (node) {
               newNode.next = this.head;
               this.head = newNode;
          } else {
               this.head = new listNode(data);
          }
     }

     showList() {
          let node = this.head;
          while (node != null) {
               console.log(node.data);
               node = node.next;
          }
     }

     removeElement(element) {
          var current = this.head;
          var prev = null;

          while (current != null) {
               if (current.data === element) {
                    console.log(current.data);

                    if (prev == null) {
                         this.head = current.next;
                    } else {
                         prev.next = current.next;
                    }
                    this.size--;
                    return current.element;
               }
               prev = current;
               current = current.next;
          }
          return -1;
     }
}

const list = new LinkedList();

let button_commit = document.getElementById("button_commit");
let table = document.getElementById("content-table");
let count = 1;

function add() {
     list.appendLast(formulario.elements["name"].value);
     formulario.elements["name"].value = "";
     table.innerHTML += `
     <tr>
     <td >${count}</td>
     <td id = "${count}-${
          list.getLast().data
     }" indexTable = "${count}"  onclick = "returnDataNode(this)">${
          list.getLast().data
     }</td>
     <tr>
     `;
     count++;
}

function returnDataNode(data) {
     let dataInside = String(data.id);
     console.log("--> " + dataInside);
     let indexTeibel = dataInside.split("-");

     deleteRowTable(indexTeibel[0]);
     list.removeElement(indexTeibel[1]);

     console.log("-----------------------------------");
     list.showlist();
}

function deleteRowTable(index){
     let dataInside = String(index.id);
     let indexTeibel = dataInside.split("-");
     document.getElementById("content-table").deleteRow(parseInt(indexTeibel[0]));
}

function deleteD(data) {
     let index = parseInt(data.indexTable);
     console.log("IndexTable --> " + index);
     console.log("-----------");
}
const remove = (id) => {
     id.innerHTML = ''
}
