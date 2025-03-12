import React from 'react';
import { FaReact, FaJsSquare, FaCss3Alt,  FaAngular, FaVuejs, FaPython, FaHtml5, FaBootstrap, FaAws, FaJava,  FaDatabase, FaBrain, FaShieldAlt } from 'react-icons/fa'; // Import icons from React Icons
import { DiPostgresql } from 'react-icons/di'; // PostgreSQL Icon
import { IoLogoNodejs } from 'react-icons/io'; // Node.js icon
import { SiMongodb, SiKotlin, SiDart, SiFlutter, SiPhp, SiTypescript } from 'react-icons/si'; // MongoDB, Kotlin, Dart, Flutter, PHP, TypeScript icons
import { TiSocialGithub } from 'react-icons/ti'; // GitHub Icon

const Tutorials = () => {
  const tutorials = [
    {
      title: 'React Basics',
      description: 'Learn the fundamentals of React, including components, JSX, and state management.',
      link: 'https://reactjs.org/docs/getting-started.html',
      icon: <FaReact />,
      iconColor: '#61dafb',
    },
    {
      title: 'JavaScript Fundamentals',
      description: 'A beginner-friendly guide to the core concepts of JavaScript, such as variables, functions, and loops.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction',
      icon: <FaJsSquare />,
      iconColor: '#f7df1e',
    },
    {
      title: 'CSS Flexbox Guide',
      description: 'Learn how to create flexible layouts with CSS Flexbox, including alignment, justification, and flex-direction.',
      link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      icon: <FaCss3Alt />,
      iconColor: '#1572b6',
    },
    {
      title: 'Node.js Express Tutorial',
      description: 'A comprehensive guide to building RESTful APIs with Node.js and Express.js.',
      link: 'https://expressjs.com/en/starter/installing.html',
      icon: <IoLogoNodejs />,
      iconColor: '#68a063',
    },
    {
      title: 'Angular Documentation',
      description: 'Official guide to getting started with Angular, a popular framework for building web applications.',
      link: 'https://angular.io/docs',
      icon: <FaAngular />,
      iconColor: '#dd1b16',
    },
    {
      title: 'Vue.js Documentation',
      description: 'Learn Vue.js from the official documentation, a progressive JavaScript framework.',
      link: 'https://vuejs.org/guide/introduction.html',
      icon: <FaVuejs />,
      iconColor: '#42b883',
    },
    {
      title: 'HTML5 Documentation',
      description: 'Official documentation for HTML5, the standard for web content.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      icon: <FaHtml5 />,
      iconColor: '#e34f26',
    },
    {
      title: 'Bootstrap 5 Documentation',
      description: 'Get started with the official Bootstrap 5 documentation.',
      link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
      icon: <FaBootstrap />,
      iconColor: '#7952b3',
    },
    {
      title: 'Tailwind CSS Documentation',
      description: 'Official Tailwind CSS documentation for utility-first CSS.',
      link: 'https://tailwindcss.com/docs',
      icon: <FaCss3Alt />,
      iconColor: '#38b2ac',
    },
    {
      title: 'Spring Boot Documentation',
      description: 'Official guide for getting started with Spring Boot.',
      link: 'https://spring.io/projects/spring-boot',
      icon: <FaJava />,
      iconColor: '#007396',
    },
    {
      title: 'Python Official Documentation',
      description: 'Comprehensive documentation for Python, covering basic syntax, modules, and libraries.',
      link: 'https://docs.python.org/3/',
      icon: <FaPython />,
      iconColor: '#306998',
    },
    {
      title: 'PHP Official Documentation',
      description: 'Official PHP documentation.',
      link: 'https://www.php.net/docs.php',
      icon: <SiPhp />,
      iconColor: '#777bb3',
    },
    {
      title: 'MySQL Documentation',
      description: 'Official MySQL documentation for database management.',
      link: 'https://dev.mysql.com/doc/',
      icon: <FaDatabase />,
      iconColor: '#00758f',
    },
    {
      title: 'Numpy Documentation',
      description: 'Official Numpy documentation for numerical computing in Python.',
      link: 'https://numpy.org/doc/stable/',
      icon: <FaPython />,
      iconColor: '#013243',
    },
    {
      title: 'Pandas Documentation',
      description: 'Official Pandas documentation for data manipulation in Python.',
      link: 'https://pandas.pydata.org/docs/getting_started/index.html',
      icon: <FaPython />,
      iconColor: '#150f42',
    },
    {
      title: 'TypeScript Documentation',
      description: 'Learn TypeScript from the official documentation.',
      link: 'https://www.typescriptlang.org/docs/',
      icon: <SiTypescript />,
      iconColor: '#3178c6',
    },
    {
      title: 'Git Documentation',
      description: 'Official Git documentation for version control.',
      link: 'https://git-scm.com/doc',
      icon: <TiSocialGithub />,
      iconColor: '#000000',
    },
    {
      title: 'GitHub Documentation',
      description: 'Official GitHub documentation.',
      link: 'https://docs.github.com/',
      icon: <TiSocialGithub />,
      iconColor: '#6e5494',
    },
    {
      title: 'PostgreSQL Documentation',
      description: 'Official PostgreSQL documentation.',
      link: 'https://www.postgresql.org/docs/',
      icon: <DiPostgresql />,
      iconColor: '#336791',
    },
    {
      title: 'MongoDB Documentation',
      description: 'Official MongoDB documentation for NoSQL database.',
      link: 'https://www.mongodb.com/docs/',
      icon: <SiMongodb />,
      iconColor: '#47a248',
    },
    {
      title: 'AI & ML Resources',
      description: 'Learn about Artificial Intelligence and Machine Learning.',
      link: 'https://scikit-learn.org/stable/',
      icon: <FaBrain />,
      iconColor: '#f5a623',
    },
    {
      title: 'Kotlin Documentation',
      description: 'Official Kotlin documentation for JVM and Android development.',
      link: 'https://kotlinlang.org/docs/',
      icon: <SiKotlin />,
      iconColor: '#0095d9',
    },
    {
      title: 'Flutter Documentation',
      description: 'Official Flutter documentation for building natively compiled applications.',
      link: 'https://flutter.dev/docs',
      icon: <SiFlutter />,
      iconColor: '#02569b',
    },
    {
      title: 'React Native Documentation',
      description: 'Official React Native documentation for building mobile apps.',
      link: 'https://reactnative.dev/docs/getting-started',
      icon: <FaReact />,
      iconColor: '#61dafb',
    },
    {
      title: 'Dart Documentation',
      description: 'Official Dart documentation for web and mobile development.',
      link: 'https://dart.dev/guides',
      icon: <SiDart />,
      iconColor: '#00b4ab',
    },
    {
      title: 'AWS Documentation',
      description: 'Official AWS documentation for cloud computing.',
      link: 'https://docs.aws.amazon.com/',
      icon: <FaAws />,
      iconColor: '#232f3e',
    },
    {
      title: 'Azure Documentation',
      description: 'Official Azure documentation for cloud services.',
      link: 'https://learn.microsoft.com/en-us/azure/',
      icon: <FaAws />,
      iconColor: '#0078d4',
    },
    {
      title: 'Cybersecurity Resources',
      description: 'Learn about cybersecurity from trusted resources.',
      link: 'https://www.cybrary.it/',
      icon: <FaShieldAlt />,
      iconColor: '#cc0000',
    },
    {
      title: 'Data Science Resources',
      description: 'Comprehensive data science tutorials and resources.',
      link: 'https://www.coursera.org/articles/data-science',
      icon: <FaPython />,
      iconColor: '#306998',
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tutorials</h2>
      <div className="list-group">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className="list-group-item list-group-item-action mb-3 shadow-sm rounded"
          >
            <div className="d-flex align-items-center">
              <div className="me-3" style={{ color: tutorial.iconColor, fontSize: '3rem' }}>
                {tutorial.icon}
              </div>
              <div>
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                <a href={tutorial.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read Tutorial
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
