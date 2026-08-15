import React from 'react';
import img1 from '../assets/ma1.jpg';
import img2 from '../assets/ma2.png';
import img3 from '../assets/ma3.png';
import img4 from '../assets/ma4.png';
import Circle from '../circle';
import './moreabout.css';
import '../App.css';

const predefinedPositions = [
  { top: '10%', left: '20%' },
  { top: '30%', left: '40%' },
  { top: '50%', left: '60%' },
  { top: '70%', left: '80%' },
  { top: '80%', left: '10%' },
  { top: '60%', left: '30%' },
  { top: '40%', left: '50%' },
  { top: '20%', left: '70%' },
  { top: '10%', left: '80%' },
  { top: '50%', left: '10%' },
];

const colors = [
  'rgb(255, 0, 0)',   // red
  'rgb(0, 255, 0)',   // green
  'rgb(0, 0, 255)',   // blue
  'rgb(255, 255, 0)', // yellow
  'rgb(64, 224, 208)',// turquoise
  'rgb(0, 255, 255)', // cyan
  'rgb(128, 0, 128)', // purple
  'rgb(255, 165, 0)', // orange
  'rgb(75, 0, 130)',  // indigo
  'rgb(255, 192, 203)'// pink
];

const tableData = [
  { column1: '<h1>Introduction</h1><p>My name is Riley Elphaba Anderson. I was born in Minnesota. I am 13 years old and I love ice hockey. After my dad got a new job, we moved to San Francisco.</p>', column2: img1 },
  { column1: img2, column2: '<h1>Family</h1><p>The Andersons - This is my mom, my dad, and me when I was little.</p>' },
  { column1: "<h1>Interests</h1><p>My primary interest is hockey. I have played for both the Minnesota team, Prairie Dogs, and the San Francisco team, Foghorns. While excelling with the Foghorns, I also had a shot at the Firehawks. Sometimes, I miss my old hockey team. I also took some piano lessons but eventually got bored of them.</p>", column2: img3 },
  { column1: img4, column2: "<h1>Friends</h1><p>Bree and Grace are my best friends. One day, Grace was doing a presentation on money in front of the whole class, only to clumsily drop her jar of money on the floor. As the class laughed at her, I stood up to assist her and told her I drop things all the time too. Bree also came to assist her, and that's when we became best friends.</p>" },
];

const MoreAbout = () => {
  return (
    <div className='more-container'>
      {predefinedPositions.map((pos, index) => (
      <Circle key={index} top={pos.top} left={pos.left} color={colors[index % colors.length]} />
    ))}
    <div className="table-container">
      <table>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>
                {typeof row.column1 === 'string' && row.column1.startsWith('<') ? (
                  <div dangerouslySetInnerHTML={{ __html: row.column1 }} />
                ) : (
                  <img src={row.column1} alt={`Row ${index + 1} Column 1`} className="table-img" />
                )}
              </td>
              <td>
                {typeof row.column2 === 'string' && row.column2.startsWith('<') ? (
                  <div dangerouslySetInnerHTML={{ __html: row.column2 }} />
                ) : row.column2.startsWith('Row') ? (
                  row.column2
                ) : (
                  <img src={row.column2} alt={`Row ${index + 1} Column 2`} className="table-img" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MoreAbout;
