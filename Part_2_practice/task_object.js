const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let {age} = plan;
        let {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        return console.log(str);
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);


function showExperience(plan) {
    let {skills: {exp}} = plan;
    return console.log(exp);
    
}
showExperience(personalPlanPeter);


function showProgrammingLangs(plan) {
    let str = '';
    let {skills: {programmingLangs}} = plan;

    for (let key in programmingLangs) {
        str += console.log(`Язык ${key} изучен на ${programmingLangs[key]}\n`);
}
    return str;
}
showProgrammingLangs(personalPlanPeter);


