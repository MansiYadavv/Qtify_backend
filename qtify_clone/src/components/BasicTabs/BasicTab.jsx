import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './BasicTab.module.css';

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ filteredData, value, handleChange }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          TabIndicatorProps={{ style: { backgroundColor: '#34c94b' } }}
          textColor="inherit"
          className={styles.tabs}
        >
          <Tab label="All" {...allyProps(0)} />
          <Tab label="Rock" {...allyProps(1)} />
          <Tab label="Pop" {...allyProps(2)} />
          <Tab label="Jazz" {...allyProps(3)} />
          <Tab label="Blues" {...allyProps(4)} />
        </Tabs>
      </Box>
    </Box>
  );
}

BasicTabs.propTypes = {
  filteredData: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
