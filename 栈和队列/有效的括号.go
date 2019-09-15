func isValid(s string) bool {
    stack := []string{}
    // 后括号映射表
    frontBracket := map[string]string{ ")":"(", "]":"[", "}":"{" }

    for _, x := range s {
        if x=='(' || x=='[' || x=='{' {     // 遇到前括号，入栈
            stack = append(stack,string(x))     
        } else if x==')' || x==']' || x=='}' {    // 遇到后括号，判断
            if len(stack)!=0 && stack[len(stack)-1] == frontBracket[string(x)] { // 栈非空，和栈顶元素匹配，匹配成功，出栈
                stack = stack[0:len(stack)-1]
            } else {    // 栈空或者匹配失败，返回错误
                return false
            }
        }
    }
    if (len(stack)==0) {
        return true
    } else {
        return false
    }
}
