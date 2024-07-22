/*

let userRole=prompt("please enter your user role!");
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:",accessLevel);



let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}



let userType=prompt("please enter your user type!");
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);



let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

*/


let role=prompt("What is your role in the company?");
let personEligible;

switch(role){

case "Employee":
personEligible='You are authorized to have access to "Dietary Services"';
break;

case "Enrolled Member":
personEligible='You are authorized to have partial access to facilitate "Dietary Services" only';
break;

case "Subscriber":
personEligible='You are authorized to have access to "Dietary Services"';
break;

default:
    personEligible="You need to enroll or at least subscribe first to avail this facility";


}
