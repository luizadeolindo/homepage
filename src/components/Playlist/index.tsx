import React, { useState, useMemo } from "react";
import format from "date-fns/format";
import { useAuthenticated } from "../../components/VerifyAuth";
import apiClient from "../../services/api-client";
import { Link } from "react-router-dom";

import { VideoThumbnail } from "../VideoThumbnail";
import { VideoThumbnailProps } from "../VideoThumbnail/VideoThumbnailTypes";
import { PlaylistProps } from "./PlaylistTypes";
import "./Playlist.css";

const Playlist: React.FC<PlaylistProps> = ({ videos, favoriteVideos }) => {
  const { isAuthenticated } = useAuthenticated();

  // const videosFormatted = useMemo(() => {
  //   const originalVideosArr = [...videos];

  //   originalVideosArr.map((v) => {
  //     const formattedDate = format(new Date(v.createdAt), "dd/MM/yyyy");
  //     v.createdAt = formattedDate;
  //   });

  //   return originalVideosArr;
  // }, [videos]);

  const favoriteVideosId = useMemo<string[]>(() => {
    const favoriteVideosIdArr: null | string[] = [];

    if (favoriteVideos.length > 0) {
      console.log("cheguei");
      favoriteVideos.map((f) => {
        favoriteVideosIdArr.push(f.id);
      });
    } else {
      console.log("oxe");
    }

    return favoriteVideosIdArr;
  }, []);

  const handleAddNewFavorite = async (videoId: string) => {
    const url = `/videos/${videoId}/favoritos`;
    console.log("adding a video from favories");

    try {
      await apiClient.post(url);
    } catch (error) {
      console.log("Error to favorite a new video");
    }
  };

  const handleRemoveAFavorite = async (videoId: string) => {
    const url = `/videos/${videoId}/favoritos`;
    console.log("removing a video from favories");
    try {
      await apiClient.delete(url);
    } catch (error) {
      console.log("Error to favorite a new video");
    }
  };

  const checkIThatVideoIsAfavoriteVideo = (id: string) => {
    const videoId = favoriteVideosId.filter((fv) => {
      return fv === id;
    });

    if (videoId.length > 0) return true;
    else return false;
  };

  const handleFavorite = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    if (checkIThatVideoIsAfavoriteVideo(id)) {
      handleRemoveAFavorite(id);
    } else {
      handleAddNewFavorite(id);
    }
  };
  const aulao = videos.filter((video) => video.nome == "Aulão POO");
  const semana1 = videos.filter((video) => video.topico == "semana 01");
  const semana2 = videos.filter((video) => video.topico == "semana 02");
  const semana3 = videos.filter((video) => video.topico == "semana 03");
  const semana4 = videos.filter((video) => video.topico == "semana 04");
  const semana5 = videos.filter((video) => video.topico == "semana 05");
  const semana6 = videos.filter((video) => video.topico == "semana 06");
  const semana7 = videos.filter((video) => video.topico == "semana 07");
  const semana8 = videos.filter((video) => video.topico == "semana 08");
  const monitoria = videos.filter((video) => video.topico == "monitoria");

  return (
    <div className="home">
      {isAuthenticated && (
        <div className="playlist">
          <div className="playlistTitle">
            <h2 className="topicTitle">Favoritos</h2>
            <hr className="line" />
          </div>

          <div className="carosel">
            {favoriteVideos.length > 0
              ? favoriteVideos.map((video) => (
                  <ul>
                    <li key={video.id}>
                      <div className="video">
                        <div className="thumb">
                          <img src={video.thumbUrl} />
                          <button className="favorite">favorite</button>
                        </div>
                        <div className="title">{video.nome}</div>

                        <div className="subtitle">
                          {video.topico} - {video.createdAt}
                        </div>
                      </div>
                    </li>
                  </ul>
                ))
              : "Você ainda não possui vídeos favoritados."}
          </div>
        </div>
      )}

      <div className="playlist">
        <div className="playlistTitle">
          <h2 className="topicTitle">Aulões</h2>
          <hr className="line" />
        </div>

        <div className="carosel">
          {aulao.map((video) => (
            <ul>
              <li key={video.id}>
                <div className="video">
                  <div className="thumb">
                    <img src={video.thumbUrl} />
                    {isAuthenticated && (
                      <button
                        className="favorite"
                        onClick={(e) => handleFavorite(e, video.id)}
                      >
                        {checkIThatVideoIsAfavoriteVideo(video.id)
                          ? "Desfavoritar"
                          : "Favoritar"}
                      </button>
                    )}
                  </div>
                  <div className="title">{video.nome}</div>

                  <div className="subtitle">
                    {video.topico} - {video.createdAt}
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>

      {isAuthenticated && (
        <div className="playlist">
          <div className="playlistTitle">
            <h2 className="topicTitle">Semana 01</h2>
            <hr className="line" />
          </div>

          <div className="carosel">
            {semana1.map((video) => (
              <ul>
                <li key={video.id}>
                  <div className="video">
                    <div className="thumb">
                      <img src={video.thumbUrl} />
                      <button
                        className="favorite"
                        onClick={(e) => handleFavorite(e, video.id)}
                      >
                        {checkIThatVideoIsAfavoriteVideo(video.id)
                          ? "Desfavoritar"
                          : "Favoritar"}
                      </button>
                    </div>
                    <div className="title">{video.nome}</div>
                    <div className="subtitle">
                      {video.topico} - {video.createdAt}
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="playlist">
          <div className="playlistTitle">
            <h2 className="topicTitle">Semana 02</h2>
            <hr className="line" />
          </div>

          <div className="carosel">
            {semana2.map((video) => (
              <ul>
                <li key={video.id}>
                  <div className="video">
                    <div className="thumb">
                      <img src={video.thumbUrl} />
                      <button className="favorite">favorite</button>
                    </div>
                    <div className="title">{video.nome}</div>
                    <div className="subtitle">
                      {video.topico} - {video.createdAt}
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="playlist">
          <div className="playlistTitle">
            <h2 className="topicTitle">Semana 03</h2>
            <hr className="line" />
          </div>

          <div className="carosel">
            {semana3.map((video) => (
              <ul>
                <li key={video.id}>
                  <div className="video">
                    <div className="thumb">
                      <img src={video.thumbUrl} />
                      <button className="favorite">favorite</button>
                    </div>
                    <div className="title">{video.nome}</div>
                    <div className="subtitle">
                      {video.topico} - {video.createdAt}
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="playlist">
          <div className="playlistTitle">
            <h2 className="topicTitle">Semana 04</h2>
            <hr className="line" />
          </div>

          <div className="carosel">
            {semana4.map((video) => (
              <ul>
                <li key={video.id}>
                  <div className="video">
                    <div className="thumb">
                      <img src={video.thumbUrl} />
                      <button className="favorite">favorite</button>
                    </div>
                    <div className="title">{video.nome}</div>
                    <div className="subtitle">
                      {video.topico} - {video.createdAt}
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="playlist">
          <div className="playlistTitle">
            <h2 className="topicTitle">Semana 05</h2>
            <hr className="line" />
          </div>

          <div className="carosel">
            {semana5.map((video) => (
              <ul>
                <li key={video.id}>
                  <div className="video">
                    <div className="thumb">
                      <img src={video.thumbUrl} />
                      <button className="favorite">favorite</button>
                    </div>
                    <div className="title">{video.nome}</div>
                    <div className="subtitle">
                      {video.topico} - {video.createdAt}
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="playlist">
          <div className="playlistTitle">
            <h2 className="topicTitle">Semana 06</h2>
            <hr className="line" />
          </div>

          <div className="carosel">
            {semana6.map((video) => (
              <ul>
                <li key={video.id}>
                  <div className="video">
                    <div className="thumb">
                      <img src={video.thumbUrl} />
                      <button className="favorite">favorite</button>
                    </div>
                    <div className="title">{video.nome}</div>
                    <div className="subtitle">
                      {video.topico} - {video.createdAt}
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="playlist">
          <div className="playlistTitle">
            <h2 className="topicTitle">Semana 07</h2>
            <hr className="line" />
          </div>

          <div className="carosel">
            {semana7.map((video) => (
              <ul>
                <li key={video.id}>
                  <div className="video">
                    <div className="thumb">
                      <img src={video.thumbUrl} />
                      <button className="favorite">favorite</button>
                    </div>
                    <div className="title">{video.nome}</div>
                    <div className="subtitle">
                      {video.topico} - {video.createdAt}
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="playlist">
          <div className="playlistTitle">
            <h2 className="topicTitle">Semana 08</h2>
            <hr className="line" />
          </div>

          <div className="carosel">
            {semana8.map((video) => (
              <ul>
                <li key={video.id}>
                  <div className="video">
                    <div className="thumb">
                      <img src={video.thumbUrl} />
                      <button className="favorite">favorite</button>
                    </div>
                    <div className="title">{video.nome}</div>
                    <div className="subtitle">
                      {video.topico} - {video.createdAt}
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="playlist">
          <div className="playlistTitle">
            <h2 className="topicTitle">Monitoria</h2>
            <hr className="line" />
          </div>

          <div className="carosel">
            {monitoria.map((video) => (
              <ul>
                <li key={video.id}>
                  <div className="video">
                    <div className="thumb">
                      <img src={video.thumbUrl} />
                      <button className="favorite">favorite</button>
                    </div>
                    <div className="title">{video.nome}</div>
                    <div className="subtitle">
                      {video.topico} - {video.createdAt}
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Playlist;
