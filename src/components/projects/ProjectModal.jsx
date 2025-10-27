import { motion } from "framer-motion";
import { FiX, FiExternalLink } from "react-icons/fi";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="modal-close-button"
        >
          <FiX className="w-6 h-6" />
        </button>

        <img
          src={project.img}
          alt={project.title}
          className="modal-image"
        />

        <h2 className="modal-title">
          {project.title}
        </h2>

        <p className="modal-category">
          {project.category}
        </p>

        <p className="modal-description">
          {project.description}
        </p>

        {/* Role and Duration */}
        {(project.role || project.duration) && (
          <div className="modal-grid">
            {project.role && (
              <div>
                <h3 className="modal-label">
                  Role
                </h3>
                <p className="modal-value">
                  {project.role}
                </p>
              </div>
            )}
            {project.duration && (
              <div>
                <h3 className="modal-label">
                  Duration
                </h3>
                <p className="modal-value">
                  {project.duration}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div>
            <h3 className="modal-section-title">
              Technologies Used
            </h3>
            <div className="modal-tech-container">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="modal-tech-badge"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div>
            <h3 className="modal-section-title">
              Key Features
            </h3>
            <ul className="modal-features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Project Link */}
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-project-link"
          >
            <FiExternalLink className="mr-2" /> Visit Project
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
