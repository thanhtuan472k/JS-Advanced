/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/

class Student {
    constructor(diemToan, diemLy, diemHoa) {
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    average() {
        return ((this.diemToan + this.diemLy + this.diemHoa) / 3);
    }
}

const studentA = new Student(10, 8, 9);
console.log(studentA.average());

const studentB = new Student(6.7, 6.5, 10);
console.log(studentB.average());