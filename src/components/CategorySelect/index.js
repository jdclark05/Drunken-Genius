import { useState, useEffect } from 'react';
import '../../App.css';
import { navigate, Link } from '@reach/router';
import Backend from '../../database/questions';
import { confirmAlert } from 'react-confirm-alert';

const SelectCategories = (props) => {
    const categories = Backend.triviaData.slice(0, 34);
    const finalQuestionCategories = Backend.triviaData.slice(34);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [finalCategory, setFinalCategory] = useState([])
    const [numberOfCatsSelected, setNumberOfCatsSelected] = useState(10);
    const [selectedFinal, setSelectedFinal] = useState(1);

    const selectCategory = (cat) => {
        if (numberOfCatsSelected > 0 && numberOfCatsSelected < 11) {
            for(let i = 0; i < selectedCategories.length + 1; i++){
                if (selectedCategories[i] && selectedCategories[i].id === cat.id) {
                    setSelectedCategories(selectedCategories.filter((a) => a.id !== cat.id));
                    console.log(selectedCategories);
                    setNumberOfCatsSelected(numberOfCatsSelected + 1);
                    return;
                }
            }
            setSelectedCategories([...selectedCategories, cat]);
            setNumberOfCatsSelected(numberOfCatsSelected - 1);
            return;
        } else if (numberOfCatsSelected === 0) {
            for(let i = 0; i <= selectedCategories.length; i++){
                if (selectedCategories[i].id === cat.id) {
                    setSelectedCategories(selectedCategories.filter((a) => a.id !== cat.id));
                    setNumberOfCatsSelected(numberOfCatsSelected + 1)
                }
            }
        } return;
    }

    const selectFinalCategory = (cat) => {
        if (finalCategory.length === 0) {
            setFinalCategory([cat]);
            setSelectedFinal(selectedFinal - 1);
        } else if (finalCategory.length > 0) {
            for(let i = 0; i <= finalCategory.length; i++){
                if (finalCategory.length && finalCategory[i].id === cat.id) {
                    setFinalCategory(finalCategory.filter((a) => a.id !== cat.id));
                    setSelectedFinal(selectedFinal + 1);
                }
            }
        }
    }

    const isSelected = (cat) => {
        for (let i = 0; i < selectedCategories.length; i++) {
            if (selectedCategories[i].id === cat.id) {
                return true;
            }
        }
        return false;
    }

    const isSelectedFinal = (cat) => {
        for (let i = 0; i < finalCategory.length; i++) {
            if (finalCategory.length && finalCategory[i].id === cat.id) {
                return true;
            }
        }
        return false;
    }

    const leftToSelect = (finalOrPrimary) => {
        if (finalOrPrimary === "primary") {
            if (numberOfCatsSelected === 0) {
                return "READY!"
            } else {
                return `Select ${numberOfCatsSelected} More Categories`
            }
        } else if (finalOrPrimary === "final") {
            if (selectedFinal === 0) {
                return "READY!"
            } else {
                return "Select a Final Category"
            }
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('TIMEOUT')
        }, 1000);
        return () => clearTimeout(timer);
      }, [selectedCategories]);

    const onSubmitHandler = () => {
        if (numberOfCatsSelected === 0 && selectedFinal === 0) {
            props.catSubmit([selectedCategories, finalCategory]);
            navigate("/contestants")
        } else {
            confirmAlert({ 
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            {selectedFinal > 0 && numberOfCatsSelected > 0 ?
                                <h1 className="questionPopup">Must select {numberOfCatsSelected} more categories and 1 final round category to continue</h1>
                                : null
                            }
                            {selectedFinal === 0 && numberOfCatsSelected > 0 ?
                                <h1 className="questionPopup">Must select {numberOfCatsSelected} more categories to continue</h1>
                                : null
                            }
                            {selectedFinal > 0 && numberOfCatsSelected === 0 ?
                                <h1 className="questionPopup">Must select a final round category to continue</h1>
                                : null
                            }
                            <button 
                                id="showAnswerButton" 
                                onClick={(e) => onClose()} 
                            >
                                Close
                            </button>
                        </div>
                    );
                }
            })
        }
    }

    return(
        <>
            <h1 className="gameTitle2">Drunken Genius</h1>
            <div className="selectCategoriesMain">
                <div className="selectCatPageHeader">
                    <h1 className="CatPageHeader">Select Your Categories</h1>
                </div>
                <div className="contentHolder">
                <h1 className="selectionLabel"> {leftToSelect("primary")} </h1>
                    <div className="categoryTitles">
                        {categories.map((q) => {
                            return (
                                <h2 className={isSelected(q) ? "selectedQuestionLabels" : "questionLabels"} onClick={() => selectCategory(q)}>{q.category}</h2>
                            )
                        })}
                    </div>
                    <hr className="solid"></hr>
                    <h1 className="selectionLabel"> {leftToSelect("final")} </h1>
                    <div className="categoryTitles">
                        {finalQuestionCategories.map((q) => {
                            return (
                                <h2 className={isSelectedFinal(q) ? "selectedFinalQuestionLabel" : "finalQuestionLabel"} onClick={() => selectFinalCategory(q)}>{q.category}</h2>
                            )
                        })}
                    </div>
                </div>
                <div className="categorySubmit">
                    <button id="nextButton">
                        <Link className="linkText" id="linkText" to="/rules2" navigate="/rules2" activeStyle={{ color: '#fff'}}>Back</Link>
                    </button>
                    <button className="linkText" id="catSubmitButton" type="submit" onClick={onSubmitHandler}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default SelectCategories;