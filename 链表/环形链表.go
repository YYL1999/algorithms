func hasCycle(head *ListNode) bool {    // 快慢指针。假如爱有天意，那么快慢指针终会相遇
    if head == nil {
        return false
    }
    fastHead := head.Next       // 快指针，每次走两步
    for fastHead != nil && head != nil && fastHead.Next != nil {
        if fastHead == head {   // 快慢指针相遇，表示有环
            return true
        }
        fastHead = fastHead.Next.Next  
        head = head.Next        // 慢指针，每次走一步
    }
    return false
}

