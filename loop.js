let profile = {
    "firstname" : 'hari',
    "lastname" : "haran",
    "e_mail" : "hariharan23.eee@gmail.com",
    "phone" : 9597054639,
    "linked_in" : "hariharan@linkedin.com",
    "github": "https://github.com/harijigsaw",
    "location" : "HOSUR",
    "school" : "S R M S SCHOOL",
    "college" : "KRCE IN TRICHY",
    "CGPA" : 8.15,
    "current_designation" : "Fresher",
    "ug_project" : "EV BATTERY MANAGEMENT",
    "aim" : "DEV",
    "hobbies" : "GAMES",
    

};

for ( let key in profile)
{
    value = profile[key]
    console.log(key,value)
}
//
//

Object.keys(profile).forEach(key => {
		const value = profile[key];
		console.log(key,value);
});
//
//

for (let [key,val] of Object.entries(profile))
{
    console.log(key,val)
}
//
//
//for loop
for (let i = 0 ;i<profile1.length;i++)
{
    console.log(profile1[i])
}

