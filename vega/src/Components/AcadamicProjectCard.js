import React, { useState } from 'react';
import { FaLaptop, FaMobileAlt, FaDatabase, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../css/AcadamicProjectCard.css';

const AcademicProjectCard = () => {
  const [modalData, setModalData] = useState({ show: false, title: '', content: '' });

  // Define motion variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const projectDetails = {
    "Web Development": {
  title: "Web Development Tools",
  content: (
    <div>
      <p>
        Explore modern frameworks and libraries like <b>React</b>, <b>Angular</b>, and <b>Vue.js</b>
        to build responsive and dynamic web applications.
      </p>
      <h5>1. Introduction to Web Development</h5>
      <ul>
        <li><b>Overview of web development</b></li>
        <li><b>Importance of web development</b></li>
        <li><b>Basic concepts and terminologies</b></li>
      </ul>
      <h5>2. HTML Basics</h5>
      <ul>
        <li><b>Structure of an HTML document</b></li>
        <li><b>Basic tags</b> (head, body, title, headings, paragraphs, lists, links)</li>
        <li><b>Attributes and elements</b></li>
        <li><b>Creating and saving HTML files</b></li>
      </ul>
      <h5>3. CSS Fundamentals</h5>
      <ul>
        <li><b>Introduction to CSS</b></li>
        <li><b>Selectors, properties, and values</b></li>
        <li><b>Styling HTML elements</b> (colors, fonts, margins, padding)</li>
        <li><b>Responsive design basics</b></li>
      </ul>
      <h5>4. JavaScript Essentials</h5>
      <ul>
        <li><b>Introduction to JavaScript</b></li>
        <li><b>Variables, data types, and operators</b></li>
        <li><b>Control structures</b> (if-else, loops)</li>
        <li><b>Functions and events</b></li>
      </ul>
      <h5>5. Building a Web Page</h5>
      <ul>
        <li><b>Combining HTML, CSS, and JavaScript</b></li>
        <li><b>Creating a simple web page</b></li>
        <li><b>Debugging and testing</b></li>
      </ul>
      <h5>6. Advanced Topics</h5>
      <ul>
        <li><b>Introduction to frameworks</b> (React, Angular, Vue.js)</li>
        <li><b>Working with APIs</b></li>
        <li><b>Version control with Git and GitHub</b></li>
      </ul>
      <h5>7. Project Work</h5>
      <ul>
        <li><b>Building a personal portfolio website</b></li>
        <li><b>Creating a blog or e-commerce site</b></li>
        <li><b>Collaborative projects</b></li>
      </ul>
      <h5>8. Resources and Tools</h5>
      <ul>
        <li><b>Recommended books and websites</b></li>
        <li><b>Useful tools and software</b> (code editors, browsers, etc.)</li>
        <li><b>Communities and forums for support</b></li>
      </ul>
    </div>
  ),
},

    "Mobile Development": {
  title: "Mobile Development Frameworks",
  content: (
    <div>
      <p>
        Gain expertise in <b>Flutter</b>, <b>React Native</b>, and <b>Swift</b> for building cross-platform mobile apps.
      </p>
      <h5>1. Introduction to Android Development</h5>
      <ul>
        <li><b>Overview of Android development</b></li>
        <li><b>Importance and applications</b></li>
        <li><b>Key concepts and terminologies</b></li>
      </ul>
      <h5>2. Setting Up the Development Environment</h5>
      <ul>
        <li><b>Installing Android Studio</b></li>
        <li><b>Configuring the Android SDK</b></li>
        <li><b>Creating your first Android project</b></li>
        <li><b>Understanding Android project structure</b></li>
      </ul>
      <h5>3. Android UI Components</h5>
      <ul>
        <li><b>Layouts and views</b></li>
        <li><b>Designing UI with XML</b></li>
        <li><b>Activity and Fragment lifecycle</b></li>
        <li><b>Handling user input and events</b></li>
      </ul>
      <h5>4. Android Basics</h5>
      <ul>
        <li><b>Intents and navigation</b></li>
        <li><b>Data storage (SharedPreferences, SQLite)</b></li>
        <li><b>Networking and APIs</b></li>
        <li><b>Working with multimedia (images, audio, video)</b></li>
      </ul>
    </div>
  ),
},

    "Data Science": {
  title: "Data Science Libraries",
  content: (
    <div>
      <ul>
        <li><b>NumPy</b>: Essential for numerical computations and data manipulation.</li>
        <li><b>Pandas</b>: Perfect for handling structured data.</li>
        <li><b>Matplotlib</b>: For comprehensive data visualization.</li>
      </ul>

      <h5>1. Introduction to Data Science</h5>
      <ul>
        <li><b>Overview of data science</b></li>
        <li><b>Importance and applications</b></li>
        <li><b>Key concepts and terminologies</b></li>
      </ul>

      <h5>2. Data Collection and Cleaning</h5>
      <ul>
        <li><b>Data sources (databases, web scraping, APIs)</b></li>
        <li><b>Data cleaning techniques (handling missing values, outliers)</b></li>
        <li><b>Data transformation and normalization</b></li>
      </ul>

      <h5>3. Exploratory Data Analysis (EDA)</h5>
      <ul>
        <li><b>Descriptive statistics</b></li>
        <li><b>Data visualization (histograms, scatter plots, bar charts)</b></li>
        <li><b>Identifying patterns and correlations</b></li>
      </ul>

      <h5>4. Statistical Analysis</h5>
      <ul>
        <li><b>Probability theory</b></li>
        <li><b>Hypothesis testing</b></li>
        <li><b>Regression analysis (linear, logistic)</b></li>
      </ul>

      <h5>5. Machine Learning Basics</h5>
      <ul>
        <li><b>Supervised vs. unsupervised learning</b></li>
        <li><b>Key algorithms (decision trees, k-nearest neighbours, clustering)</b></li>
        <li><b>Model evaluation and validation (cross-validation, confusion matrix)</b></li>
      </ul>

      <h5>6. Advanced Machine Learning</h5>
      <ul>
        <li><b>Deep learning and neural networks</b></li>
        <li><b>Natural language processing (NLP)</b></li>
        <li><b>Time series analysis</b></li>
      </ul>

      <h5>7. Data Science Tools and Technologies</h5>
      <ul>
        <li><b>Programming languages (Python)</b></li>
        <li><b>Data manipulation libraries (Pandas, NumPy)</b></li>
        <li><b>Machine learning frameworks (TensorFlow, scikit-learn)</b></li>
        <li><b>Data visualization tools (Matplotlib, Seaborn)</b></li>
      </ul>

      <h5>8. Projects and Case Studies</h5>
      <ul>
        <li><b>Real-world data science projects</b></li>
        <li><b>Capstone project</b></li>
        <li><b>Case studies and applications</b></li>
      </ul>
    </div>
  ),
}
,
   "AI & ML": {
  title: "AI & ML Libraries",
  content: (
    <div>
      <p>
        Our projects leverage powerful Python libraries to provide comprehensive AI and Machine Learning solutions:
      </p>

      <ul>
        <li><b>NumPy</b>: Essential for scientific computing with support for multi-dimensional arrays and matrices.</li>
        <li><b>Pandas</b>: Ideal for data manipulation and analysis with flexible data structures.</li>
        <li><b>Matplotlib</b>: A robust plotting library for creating static, animated, and interactive visualizations.</li>
        <li><b>Seaborn</b>: Built on Matplotlib, it offers advanced data visualization tools for statistical graphics.</li>
        <li><b>Scikit-Learn</b>: A versatile library for machine learning with a wide range of supervised and unsupervised learning algorithms.</li>
        <li><b>NLTK</b>: A leading platform for building Python programs to work with human language data.</li>
      </ul>

      <h5>Supervised Learning</h5>
      <p>
        Supervised learning involves training a model on labeled data, where the correct output is already known. Key libraries include:
      </p>
      <ul>
        <li><b>Scikit-Learn</b>: Provides tools for classification (e.g., decision trees, SVMs) and regression (e.g., linear regression, random forests).</li>
        <li><b>Pyplot (from Matplotlib)</b>: Used for visualizing results, often in supervised learning tasks like regression plots.</li>
      </ul>

      <h5>Unsupervised Learning</h5>
      <p>
        Unsupervised learning uses unlabeled data to find hidden patterns and structure in the data. Important libraries include:
      </p>
      <ul>
        <li><b>Scikit-Learn</b>: Supports clustering algorithms like k-means and hierarchical clustering, as well as dimensionality reduction techniques like PCA.</li>
        <li><b>Seaborn</b>: Offers visualization tools to explore the structure of data, such as pair plots and clustering heatmaps.</li>
      </ul>
    </div>
  ),
}

  };

  const handleSeeMore = (category) => {
    const data = projectDetails[category];
    if (data) {
      setModalData({ show: true, title: data.title, content: data.content });
    }
  };

  const closeModal = () => {
    setModalData({ show: false, title: '', content: '' });
  };

  const renderCard = (icon, category, colorClass) => (
    <div className="col-md-4 col-xl-3">
      <motion.div
        className={`cardd ${colorClass} order-card`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="cardd-block text-center">
          {icon}
          <h6 className="m-b-20">{category.toUpperCase()}</h6>
          {/* <p className="m-b-0">Completed Projects</p> */}
          <button
            className={`btn btn-${colorClass.split('-')[2]} mt-3`}
            onClick={() => handleSeeMore(category)}
          >
            See More
          </button>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="container">
      <h2 className="text-center m-4">Academic Projects</h2>
      <div className="row">
        {renderCard(<FaLaptop className="icon" />, 'Web Development', 'bg-c-blue')}
        {renderCard(<FaMobileAlt className="icon" />, 'Mobile Development', 'bg-c-green')}
        {renderCard(<FaDatabase className="icon" />, 'Data Science', 'bg-c-yellow')}
        {renderCard(<FaBrain className="icon" />, 'AI & ML', 'bg-c-pink')}
      </div>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="display-4 text-primary mb-4">Academic Projects</h2>
            <p className="lead text-muted">
              We provide hands-on academic projects that train students to solve real-world problems. 
              Our protocol-based applications leverage the latest technologies, ensuring students gain 
              practical experience and industry-relevant skills.
            </p>
          </div>
        </div>
      </div>

      {/* Reusable Modal */}
      {modalData.show && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg " role="document">
            <div className="modal-content bg-secondary text-white">
              <div className="modal-header">
                <h5 className="modal-title">{modalData.title}</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {modalData.content}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicProjectCard;
