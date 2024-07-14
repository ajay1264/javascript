//kisi bhi value ko destructure kaise kare 

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "ajay"

}
const {courseInstructor:inst} = course  //we can also change the calling name as after this we can write the short  name of the inst

console.log(inst);

// api ka normal meaning hai
// agar apka kaam kisi dusre ke sar pe daal na ho usko api kehte hai 
// e.g ek hotel main order dene ke baad apko thodi farak padna chaiye ki woh kaise bana rha hai ya sekh raha hai ya tal arah hai 

//json

// google ke backend main for exp humme kya karna hai google kaise verify karega etc 
// pehle woh value xml main likhte the but use hum abb json main likhte hain {}

//json ki formaattting 
/* 
{
 "name": "ajay"
  "coursename": "js"
  "price": "999"
}
  */
