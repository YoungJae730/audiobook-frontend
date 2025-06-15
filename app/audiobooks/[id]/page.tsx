"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ChevronLeft, Star, Clock, BookOpen } from "lucide-react"

export default function AudiobookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(289) // 4:49 in seconds
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [activeTab, setActiveTab] = useState("summary")

  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Sample book data
  const book = {
    id: id,
    title: "사피엔스",
    subtitle: "유인원에서 사이보그까지, 인간 역사의 대담한 역사",
    author: "유발 하라리",
    coverImage: "/placeholder.svg?height=600&width=400",
    category: "역사",
    duration: "12시간 23분",
    releaseDate: "2023-05-15",
    summary:
      "이 책은 인류의 역사를 다룬 책으로, 인간이 어떻게 지구상에서 가장 지배적인 종이 되었는지를 설명합니다. 저자는 인류의 역사를 인지혁명, 농업혁명, 과학혁명이라는 세 가지 혁명으로 나누어 설명하며, 각 혁명이 인류의 생활 방식과 사회 구조에 어떤 영향을 미쳤는지 분석합니다. 또한 인간이 어떻게 허구적인 이야기를 믿고 협력하게 되었는지, 그리고 그것이 어떻게 대규모 사회 조직과 문명의 발전으로 이어졌는지 설명합니다.",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/audiobooks"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            오디오북 목록으로 돌아가기
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr_300px] gap-8">
            {/* Book cover and info */}
            <div className="space-y-6">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md">
                <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="font-medium">
                    {book.category}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">재생 시간</p>
                    <p className="text-muted-foreground">{book.duration}</p>
                  </div>
                </div>
              </div>

              <Button className="w-full">오디오북 재생하기</Button>
            </div>

            {/* Book details */}
            <div>
              <h1 className="text-3xl font-bold mb-1">{book.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{book.subtitle}</p>
              <p className="mb-6">
                <span className="font-medium">저자:</span> {book.author}
              </p>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="summary">책 소개</TabsTrigger>
                </TabsList>

                <TabsContent value="summary" className="mt-0">
                  <div className="prose dark:prose-invert max-w-none">
                    <p>{book.summary}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Audio player */}
            <div className="lg:block hidden">
              <div className="sticky top-24">
                <div className="bg-card rounded-lg border p-4 shadow-sm">
                  <h3 className="font-medium mb-4">오디오 플레이어</h3>

                  <div className="space-y-4">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                      <Image
                        src={book.coverImage || "/placeholder.svg"}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium line-clamp-1">{book.title}</h4>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
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
                    </div>

                    {/* Volume control */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground"
                        onClick={() => setIsMuted(!isMuted)}
                      >
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
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
