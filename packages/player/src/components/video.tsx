import * as React from 'react'
import {SyntheticEvent} from 'react'
import {createMachine} from 'xstate'

type VideoProps = {
  loop?: boolean
  poster?: string
  preload?: string
  src?: string
  autoPlay?: boolean
  playsInline?: boolean
  muted?: boolean
  crossOrigin?: string
  id?: string
  className?: string
  handleCanPlay: (event: {currentTarget: HTMLVideoElement}) => void
}

export const Video: React.FC<VideoProps> = ({
  children,
  loop,
  poster,
  preload,
  src,
  autoPlay,
  playsInline,
  muted,
  crossOrigin,
  id,
  className,
  handleCanPlay,
}) => {
  const videoElemRef = React.createRef<HTMLVideoElement>()
  function handleLoadStart(event: SyntheticEvent) {
    console.log(event)
  }

  function handleWaiting(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleCanPlayThrough(event: SyntheticEvent) {
    //console.log(event)
  }

  function handlePlaying(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleEnded(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleSeeking(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleSeeked(event: SyntheticEvent) {
    //console.log(event)
  }

  function handlePlay(event: SyntheticEvent) {
    //console.log(event)
  }

  function handlePause(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleProgress(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleDurationChange(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleError(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleSuspend(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleAbort(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleEmptied(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleStalled(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleLoadedMetaData(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleLoadedData(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleTimeUpdate(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleRateChange(event: SyntheticEvent) {
    //console.log(event)
  }

  function handleVolumeChange(event: SyntheticEvent) {
    //console.log(event)
  }

  return (
    <video
      className={`cueplayer-react-video ${className}`}
      id={id}
      crossOrigin={crossOrigin}
      ref={(c: HTMLVideoElement) => {
        // sometimes the event handlers aren't registered before the
        // `canPlay` event is fired (caching, for instance) so we want
        // to check and see if it's ready as soon as we get a ref to
        // the HTMLVideoElement and "manually" fire an event
        if (c && c.readyState > 3) {
          handleCanPlay({currentTarget: c})
        }
      }}
      muted={muted}
      preload={preload}
      loop={loop}
      playsInline={playsInline}
      autoPlay={autoPlay}
      poster={poster}
      src={src}
      onLoadStart={handleLoadStart}
      onWaiting={handleWaiting}
      onCanPlay={handleCanPlay}
      onCanPlayThrough={handleCanPlayThrough}
      onPlaying={handlePlaying}
      onEnded={handleEnded}
      onSeeking={handleSeeking}
      onSeeked={handleSeeked}
      onPlay={handlePlay}
      onPause={handlePause}
      onProgress={handleProgress}
      onDurationChange={handleDurationChange}
      onError={handleError}
      onSuspend={handleSuspend}
      onAbort={handleAbort}
      onEmptied={handleEmptied}
      onStalled={handleStalled}
      onLoadedMetadata={handleLoadedMetaData}
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onRateChange={handleRateChange}
      onVolumeChange={handleVolumeChange}
      tabIndex={-1}
    >
      {children}
    </video>
  )
}