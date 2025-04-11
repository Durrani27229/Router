import React from 'react'

const Services = () => {
    const services = [
        {
          title: 'Web Development',
          description: 'Modern, responsive websites built with React, HTML, CSS, and JavaScript.',
        },
        {
          title: 'Mobile App Development',
          description: 'Cross-platform apps using React Native and cutting-edge tools.',
        },
        {
          title: 'UI/UX Design',
          description: 'Clean and intuitive designs focused on user experience.',
        },
        {
          title: 'SEO Optimization',
          description: 'Improve your search engine rankings and site performance.',
        },
      ];
  return (
    <main style={{ padding: '2rem', maxWidth: '900px', margin: 'auto',display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Our Services</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem', justifyContent: 'center' }}>
        {services.map((service, index) => (
          <div key={index} style={{ 
            flex: '1 1 300px',
            padding: '1.5rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Services
