import React from 'react'

const UserAboutPage = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    <h2> About </h2>
    <div  style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
    <iframe style={{ margin:'0 10px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7483178803823!2d49.81287087571398!3d40.37010465847618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAzerbaijan%20Technical%20University!5e0!3m2!1sen!2saz!4v1701116869827!5m2!1sen!2saz" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <iframe style={{ margin:'0 10px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428490503037!2d49.851370575714384!3d40.37719495804513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1sen!2saz!4v1701117200442!5m2!1sen!2saz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}

export default UserAboutPage