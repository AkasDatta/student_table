
//Fetch 3D array in Javascript

let students = [
    [
        "class 1",
        "3 students",
        [
            "Akash",
            "Imtiaz",
            "Joy"
        ],
        "class 2",
        "4 students",
        [
            "Kawsar",
            "Bhubon",
            "Badhon",
            "Jishan"
        ],
        "class 3",
        "2 students",
        [
            "Parvez",
            "Himadri"
        ]
    ],
];

//Fetch it with forEach
students.forEach(student=>{
    student.forEach(single=>{
        console.table(single);
    });
});