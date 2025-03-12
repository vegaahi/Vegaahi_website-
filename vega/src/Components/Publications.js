import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaRegFileAlt, FaBookOpen, FaCheckCircle, FaRegClock, FaBullhorn, FaLink, FaTools } from 'react-icons/fa';

const Publications = () => {
  return (
    <Container>
      <h1 className="text-center my-4 text-black">Research Publication Guide</h1>

      {/* Section 1: Types of Publications */}
      <Row className="mb-4">
        <Col>
          <div className="border p-3 rounded shadow-sm">
            <h3 className="text-black"><FaRegFileAlt style={{ color: '#007bff' }} /> 1. Figuring out Types of Publications</h3>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Technical Papers:</strong> Presented at conferences and often published in proceedings.</ListGroup.Item>
              <ListGroup.Item><strong>Journal Articles:</strong> Detailed studies published in academic journals, subject to peer review.</ListGroup.Item>
              <ListGroup.Item><strong>Review Papers:</strong> Comprehensive summaries of a specific research area.</ListGroup.Item>
              <ListGroup.Item><strong>Case Studies:</strong> In-depth studies of real-world applications.</ListGroup.Item>
              <ListGroup.Item><strong>Short Papers or Notes:</strong> Concise works on specific findings.</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>

      {/* Section 2: Choosing the Right Platform */}
      <Row className="mb-4">
        <Col>
          <div className="border p-3 rounded shadow-sm">
            <h3 className="text-black"><FaBookOpen style={{ color: '#28a745' }} /> 2. Choosing the Right Platform</h3>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Elsevier Journals:</strong> Popular in areas like Data Science, AI, Embedded Systems, etc.</ListGroup.Item>
              <ListGroup.Item><strong>IEEE Journals/Conferences:</strong> Known for Engineering, Computer Science, and Electronics.</ListGroup.Item>
              <ListGroup.Item><strong>Springer Journals:</strong> Focus on multidisciplinary research.</ListGroup.Item>
              <ListGroup.Item><strong>Scopus-Indexed Journals:</strong> Covers a wide range of fields with indexing reliability.</ListGroup.Item>
              <ListGroup.Item><strong>UGC-CARE:</strong> Focused on ensuring journals meet quality standards in specific regions.</ListGroup.Item>
              <ListGroup.Item><strong>Open Access Platforms:</strong> Examples like MDPI offer high visibility.</ListGroup.Item>
              <ListGroup.Item><strong>Conferences:</strong> Global conferences like ACM, IEEE, etc.</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>

      {/* Section 3: Preparing Your Manuscript */}
      <Row className="mb-4">
        <Col>
          <div className="border p-3 rounded shadow-sm">
            <h3 className="text-black"><FaCheckCircle style={{ color: '#ffc107' }} /> 3. Setting up Your Manuscript</h3>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Abstract:</strong> A brief summary of objectives, methodology, results, and impact.</ListGroup.Item>
              <ListGroup.Item><strong>Introduction:</strong> Clear problem statement, objectives, and research gap.</ListGroup.Item>
              <ListGroup.Item><strong>Methodology:</strong> Detailed explanation of methods, experiments, or frameworks.</ListGroup.Item>
              <ListGroup.Item><strong>Results and Discussion:</strong> Key findings, statistical evidence, and interpretation.</ListGroup.Item>
              <ListGroup.Item><strong>Conclusion:</strong> Overview of contributions and future research scope.</ListGroup.Item>
              <ListGroup.Item><strong>References:</strong> Use reference styles like IEEE, APA, or as indicated by the publication.</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>

      {/* Section 4: Submission Process */}
      <Row className="mb-4">
        <Col>
          <div className="border p-3 rounded shadow-sm">
            <h3 className="text-black"><FaRegClock style={{ color: '#17a2b8' }} /> 4. Submission Process</h3>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Prepare Manuscript:</strong> Follow submission guidelines of the journal or conference.</ListGroup.Item>
              <ListGroup.Item><strong>Plagiarism Check:</strong> Ensure originality using tools like Turnitin or iThenticate.</ListGroup.Item>
              <ListGroup.Item><strong>Submit Online:</strong> Most platforms use online submission portals (e.g., Elsevier, IEEE).</ListGroup.Item>
              <ListGroup.Item><strong>Tracking:</strong> Monitor submission status on the portal.</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>

      {/* Section 5: Peer Review and Revision */}
      <Row className="mb-4">
        <Col>
          <div className="border p-3 rounded shadow-sm">
            <h3 className="text-black"><FaBullhorn style={{ color: '#dc3545' }} /> 5. Peer Review and Amendment</h3>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Peer Review:</strong> Reviewers assess for novelty, clarity, and scientific validity.</ListGroup.Item>
              <ListGroup.Item><strong>Revision:</strong> Address reviewer comments and resubmit revised manuscript.</ListGroup.Item>
              <ListGroup.Item><strong>Repetition:</strong> Repeat the process until acceptance.</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>

      {/* Section 6: Final Publication */}
      <Row className="mb-4">
        <Col>
          <div className="border p-3 rounded shadow-sm">
            <h3 className="text-black"><FaRegFileAlt style={{ color: '#007bff' }} /> 6. Final Publication</h3>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>After Acceptance:</strong> Paper goes through formatting and proofreading.</ListGroup.Item>
              <ListGroup.Item><strong>Online/Paper Publication:</strong> Published online or in print, indexed in databases like Scopus, Web of Science.</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>

      {/* Section 7: Common Challenges */}
      <Row className="mb-4">
        <Col>
          <div className="border p-3 rounded shadow-sm">
            <h3 className="text-black"><FaLink style={{ color: '#fd7e14' }} /> 7. Common Challenges</h3>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Rejections:</strong> Common in top-tier journals; refine and resubmit to appropriate venues.</ListGroup.Item>
              <ListGroup.Item><strong>Plagiarism Claims:</strong> Avoid plagiarism by always citing sources.</ListGroup.Item>
              <ListGroup.Item><strong>Formatting Issues:</strong> Adhere strictly to submission guidelines.</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>

      {/* Section 8: Recommended Resources */}
      <Row className="mb-4">
        <Col>
          <div className="border p-3 rounded shadow-sm">
            <h3 className="text-black"><FaTools style={{ color: '#6c757d' }} /> 8. Recommended Resources</h3>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Journal Locators:</strong> Elsevier Journal Finder, Springer Journal Suggester.</ListGroup.Item>
              <ListGroup.Item><strong>Author Tools:</strong> IEEE Author Tools, Elsevier Author Hub.</ListGroup.Item>
              <ListGroup.Item><strong>Research Communities:</strong> ResearchGate, IEEE Xplore.</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Publications;
