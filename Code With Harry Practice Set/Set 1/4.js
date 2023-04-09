let a = prompt("Hey enter your age")
a=Number.parseInt(a)
switch (a){
    case(18):
        alert("you are able to drive")
        break;
    case(8):
        alert("you are not able to drive")
        break;
    default:
        alert("invalid age")
}
