"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Shuffle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(289) // 4:49 in seconds
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)

  // Format time in MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Current book info
  const currentBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/placeholder.svg?height=400&width=300",
    chapter: "Chapter 1: The Beginning",
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6 space-y-4">
        <div className="flex flex-col items-center">
          <Image
            src={currentBook.image || "/placeholder.svg"}
            alt={currentBook.title}
            width={200}
            height={200}
            className="rounded-lg shadow-md mb-4 w-full max-w-[200px] h-auto"
          />
          <h3 className="font-bold text-lg text-center">{currentBook.title}</h3>
          <p className="text-sm text-muted-foreground text-center">{currentBook.author}</p>
          <p className="text-xs text-muted-foreground mt-1 text-center">{currentBook.chapter}</p>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={(value) => setCurrentTime(value[0])}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            onClick={togglePlayPause}
            size="icon"
            className="h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Repeat className="h-4 w-4" />
          </Button>
        </div>

        {/* Volume control */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          <Slider
            value={[isMuted ? 0 : volume]}
            max={100}
            step={1}
            onValueChange={(value) => {
              setVolume(value[0])
              if (value[0] > 0) setIsMuted(false)
            }}
            className="w-full max-w-[120px]"
          />
        </div>

        {/* Playback speed */}
        <div className="flex justify-center gap-2 pt-2">
          <Button variant="outline" size="sm" className="h-7 px-2 text-xs rounded-full">
            0.8x
          </Button>
          <Button variant="default" size="sm" className="h-7 px-2 text-xs rounded-full">
            1.0x
          </Button>
          <Button variant="outline" size="sm" className="h-7 px-2 text-xs rounded-full">
            1.2x
          </Button>
          <Button variant="outline" size="sm" className="h-7 px-2 text-xs rounded-full">
            1.5x
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
