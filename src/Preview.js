import React, { useState, useEffect } from "react";
import "./App.css";
import data1 from "./Data.json";
import data2 from "./Data2.json";
import data3 from "./Data3.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faDownload 
} from "@fortawesome/free-solid-svg-icons";
//import { useNavigate } from "react-router-dom";

function Previous() {
  //const navigate = useNavigate();

  const [categories, setCategories] = useState([data1, data2, data3]);
  const [reachedDownloadPage, setReachedDownloadPage] = useState(false);
  //const [isPlaying, setIsPlaying] = useState(false);
  
  //console.log(categories);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const selectedCategory = categories[selectedCategoryIndex];
  //console.log(selectedCategory.category);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [timer, setTimer] = useState(5);
  const selectItem = selectedCategory.data[currentItemIndex];
  //console.log(selectItem);

  const handleClick = (index) => {
    setSelectedCategoryIndex(index);
    setCurrentItemIndex(0);
    setReachedDownloadPage(false);
    setTimer(5);
  };

  const handleNext = () => {
    if (selectItem.type !== "download") { 
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % selectedCategory.data.length);
      setTimer(5);
    }
  };

  const handlePrevious = () => {
    setCurrentItemIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex >= 0 ? newIndex : selectedCategory.data.length - 1;
    });
    setTimer(5);
  };

  

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = selectItem.filePath;
    //console.log(selectItem.filePath);
    anchor.setAttribute("download", true);
    anchor.click();
    setReachedDownloadPage(false);
  };

  useEffect(() => {
    if (!reachedDownloadPage && selectedCategory.data[selectedCategoryIndex].type !== 'download') {
      const interval = setInterval(() => {
        if (timer > 0 ) { 
          setTimer((prevTimer) => prevTimer - 1);
        } 
        else {
          if (selectedCategoryIndex !== selectedCategory.data.length - 1) {
            handleNext();
            setTimer(5);
          }
        }
      }, 1000);
  
      return () => clearInterval(interval);
    } else {
      // Reset timer when returning from download page
      setTimer(5);
    }
  }, [selectedCategoryIndex, timer, selectedCategory, reachedDownloadPage]);

  
  
 
  
  return (
    <div className="main-conatiner">
      <div className="App">
        <h1>SUBJECT LIST</h1>
        <br />
        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className="box"
              onClick={() => handleClick(index)}
            >
              {category.category}
              {""}
            </button>
          ))}
        </div>
      </div>
      <div className="SubjectData">
        <div>
          {selectItem.type === "image" && (
            <div>
              <h2>{selectedCategory.description}</h2>
              <hr className="custom-hr" />
              <img src={selectItem.filePath} alt={selectItem.heading} />
              <p className="question">{selectItem.question}</p>
            </div>
          )}
          {selectItem.type === "video" && (
            <div className="video">
              <h2>{selectItem.description2}</h2>
              <hr className="custom-hr" />
              <video controls autoPlay >
                <source src={selectItem.filePath} type="video/mp4" />
              </video>
              <div className="json-text">
                <p>{selectedCategory.data.map((data1) => data1.point1)}</p>
              </div>
            </div>
          )}
          {selectItem.type === "audio" && (
            <div className="audio-player">
              <h2>{selectItem.heading3}</h2>
              <hr className="custom-hr" />
              <audio controls autoPlay>
                <source src={selectItem.filePath} type="audio/mpeg" />
              </audio>
              <div className="json-text">
                <p>{selectedCategory.data.map((data1) => data1.point1)}</p>
              </div>
            </div>
          )}
          {selectItem.type === "question" &&
            selectItem.subject === "mathematics" && (
              <div className="audio-player">
                <h2>{selectItem.title}</h2>
                <hr className="custom-hr" />
                <div className="json-text">
                  <p>{selectItem.description4}</p>
                  <table>
                    <tbody>
                      {selectItem.matrix1.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, colIndex) => (
                            <td key={colIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="json-text">
                  <p>{selectItem.description5}</p>
                  <table>
                    <tbody>
                      {selectItem.matrix2.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, colIndex) => (
                            <td key={colIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="json-text">
                  <p>{selectItem.description6}</p>
                  <table>
                    <tbody>
                      {selectItem.matrix3.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, colIndex) => (
                            <td key={colIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="json-text">
                  <p>{selectItem.description7}</p>
                  <table>
                    <tbody>
                      {selectItem.matrix4.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, colIndex) => (
                            <td key={colIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          {selectItem.type === "question" &&
            selectItem.subject === "physics" && (
              <div className="audio-player">
                <h2>{selectItem.title}</h2>
                <hr className="custom-hr" />
                <div className="json-text">
                  <p>{selectItem.description4}</p>
                  <p>{selectItem.description5}</p>
                  <p>{selectItem.description6}</p>
                  <p>{selectItem.description7}</p>
                  <p>{selectItem.description8}</p>
                  <p>{selectItem.description9}</p>
                  <p>{selectItem.description10}</p>
                  <p>{selectItem.description11}</p>
                  <p>{selectItem.description12}</p>
                  <p>{selectItem.description13}</p>
                </div>
              </div>
            )}
          {selectItem.type === "question" &&
            selectItem.subject === "chemistry" && (
              <div className="audio-player">
                <h2>{selectItem.title}</h2>
                <hr className="custom-hr" />
                <div className="json-text">
                  <p>{selectItem.description4}</p>
                  <p>{selectItem.description5}</p>
                  <p>{selectItem.description6}</p>
                  <p>{selectItem.description7}</p>
                  <p>{selectItem.description8}</p>
                  <p>{selectItem.description9}</p>
                  <p>{selectItem.description10}</p>
                  <p>{selectItem.description11}</p>
                  <p>{selectItem.description12}</p>
                  <p>{selectItem.description13}</p>
                </div>
              </div>
            )}
          {selectItem.type === "download" && (
            <div className="download-page">
              <h2>{selectItem.title}</h2>
              <hr className="custom-hr" />
              <p>Click the button below to download the PDF file:</p>
              <button onClick={handleDownload}> Download <FontAwesomeIcon icon={faDownload} /></button>
            </div>
          )}
        </div>
       
        <div className="button-container">
          <div className="previous">
            <button onClick={handlePrevious} disabled={currentItemIndex === 0}>
              Previous <FontAwesomeIcon icon={faCircleChevronLeft} />
            </button>
          </div>
          <div className="previous">
            <button
              onClick={handleNext}
              disabled={currentItemIndex === selectedCategory.data.length - 1}
            >
              Next <FontAwesomeIcon icon={faCircleChevronRight} />
            </button>
          </div>
        </div>
        <br />
        {selectItem.type !== "download" && <div className="timer">Timer: {timer}s</div>}
        <br />
      </div>
    </div>
  );
}

export default Previous;
