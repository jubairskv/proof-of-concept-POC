
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Data from "./Data.json";
// import Data2 from "./Data2.json"
// import Data3 from "./Data3.json"
// import { useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

// function SubjectData() {
//   const [datas, setDatas] = useState([Data, Data2, Data3])
//   //console.log(datas);
//   const location = useLocation();
//   const category = location.state?.category || {};
//   const currentCategory = datas.find(item => item.category === category);
//   console.log(currentCategory);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [timer, setTimer] = useState(10);
//   // console.log(currentCategory.data.map(data1 => data1.point5))

//   // useEffect(() => {
//   //   if (currentCategory.data[currentIndex].type !== 'audio') {
//   //     const interval = setInterval(() => {
//   //       if (timer > 0) {
//   //         setTimer((prevTimer) => prevTimer - 1);
//   //       } else {
//   //         if (currentIndex !== currentCategory.data.length - 1) {
//   //           handleNext();
//   //           setTimer(5);
//   //         }
//   //       }
//   //     }, 500);

//   //     return () => clearInterval(interval);
//   //   }
//   // }, [currentIndex, timer, currentCategory]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % currentCategory.data.length);
//   };
//   console.log('render');
//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + currentCategory.data.length) % currentCategory.data.length);
//   };

//   const currentItem = currentCategory.data[currentIndex];
//   console.log(currentItem);

//   return (
//     <div className="SubjectData">
//       <div>
//         {currentItem.type === 'image' && (
//           <div>
//             <h2>{currentCategory.description}</h2>
//             <hr className="custom-hr" />
//             <img src={currentItem.filePath} alt={currentItem.heading} />
//           </div>
//         )}
//         {currentItem.type === 'video' && (
//           <div className='video'>
//             <h2>{currentCategory.data.map(data1 => data1.description1)}</h2>
//             <hr className="custom-hr" />
//             <video controls autoPlay>
//               <source src={currentItem.filePath} type="video/mp4" />
//             </video>
//           </div>

//         )}
//         {currentItem.type === 'audio' && (
//           <div className="audio-player">
//             <h2>{currentCategory.data.map(data1 => data1.heading3)}</h2>
//             <hr className="custom-hr" />
//             <audio controls autoPlay>
//               <source src={currentItem.filePath} type="audio/mpeg" />
//             </audio>

//             <div className='json-text'>
//               <p>{currentCategory.data.map(data1 => data1.point1)}</p>
//               <h6>{currentCategory.data.map(data1 => data1.point2)}</h6>
//               <h6>{currentCategory.data.map(data1 => data1.point3)}</h6>
//               <h6>{currentCategory.data.map(data1 => data1.point4)}</h6>
//               <h6>{currentCategory.data.map(data1 => data1.point5)}</h6>
//               <h6>{currentCategory.data.map(data1 => data1.point6)}</h6>
//             </div>
//           </div>
//         )}

//       </div>
//       <br />
//       {currentItem.type !== 'audio' && <div>Timer: {timer}s</div>}
//       <br />
//       <div className="button-container">
//         <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous <FontAwesomeIcon icon={faCircleChevronLeft} /></button>
//         <button onClick={handleNext} disabled={currentIndex === currentCategory.data.length - 1}>Next <FontAwesomeIcon icon={faCircleChevronRight} /></button>
//       </div>

//     </div>
//   );
// }

// export default SubjectData;

