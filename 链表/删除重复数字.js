var deleteDuplicates=(head)=>{
  var cur=head
  while(cur && cur.next){
      if(cur.val ==cur.next.val){
        cur.next=cur.next.next
      }else{
          cur.next=cur.next
      }
  }
  return head
}