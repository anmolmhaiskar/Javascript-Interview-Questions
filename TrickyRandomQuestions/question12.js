let obj = { lang: "Javascript" };

const lib = {};

lib.name = obj;
obj = null; // if we assign obj.name = "React" then output of below console log will be {lang: 'React'}

console.log(lib.name); //{ lang: 'Javascript' }
//This is because lib.name still points to the obj even though the obj is assigned to null (i.e. deferrenced) and hence { lang: 'Javascript' } this object has not yet garbage collected and possed the same object reference
