"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUp, ChevronLeft, FileText, Check, Loader2, Download } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function DocumentUploadPage() {
  const [step, setStep] = useState<"upload" | "processing" | "complete">("upload")
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [processingStep, setProcessingStep] = useState<
    "uploading" | "analyzing" | "summarizing" | "generating_audio" | "complete"
  >("uploading")

  // 파일 선택 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  // 파일 업로드 시작
  const handleUpload = () => {
    if (!file) return

    setStep("processing")
    setProgress(0)
    setProcessingStep("uploading")

    // 업로드 과정 시뮬레이션
    const uploadInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval)
          setProcessingStep("analyzing")
          simulateAnalyzing()
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  // 분석 과정 시뮬레이션
  const simulateAnalyzing = () => {
    setProgress(0)
    const analyzeInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(analyzeInterval)
          setProcessingStep("summarizing")
          simulateSummarizing()
          return 100
        }
        return prev + 4
      })
    }, 200)
  }

  // 요약 과정 시뮬레이션
  const simulateSummarizing = () => {
    setProgress(0)
    const summarizeInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(summarizeInterval)
          setProcessingStep("generating_audio")
          simulateGeneratingAudio()
          return 100
        }
        return prev + 3
      })
    }, 200)
  }

  // 오디오 생성 과정 시뮬레이션
  const simulateGeneratingAudio = () => {
    setProgress(0)
    const audioInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(audioInterval)
          setProcessingStep("complete")
          setStep("complete")
          return 100
        }
        return prev + 2
      })
    }, 200)
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

          <h1 className="text-3xl font-bold mb-8">문서 업로드</h1>

          <div className="max-w-2xl mx-auto">
            {step === "upload" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">문서 업로드</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
                    <FileUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">파일을 여기에 드래그하거나 클릭하여 업로드</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      PDF, Word, Excel, PowerPoint 파일을 지원합니다. (최대 20MB)
                    </p>
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                      onChange={handleFileChange}
                    />
                    <Button asChild>
                      <label htmlFor="file-upload">파일 선택</label>
                    </Button>
                  </div>

                  {file && (
                    <div className="bg-muted/50 p-4 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setFile(null)}>
                        삭제
                      </Button>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">요약 길이</label>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <option>짧게 (원본의 10%)</option>
                        <option>중간 (원본의 30%)</option>
                        <option>길게 (원본의 50%)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">요약 스타일</label>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <option>일반</option>
                        <option>학술적</option>
                        <option>비즈니스</option>
                      </select>
                    </div>
                  </div>

                  <Button className="w-full" disabled={!file} onClick={handleUpload}>
                    업로드 및 요약 시작
                  </Button>
                </CardContent>
              </Card>
            )}

            {step === "processing" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">문서 처리 중</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <Loader2 className="h-12 w-12 mx-auto text-primary animate-spin mb-4" />
                    <h3 className="text-lg font-medium mb-2">
                      {processingStep === "uploading" && "파일 업로드 중..."}
                      {processingStep === "analyzing" && "문서 분석 중..."}
                      {processingStep === "summarizing" && "요약 생성 중..."}
                      {processingStep === "generating_audio" && "TTS 오디오 생성 중..."}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {processingStep === "uploading" && "파일을 서버에 업로드하고 있습니다."}
                      {processingStep === "analyzing" && "AI가 문서의 내용을 분석하고 있습니다."}
                      {processingStep === "summarizing" && "문서의 핵심 내용을 요약하고 있습니다."}
                      {processingStep === "generating_audio" && "요약된 내용을 음성으로 변환하고 있습니다."}
                    </p>
                  </div>

                  <Progress value={progress} className="h-2" />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            processingStep === "uploading" ||
                            processingStep === "analyzing" ||
                            processingStep === "summarizing" ||
                            processingStep === "generating_audio" ||
                            processingStep === "complete"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {processingStep !== "uploading" ? <Check className="h-3 w-3" /> : "1"}
                        </div>
                        <span className="text-sm font-medium">파일 업로드</span>
                      </div>
                      {processingStep !== "uploading" && <Check className="h-4 w-4 text-primary" />}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            processingStep === "analyzing" ||
                            processingStep === "summarizing" ||
                            processingStep === "generating_audio" ||
                            processingStep === "complete"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {processingStep !== "analyzing" && processingStep !== "uploading" ? (
                            <Check className="h-3 w-3" />
                          ) : (
                            "2"
                          )}
                        </div>
                        <span className="text-sm font-medium">문서 분석</span>
                      </div>
                      {processingStep !== "uploading" && processingStep !== "analyzing" && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            processingStep === "summarizing" ||
                            processingStep === "generating_audio" ||
                            processingStep === "complete"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {processingStep !== "summarizing" &&
                          processingStep !== "analyzing" &&
                          processingStep !== "uploading" ? (
                            <Check className="h-3 w-3" />
                          ) : (
                            "3"
                          )}
                        </div>
                        <span className="text-sm font-medium">요약 생성</span>
                      </div>
                      {processingStep !== "uploading" &&
                        processingStep !== "analyzing" &&
                        processingStep !== "summarizing" && <Check className="h-4 w-4 text-primary" />}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            processingStep === "generating_audio" || processingStep === "complete"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {processingStep === "complete" ? <Check className="h-3 w-3" /> : "4"}
                        </div>
                        <span className="text-sm font-medium">TTS 오디오 생성</span>
                      </div>
                      {processingStep === "complete" && <Check className="h-4 w-4 text-primary" />}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === "complete" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">처리 완료</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">문서 요약이 완료되었습니다</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      이제 요약된 내용을 확인하고 TTS로 들을 수 있습니다.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">{file?.name}</p>
                        <p className="text-sm text-muted-foreground">
                          원본: {file ? ((file.size / 1024 / 1024) * 10).toFixed(0) : 0} 페이지 | 요약: 3 페이지
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">요약 결과:</p>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        이 문서는 주요 비즈니스 전략에 대한 분석을 담고 있습니다. 핵심 내용으로는 시장 동향, 경쟁사
                        분석, 그리고 향후 전략 방향이 포함되어 있습니다. 특히 디지털 전환과 관련된 내용이 중점적으로
                        다루어졌습니다...
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1" asChild>
                      <Link href={`/document-summary/1`}>요약 보기</Link>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      요약 다운로드
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
