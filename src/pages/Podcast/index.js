import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import PlayerActions from '../../store/ducks/player';

import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Episode,
  Title,
  Author,
  BackButton,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Podcast({ navigation }) {
  const dispatch = useDispatch();
  const podcast = navigation.getParam('podcast');
  function handleBack() {
    navigation.goBack();
  }

  function handlePlay(episodeId) {
    dispatch(PlayerActions.setPodcastRequest(podcast, episodeId));
  }
  return (
    <Container>
      <EpisodeList
        ListHeaderComponent={() => (
          <PodcastDetails>
            <Background source={{ uri: podcast.cover }} blurRadius={5} />
            <BackButton onPress={handleBack}>
              <Icon name="arrow-back" size={24} color="#FFF" />
            </BackButton>
            <Cover source={{ uri: podcast.cover }} />
            <PodcastTitle>{podcast.title}</PodcastTitle>
            <PlayButton onPress={() => handlePlay()}>
              <PlayButtonText>Reproduzir</PlayButtonText>
            </PlayButton>
          </PodcastDetails>
        )}
        data={podcast.tracks}
        keyExtractor={episode => String(episode.id)}
        renderItem={({ item: episode }) => (
          <Episode onPress={() => handlePlay(episode.id)}>
            <Title>{episode.title}</Title>
            <Author>{episode.artist}</Author>
          </Episode>
        )}
      />
    </Container>
  );
}
