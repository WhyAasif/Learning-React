let CurrentTime = () =>{

   let time = new Date();

  return <p> This is current time in India {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>;
};

export default CurrentTime;