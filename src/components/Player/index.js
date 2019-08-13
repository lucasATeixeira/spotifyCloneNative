import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlayerActions from '../../store/ducks/player';
import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
  ControlIcon,
} from './styles';

export default function Player() {
  const dispatch = useDispatch();

  const player = useSelector(state => state.player);

  const currentEpisode = useSelector(state =>
    state.player.podcast
      ? state.player.podcast.tracks.find(
          episode => episode.id === state.player.current
        )
      : null
  );

  return (
    player.current && (
      <Container>
        <CoverBackground
          source={{
            uri: currentEpisode.artwork,
          }}
        />
        <EpisodeInfo>
          <Title>{currentEpisode.title}</Title>
          <Author>{currentEpisode.artist}</Author>
        </EpisodeInfo>

        <Controls>
          <ControlButton onPress={() => dispatch(PlayerActions.prev())}>
            <ControlIcon name="skip-previous" />
          </ControlButton>
          <ControlButton
            onPress={
              player.playing
                ? () => dispatch(PlayerActions.pause())
                : () => dispatch(PlayerActions.play())
            }
          >
            <ControlIcon
              name={
                player.playing ? 'pause-circle-filled' : 'play-circle-filled'
              }
            />
          </ControlButton>
          <ControlButton onPress={() => dispatch(PlayerActions.next())}>
            <ControlIcon name="skip-next" />
          </ControlButton>
        </Controls>
      </Container>
    )
  );
}
