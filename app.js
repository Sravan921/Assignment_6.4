var employee = [];
employee[0] = {name:"Sravan",
    age:24,
    salary:500000,
    city:"Omaha",
    state:"Nebraska",
    pincode:68135};
employee[1] = {name:"Chandrika",
    age:29,
    salary:600000,
    city:"Irvine",
    state:"California",
    pincode:92620};
employee[2] = {name:"Vijay",
    age:34,
    salary:800000,
    city:"Dallas",
    state:"Texas",
    pincode:926845};
employee[3] = {name:"Suresh",
    age:27,
    salary:500000,
    city:"Miami",
    state:"Florida",
    pincode:484525};
employee[4] = {name:"Anvesh",
    age:21,
    salary:20000,
    city:"Boston",
    state:"North America",
    pincode:84521};

    for (var item in employee)
    {
        console.log(employee[item]);
    }
