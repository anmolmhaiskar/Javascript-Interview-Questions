function show() {
  this.lang = "Javascript";
  this.showLang = () => {
    console.log(this.lang);
  };
}

const showObj = new show();
const func = showObj.showLang;
func(); //Javascript
