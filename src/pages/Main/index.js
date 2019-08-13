import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PodcastsActions from '../../store/ducks/podcasts';
import {
  Container,
  PodcastList,
  Podcast,
  Cover,
  Info,
  Title,
  Count,
  PageTitle,
} from './styles';

export default function Main({ navigation }) {
  const podcasts = useSelector(state => state.podcasts.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PodcastsActions.loadRequest());
  }, []);

  function handlePodcastPress(podcast) {
    navigation.navigate('Podcast', { podcast });
  }

  return (
    <Container>
      <PodcastList
        ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
        data={podcasts}
        keyExtractor={podcast => String(podcast.id)}
        renderItem={({ item: podcast }) => (
          <Podcast onPress={() => handlePodcastPress(podcast)}>
            <Cover source={{ uri: podcast.cover }} />
            <Info>
              <Title>{podcast.title}</Title>
              <Count>{`${podcast.tracks.length} episodios`}</Count>
            </Info>
          </Podcast>
        )}
      />
    </Container>
  );
}
