let userType = "Employee";
let userCategory;
let userPrivilege;
let userRequirement;

switch (userType) {
    case "Employee":
        userCategory = "Dietary Services";
        userPrivilege = "None";
        userRequirement = "Enroll to access dietician interactions";
        break;
    case "Enrolled Member":
        userCategory = "Dietary Services";
        userPrivilege = "One-on-one interaction with dietician";
        userRequirement = "None"
        break;
    case "Subscriber":
        userCategory = "Partial Dietary Services";
        userPrivilege = "None";
        userRequirement = "Become an employee to fully access dietary services";
        break;
    case "Non-Subscriber":
        userCategory = "None";
        userRequirement = "Subscribe first";
        userPrivilege = "None";
}

console.log("User Category: ", userCategory);
console.log("User privileges: ", userPrivilege);
console.log("Rquirements: ", userRequirement);