import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);

    // YouTube IFrame API logic
    useEffect(() => {
        // Load the YouTube IFrame Player API code asynchronously
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-audio-player', {
                height: '0',
                width: '0',
                videoId: 'd9JbCEzdurI',
                playerVars: {
                    autoplay: 1,
                    loop: 1,
                    playlist: 'd9JbCEzdurI',
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1
                },
                events: {
                    onReady: (event) => {
                        event.target.mute();
                    },
                    onStateChange: (event) => {
                        if (event.data === window.YT.PlayerState.PLAYING) {
                            setIsPlaying(true);
                        }
                    }
                }
            });
        };
    }, []);

    const toggleMute = () => {
        if (playerRef.current) {
            if (isMuted) {
                playerRef.current.unMute();
                playerRef.current.setVolume(40);
                playerRef.current.playVideo();
            } else {
                playerRef.current.mute();
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <div id="youtube-audio-player" className="hidden"></div>
            <button
                onClick={toggleMute}
                className={`p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-500 flex items-center gap-3 ${
                    !isMuted ? 'bg-rustic-earth text-white shadow-[0_0_20px_rgba(139,69,19,0.5)]' : 'bg-black/40 text-starlight hover:bg-black/60'
                }`}
                title={isMuted ? "Activar música" : "Silenciar música"}
            >
                {isMuted ? (
                    <>
                        <VolumeX className="w-6 h-6" />
                        <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Activa es Còsmic</span>
                    </>
                ) : (
                    <>
                        <Volume2 className="w-6 h-6 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Sona Sant Joan</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default BackgroundMusic;
