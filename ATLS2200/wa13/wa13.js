// references:
// https://www.scaler.com/topics/add-property-to-object-javascript/
// https://flexiple.com/javascript/loop-through-object-javascript

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
console.log("***********QUESTION 1***********");
console.log(HR["employees"]);

// Question 2
console.log("***********QUESTION 2***********");
console.log(company["companyInfo"]);

// Question 3
console.log("***********QUESTION 3***********");
HR["employees"].push({
    "name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise eligible": false
    });
console.log(" - ", HR["employees"][3]);

// Question 4
console.log("***********QUESTION 4***********");
let total = 0;
for(const val of HR["employees"]){
    total += val.salary;
}
console.log(" - ", "Total salary for all company employees: ", total);

// Question 5
console.log("***********QUESTION 5***********");
function raiseTime(sal){
    sal = sal * 1.10;
    return sal;
}

for(const em of HR["employees"]){
    if(em["raise eligible"] == true){
        em.salary = raiseTime(em.salary);
        em["raise eligible"] = false;
        console.log(" - ", em.name, " got a raise and now earns: ", em.salary);
    }else{
        console.log(" - ", em.name, " did not get a raise and still earns: ", em.salary);
    }
}


// Question 6
console.log("***********QUESTION 6***********");
for(const em of HR["employees"]){
    if(em.name == "Anna" || em.name == "Sam"){
        em.wfh = true;
        console.log(" - ", em.name, " works from home!")
    }else{
        em.wfh = false;
        console.log(" - ", em.name, " dose not work from home");
    }
}
