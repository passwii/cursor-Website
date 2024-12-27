import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JobPosition } from './JobPositionData';
import styles from './About.module.css';

interface JobPositionsProps {
  positions: JobPosition[];
}

const JobPositions: React.FC<JobPositionsProps> = ({ positions }) => {
  const [expandedJob, setExpandedJob] = useState(-1);

  return (
    <table className={styles.jobsTable}>
      <thead>
        <tr>
          <th>招聘职位</th>
          <th>业务部门</th>
          <th>经验要求</th>
          <th>详情</th>
        </tr>
      </thead>
      <tbody>
        {positions.map((job, index) => (
          <React.Fragment key={index}>
            <tr 
              className={styles.jobRow}
              onClick={() => setExpandedJob(expandedJob === index ? -1 : index)}
            >
              <td>{job.title}</td>
              <td>{job.department}</td>
              <td>{job.experience}</td>
              <td>
                <button className={styles.expandButton}>
                  {expandedJob === index ? '收起' : '展开'}
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: expandedJob === index ? 180 : 0 }}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>
              </td>
            </tr>
            <AnimatePresence>
              {expandedJob === index && (
                <motion.tr
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <td colSpan={4}>
                    <div className={styles.jobDetails}>
                      <h4>{job.description}</h4>
                      <div className={styles.detailSection}>
                        <h5>岗位要求：</h5>
                        <ul>
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.detailSection}>
                        <h5>工作职责：</h5>
                        <ul>
                          {job.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.detailSection}>
                        <h5>福利待遇：</h5>
                        <ul>
                          {job.benefits.map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </td>
                </motion.tr>
              )}
            </AnimatePresence>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default JobPositions;