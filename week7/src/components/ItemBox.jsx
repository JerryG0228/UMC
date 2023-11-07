import React from 'react';
import * as S from './ItemBoxStyled';
import { useNavigate } from 'react-router-dom';

// img url 앞에 다 붙이기 위해 선언
const BaseUrl = 'https://image.tmdb.org/t/p/w1280/';

export default function ItemBox({ title, poster_path, vote_average, overview }) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/tv/${title}`, {
      state: { title, poster_path, vote_average, overview },
    });
  };

  return (
    <S.ItemContainerBox onClick={onClickMovieItem}>
      <img src={BaseUrl + poster_path} alt='포스터사진' />
      <S.ItemInfoBox>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </S.ItemInfoBox>
      <S.OverviewContainerWrapperBox>
        <S.OverviewContainerBox>
          <h4>{title}</h4>
          <p>{overview}</p>
        </S.OverviewContainerBox>
      </S.OverviewContainerWrapperBox>
    </S.ItemContainerBox>
  );
}
