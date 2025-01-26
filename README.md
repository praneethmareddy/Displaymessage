 ### Result: - **Inline code** (`const a = 5;`) is displayed as `Code` components. - **Code blocks** for JavaScript (`javascript`) and C++ (`cpp`) are syntax-highlighted. Let me know if you need further adjustments!

---

### Output:

- The JavaScript block will render inline as:  
  `[javascript] function greet(name) { console.log('Hello, ' + name + '!'); }`

- The C block will render inline as:  
  `[c] #include <stdio.h> int main() { printf("Hello, World!"); return 0; }`

- Normal inline code like `inline code` will remain unchanged.

---

### Install Dependencies:

Install the required packages:

```bash
npm install react-markdown remark-gfm @chakra-ui/react @chakra-ui/icons
