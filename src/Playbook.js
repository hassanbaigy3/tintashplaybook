import { useState } from 'react';

import Modal from './components/Modal/Modal'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Playbook() {
  const [showModal, setShowModal] = useState(false);
  const [showExpanded, setShowExpanded] = useState(false);

  const modalContent = (
    <div>
      <h3>Tintash</h3>
      <p>increases team efficiency and, therefore, less waste
        and higher profit margins.</p>
      <button onClick={() => setShowModal(false)}>Close</button>
    </div >
  );

  return (

    <div className="container">
      <div className="container-playbook"></div>
      <h1>Project Management Playbook</h1>
      <div class="row justify-content-left">
        <div className="col-4">
          <h1>Introduction</h1>
          <p>
            There exist in this world many a project management guide – different methodologies all evolving,
            various institutions and changing trends. <u onClick={() => setShowModal(true)}>Tintash’s PM playbook </u>
            is not another method, we are not in the business of reinventing wheels.
          </p>
          <p>
            There exist in this world many a project management guide – different methodologies all evolving,
            various institutions and changing trends. Tintash’s PM playbook is not another method, we are not in the business of reinventing wheels.
            All companies apply existing methodologies to their work as relevant. This translation to a company’s reality implies difference in terminology used for different stages of a project and a variation in obligatory requirements. Project Management at Tintash – like at any growing company – has and continues to evolve. Engineers have risen through ranks to become successful Project Managers, PMs coming from outside have brought their expertise and experiences with them, the company has groomed and mentored individuals to deliver projects the Tintash way.
            The <u onClick={() => setShowExpanded(true)}>PM Playbook</u> is a documentation and further development of this - Project Management the Tintash way. It is meant to ensure consistency in identity and quality in the way the organisation delivers projects to its clients as it grows rapidly and achieves its strategic ambitions. It lays out the minimum requirements for all projects, offers optional tools and expert tips.
          </p>
          {showModal && <Modal show={showModal} children={modalContent}>
          </Modal>}
        </div>

        {showExpanded ? (
          <div className="col-4 expanded-content">
            <h4>What does this do for me?</h4>
            <br />

            <b>Clients</b>: receive a consistent experience from Tintash over time
            and across individuals / functions. Tintash is able to
            demonstrate high value for money.
            <br />
            <br />

            <b>Team members</b>: have ownership of own role in a project and clear expectations from the organisation.
            <br />
            <br />

            <b>Project managers</b>: have clarity on their roles and expectations from the organisation and easy access to resources that they need.
            <br />
            <br />

            <b>Tintash</b>: increases team efficiency and, therefore, less waste
            and higher profit margins.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Playbook;