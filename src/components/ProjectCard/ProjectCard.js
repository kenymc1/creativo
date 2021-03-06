import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import PropTypes from 'prop-types';

import './ProjectCard.scss';
import projectShape from '../../helpers/propz/projectShape';
// import SingleProject from '../SingleProject/SingleProject';

class ProjectCard extends React.Component {
  static propTypes = {
    project: projectShape.projectShape,
    setSingleProject: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
    editAProject: PropTypes.func.isRequired,
  }

  deleteCardEvent = (e) => {
    e.preventDefault();
    const { project, removeCard } = this.props;
    removeCard(project.id);
  }

  editProjectEvent = (e) => {
    e.preventDefault();
    const { editAProject, project } = this.props;
    editAProject(project);
  }

  openSingleProjectEvent = (e) => {
    e.preventDefault();
    const { project, setSingleProject } = this.props;
    setSingleProject(project.id);
  }

  render() {
    const { project } = this.props;
    // console.log('project', project);
    return (

      <div className="Project col-4">
        <Accordion>
        <Card>
    <Card.Header className="card-header">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">

          <h3 className="card-title">:: {project.name} ::</h3>
          </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
    <Card.Body>
          <div class="panel-body">
            <small>Client:</small>
          <h5 className="card-subtitle mb-2 text-muted">{project.clientName}</h5>
            <small>Date due:</small>
          <h4>{project.dueDate}</h4>
            <small>Project Type:</small>
          <h5>{project.selectedType.name}</h5>
            <small>Description:</small>
          <p>{project.description}</p>
          <button className="btn " onClick={this.openSingleProjectEvent}><i className="fas fa-eye"></i></button>
          <button className="btn " onClick={this.editProjectEvent}><i className="fas fa-edit"></i></button>
          <button className="btn " onClick={this.deleteCardEvent}><i className="fas fa-trash-alt"></i></button>
        </div>
          </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
        </div>

    );
  }
}

export default ProjectCard;
