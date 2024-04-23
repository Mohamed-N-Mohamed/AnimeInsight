import React from 'react';
import { favoriteAnimeList } from './json';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';

export default function FavoriteAnime() {
  const FirstPage = () => {
    const survey = new Model(favoriteAnimeList);
    console.log(survey.data);

    function saveData(survey) {
      const data = survey.data;
      console.log(data);
    }

    survey.onValueChanged.add(saveData);

    return <Survey model={survey} />;
  };

  return (
    <>
      <div className='p-4 text-center'>
        <h1>Select your Favorite Anime</h1>
      </div>

      <FirstPage />
    </>
  );
}
