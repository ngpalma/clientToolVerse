import React from "react";
import styles from "./About.module.css";
import Footer from "../Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Jose Antonio Flores",
      position: "Full Stack Developer",
      education: "Benemerita Universidad Autonoma de Puebla, graduado de la Academia Henry",
      previousEmployment: "Ejecutivo de Banca Comercial en Citi-Banamex",
      image: "https://ca.slack-edge.com/TPRS7H4PN-U03HZEVB12R-29f3aebacb75-512",
      linkedin: 'https://www.linkedin.com/in/antonio-flores-developer/'
    },
    {
        name: "Nicolás Gerardo Palma",
        position: "Full Stack Developer",
        education: "Colegio San Ramón Nonato; Academia Henry",
        previousEmployment: "Soporte técnico y vendedor autónomo",
        image: "https://ca.slack-edge.com/TPRS7H4PN-U03UA0HP41Z-5ef929594b0f-512",
        linkedin:"https://www.linkedin.com/in/nicolas-gerardo-palma/",
    },
    {
        name: "",
        position: "",
        education: "",
        previousEmployment: "",
        image: "",
        linkedinUrl:"",
    },
    {
        name: "",
        position: "",
        education: "",
        previousEmployment: "",
        image: "",
        linkedinUrl:"",
    },
    {
        name: "",
        position: "",
        education: "",
        previousEmployment: "",
        image: "",
        linkedinUrl:"",
    },
    {
        name: "",
        position: "",
        education: "",
        previousEmployment: "",
        image: "",
        linkedinUrl:"",
    },
    {
        name: "",
        position: "",
        education: "",
        previousEmployment: "",
        image: "",
        linkedinUrl:"",
    },
    {
        name: "",
        position: "",
        education: "",
        previousEmployment: "",
        image: "",
        linkedinUrl:"",
    },
    
  ];

  function sortTeamMembers(teamMembers) {
    const sortedArray = [...teamMembers];
    sortedArray.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return sortedArray
  };

  return (
    <div className={styles.ourTeamSection}>
      <h3 className={styles.ourTeamTitle}>Nuestro Equipo</h3>
      <div className={styles.teamMembersContainer}>
        {sortTeamMembers(teamMembers).map((member, index) => (
          <div id={`child-${index}`} onClick={() => member.linkedin && window.open(member.linkedin, '_blank')} key={index} className={styles.teamMember}>
          
            <img className={styles.memberImage} src={member.image} alt={member.name} />
            <div className={styles.memberDetails}>
              <h4 className={styles.memberName}>{member.name}</h4>
              <p className={styles.memberPosition}>{member.position}</p>
              <p className={styles.memberEducation}>Escolaridad: {member.education}</p>
              <p className={styles.memberEmployment}>Trayectoria Reelevante: {member.previousEmployment}</p>
              
            </div>
          
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default About;

