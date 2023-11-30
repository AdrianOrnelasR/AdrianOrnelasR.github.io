let HR = {
    "employees": [{
        "name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raise eligible": true
    }, {
        "name": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raise eligible": true
    }, {
        "name": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raise eligible": false
    }]
}

let company = {
    "companyInfo": [{
        "companyName": "Tech Stars",
        "website": "www.techstars.site",
        "employees": HR["employees"]
    }]
}

// Question 1
console.log(HR["employees"]);

// Question 2
console.log(company["companyInfo"]);

// Question 3
HR["employees"].push({
    "name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise eligible": false
    });
console.log(HR["employees"][3]);

// Question 4
let total = 0;
for(const val of HR["employees"]){
    total += val.salary;
}
console.log("Total salary for all company employees: ", total);

// Question 5
for(const em of HR["employees"]){
    if(em["raise eligible"] == true){
        em.salary = em.salary * 1.10;
    }
}
console.log(HR["employees"]);

// Question 6
for(const em of HR["employees"]){
    if(em.name == "Anna" || em.name == "Sam"){
        em.wfh = true;
    }else{
        em.wfh = false;
    }
}
console.log(HR["employees"]);