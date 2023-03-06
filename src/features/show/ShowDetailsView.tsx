import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchShowBySearchKeyword } from './showSlice';

const Styles = styled.div`
  input {
    padding: 1rem 0;
    font-size: 2rem;
    border: 2px solid #d3d3d3;
    border-radius: 1rem;
    text-align: center;
    width: 50rem;
    height: 1.6rem;
    &:hover,
    &:focus {
      border: 2px solid #d3d3d3;
      background-color: ;
      outline: none;
    }
    ,
    &::placeholder {
      color: #d3d3d3;
    }
  }
  .loading {
    margin-top: 3rem;
  }
  .error {
    margin-top: 3rem;
  }
  .details {
    margin-top: 3rem;
    list-style: none;
  }
  .error-symbol {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 4rem;
    margin-top: 3rem;
    margin-bottom: 1.6rem;
    font-weight: bold;
    line-height: 1.2;
  }
  .summary {
    margin-bottom: 1rem;
  }
  img {
    margin-top: 2.5rem;
    height: 25rem;
    border-radius: 1rem;
  }
  .tags {
    margin-top: 1.8rem;
    font-weight: bold;
    font-size: 1.4rem;

    span {
      margin-right: 1rem;
    }
  }
`;

const ShowDetailsView = () => {
  const show: any = useAppSelector((state) => state.show);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShowBySearchKeyword(show.keyword));
  }, []);

  return (
    <Styles>
      <h1>Show Finder</h1>
      <input
        placeholder='start typing...'
        onChange={(e) => {
          if (e.target.value)
            dispatch(fetchShowBySearchKeyword(e.target.value));
        }}
      />
      {show.loading && (
        <div className='loading'>
          <div className='error-symbol'>😵‍💫</div>
          <div>Loading...</div>
        </div>
      )}
      {!show.loading && show.error ? (
        <div className='error'>
          <div className='error-symbol'>⚠️</div>
          <div>{show.error}</div>
        </div>
      ) : null}
      <ul>
        {show.show.map((show: any) => {
          return !show.loading && show.show ? (
            <li className='details' key={show.show.id}>
              {!show.error ? (
                <div>
                  {!show.show.image ? null : (
                    <img src={show.show.image.medium} alt={show.show.name} />
                  )}
                  <div className='title'>
                    {show.show.name}{' '}
                    {`${
                      !show.show.rating.average
                        ? ''
                        : `(${show.show.rating.average})`
                    }`}
                  </div>
                  <div className='summary'>
                    {!show.show.summary
                      ? ''
                      : show.show.summary.replace(/(<([^>]+)>)/gi, '')}
                  </div>
                  <div className='tags'>
                    {show.show.genres &&
                      show.show.genres.map((el: string, i: number) => (
                        <span key={i}>{`#${el}`}</span>
                      ))}
                  </div>
                </div>
              ) : null}
            </li>
          ) : null;
        })}
      </ul>
    </Styles>
  );
};

export default ShowDetailsView;
