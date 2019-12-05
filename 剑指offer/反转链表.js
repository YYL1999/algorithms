var reverseList =(head) => {
    let current=null
    let  newHead=head
    while(head && head.next){
        current=head.next
        head.next=current.next
        current.next=newHead
        newHead=current
    }
    return newHead
  }
  var reverseList =(head)=>{
      function reverse(head, prev) {
          if (head === null) {
              return prev;
          }
  
          next = head.next;
          head.next = prev;
  
          return reverse(next, head);
      }
  
      return reverse(head, null);
  
  }