/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

class Student {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.school = "CodersX";
    }
}

var student1 = new Student('Herry', '01');
console.log(student1);

