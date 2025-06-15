"use client"

import { useState, use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import {
  FileText,
  Download,
  Share2,
  ChevronLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function DocumentSummaryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(180) // 3분 (초 단위)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [activeTab, setActiveTab] = useState("summary")
  const [playbackSpeed, setPlaybackSpeed] = useState(1)

  // 문서 데이터 (실제로는 API에서 가져올 것)
  const document = {
    id: id,
    title: "마케팅 전략 보고서.pdf",
    originalSize: "32 페이지",
    summarySize: "3 페이지",
    date: "2023-05-15",
    status: "완료",
    originalContent: `
      # 마케팅 전략 보고서
      
      ## 서론
      이 보고서는 2023년 마케팅 전략에 대한 종합적인 분석과 제안을 담고 있습니다.
      
      ## 시장 분석
      현재 시장은 디지털 전환이 가속화되고 있으며, 소비자들의 온라인 활동이 증가하고 있습니다.
      
      ## 경쟁사 분석
      주요 경쟁사들은 소셜 미디어 마케팅과 인플루언서 마케팅에 집중하고 있습니다.
      
      ## 제안 전략
      1. 소셜 미디어 마케팅 강화
      2. 콘텐츠 마케팅 확대
      3. 이메일 마케팅 개선
      4. 인플루언서 협업 확대
      
      ## 예산 계획
      총 마케팅 예산은 전년 대비 15% 증가한 5억원으로 책정되었습니다.
      
      ## 결론
      디지털 마케팅에 집중하면서 전통적인 마케팅 채널도 균형있게 활용하는 전략이 필요합니다.
    `,
    summaryContent: `
      # 마케팅 전략 요약
      
      2023년 마케팅 전략은 디지털 전환 가속화와 소비자의 온라인 활동 증가에 맞춰 조정되어야 합니다.
      
      주요 경쟁사들은 소셜 미디어와 인플루언서 마케팅에 집중하고 있으며, 우리도 이에 대응해야 합니다.
      
      제안 전략:
      - 소셜 미디어 마케팅 강화
      - 콘텐츠 마케팅 확대
      - 이메일 마케팅 개선
      - 인플루언서 협업 확대
      
      총 마케팅 예산은 5억원(전년 대비 15% 증가)으로 책정되었습니다.
      
      디지털 마케팅에 집중하되, 전통적 마케팅 채널도 균형있게 활용해야 합니다.
    `,
    keyPoints: [
      "디지털 전환 가속화에 따른 전략 조정 필요",
      "소셜 미디어와 인플루언서 마케팅 강화",
      "콘텐츠 마케팅 확대",
      "마케팅 예산 15% 증가",
      "디지털과 전통적 마케팅의 균형",
    ],
  }

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

  // Handle download
  const handleDownload = () => {
    // 실제로는 API를 통해 파일을 다운로드하는 로직이 필요합니다
    alert("요약 문서 다운로드를 시작합니다.")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/document-summary"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            문서 요약 목록으로 돌아가기
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold">{document.title}</h1>
                  <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <span>원본: {document.originalSize}</span>
                    <span>요약: {document.summarySize}</span>
                    <span>
                      <Clock className="inline h-3.5 w-3.5 mr-1" />
                      {document.date}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleDownload}>
                    <Download className="h-4 w-4 mr-1" />
                    다운로드
                  </Button>
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="summary">요약</TabsTrigger>
                  <TabsTrigger value="original">원본</TabsTrigger>
                  <TabsTrigger value="key-points">핵심 포인트</TabsTrigger>
                </TabsList>

                <TabsContent value="summary" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="prose dark:prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: document.summaryContent.replace(/\n/g, "<br />") }} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="original" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="prose dark:prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: document.originalContent.replace(/\n/g, "<br />") }} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="key-points" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {document.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <p>{point}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              {/* TTS 플레이어 */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Volume2 className="h-5 w-5 text-primary" />
                    TTS 플레이어
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-medium line-clamp-1">{document.title}</h3>
                    <p className="text-sm text-muted-foreground">요약 내용 듣기</p>
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

                  {/* Playback speed */}
                  <div className="pt-2">
                    <p className="text-sm font-medium mb-2">재생 속도</p>
                    <div className="flex justify-between gap-2">
                      {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                        <Button
                          key={speed}
                          variant={playbackSpeed === speed ? "default" : "outline"}
                          size="sm"
                          className="h-7 px-2 text-xs rounded-full flex-1"
                          onClick={() => setPlaybackSpeed(speed)}
                        >
                          {speed}x
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      오디오 다운로드
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
