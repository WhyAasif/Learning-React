function Hello() {

  let myName = "Aasif";
  let number = 456;
  let fullName = () => {
    return 'Mohd Aasif';
  }
  return <p>MessageNo: {number} , I am your master {fullName()}</p>
}
 
export default Hello;