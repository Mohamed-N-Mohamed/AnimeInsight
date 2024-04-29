import React from 'react';
import { favoriteAnimeList } from './first';
import { NotfavoriteAnimeList } from './second';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import StepWizard from 'react-step-wizard';
import Buttons from '../button/Buttons';

export default function FavoriteAnime() {
  const FirstPage = (props) => {
    const survey = new Model(favoriteAnimeList);
    survey.showNavigationButtons = false;
    survey.onValueChanged.add(saveData);

    const storageItemKey = 'anime-list';
    //restore survey results
    const prevData = window.localStorage.getItem(storageItemKey) || null;

    if (prevData) {
      const data = JSON.parse(prevData);
      survey.data = data;
    }

    function saveData(survey) {
      const data = survey.data;
      window.localStorage.setItem(storageItemKey, JSON.stringify(data));
    }

    //handle next page
    const handleNext = () => {
      if (survey.hasErrors()) {
        return;
      }
      props.nextStep();
    };

    console.log(props);

    const handlePrev = () => {
      if (props.currentStep === 1) {
        return;
      }
      props.previousStep();
    };

    return (
      <div className='first p-2'>
        <Survey model={survey} />
        <Buttons handlePrev={handlePrev} handleNext={handleNext} />
      </div>
    );
  };

  const SecondPage = (props) => {
    const survey = new Model(NotfavoriteAnimeList);
    survey.showNavigationButtons = false;

    const storageItemKey = 'anime-list';
    //restore survey results
    const prevData = window.localStorage.getItem(storageItemKey) || null;

    if (prevData) {
      const data = JSON.parse(prevData);
      survey.data = data;
    }

    function saveData(survey) {
      const data = survey.data;
      window.localStorage.setItem(storageItemKey, JSON.stringify(data));
    }

    survey.onValueChanged.add(saveData);

    const handleNext = () => {
      props.nextStep();
    };

    const handlePrev = () => {
      props.previousStep();
    };

    return (
      <div className='second p-2'>
        <Survey model={survey} />
        <Buttons handlePrev={handlePrev} handleNext={handleNext} />
      </div>
    );
  };

  return (
    <>
      <div className='p-4 text-center'>
        <h1>Select your Favorite Anime</h1>
      </div>

      <StepWizard>
        <FirstPage />
        <SecondPage />
      </StepWizard>
    </>
  );
}
