var getIntersectionNode = (l1,l2)=>{
    var list1=l1
    var list2=l2
    while(list1!==list2){
        list1=list1?list1.next:l2
        list2=list2?list2.next:l1
    }
    return list1
}
var getIntersectionNode = (head1,head2)=>{
    while(head1){
        var temp=head2
        while(temp){
            if(temp===head1) return head1;
            temp=temp.next
        }
        head1=head1.next
    }
}