import React from 'react'

function AboutPage() {
  return (
    <div style={styles.container}>
    <h2 style={styles.heading}>About Us</h2>
    <p style={styles.paragraph}>
      Welcome to My Blog! This blog is created as part of my college project. It aims to provide a platform for
      sharing knowledge, ideas, and experiences in various fields of interest. We strive to deliver informative and
      engaging content to our readers.
    </p>
    <p style={styles.paragraph}>
      Our team of passionate writers and contributors is dedicated to delivering high-quality articles covering a wide
      range of topics such as technology, science, arts, culture, and much more. We hope you find our blog enjoyable
      and valuable.
    </p>
    <p style={styles.paragraph}>
      Feel free to explore our articles, leave comments, and share your thoughts. Thank you for visiting My Blog!
    </p>
  </div>
);
};

const styles = {
container: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh',
  backgroundColor: '#f2f2f2',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
},
heading: {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
},
paragraph: {
  fontSize: '18px',
  marginBottom: '10px',
  textAlign: 'center',
},
};
export default AboutPage