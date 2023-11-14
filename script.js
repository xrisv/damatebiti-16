const currentDay = new Date().getDay()

switch (cuttentDay){
 case 0:
    console.log("კვირა")
    break;
 case 1:
    console.log("ორშაბათი")
    break;
 case 2:
    console.log("სამშაბათი")
    break;
 case 3:
    console.log("ოთხშაბათი")
    break;
 case 4:
    console.log("ხუთშაბათი")
    break;
 case 5:
    console.log("პარასკევი")
    break;
 case 6:
    console.log("შაბათი")
    break;
 default:
    console.log("არავალიდური დღე");
}