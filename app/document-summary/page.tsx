import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, FileText, Clock, Download, Trash2, Play } from "lucide-react"
import Link from "next/link"

export default function DocumentSummaryPage() {
  // Sample document data
  const documents = [
    {
      id: 1,
      title: "마케팅 전략 보고서.pdf",
      originalSize: "32 페이지",
      summarySize: "3 페이지",
      date: "2023-05-15",
      status: "완료",
    },
    {
      id: 2,
      title: "2023년 시장 분석.docx",
      originalSize: "45 페이지",
      summarySize: "4 페이지",
      date: "2023-05-10",
      status: "완료",
    },
    {
      id: 3,
      title: "제품 개발 계획서.pdf",
      originalSize: "28 페이지",
      summarySize: "3 페이지",
      date: "2023-05-05",
      status: "완료",
    },
    {
      id: 4,
      title: "연간 재무 보고서.xlsx",
      originalSize: "50 페이지",
      summarySize: "5 페이지",
      date: "2023-04-28",
      status: "완료",
    },
    {
      id: 5,
      title: "사용자 연구 결과.pdf",
      originalSize: "35 페이지",
      summarySize: "4 페이지",
      date: "2023-04-20",
      status: "완료",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">문서 요약</h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
            <div>
              <Tabs defaultValue="my-documents" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="my-documents">내 문서</TabsTrigger>
                  <TabsTrigger value="shared">공유된 문서</TabsTrigger>
                </TabsList>

                <TabsContent value="my-documents" className="mt-0">
                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <Card key={doc.id}>
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                                <FileText className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <Link href={`/document-summary/${doc.id}`} className="font-medium hover:text-primary">
                                  {doc.title}
                                </Link>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                  <span>원본: {doc.originalSize}</span>
                                  <span>요약: {doc.summarySize}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 ml-auto">
                              <div className="text-sm text-muted-foreground flex items-center">
                                <Clock className="h-3.5 w-3.5 mr-1" />
                                {doc.date}
                              </div>
                              <Button variant="ghost" size="icon" className="text-muted-foreground">
                                <Link href={`/document-summary/${doc.id}`}>
                                  <Play className="h-4 w-4" />
                                </Link>
                              </Button>
                              <Button variant="ghost" size="icon" className="text-muted-foreground">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="text-muted-foreground">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="shared" className="mt-0">
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">공유된 문서가 없습니다</h3>
                    <p className="text-muted-foreground mb-6">다른 사용자가 공유한 문서가 여기에 표시됩니다.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center">
                    <FileUp className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h2 className="text-xl font-bold mb-2">새 문서 업로드</h2>
                    <p className="text-muted-foreground mb-6">
                      PDF, Word, Excel, PowerPoint 파일을 업로드하여 AI로 요약해보세요.
                    </p>
                    <Button className="w-full mb-4" asChild>
                      <Link href="/document-summary/upload">문서 업로드</Link>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      최대 파일 크기: 20MB
                      <br />
                      지원 형식: PDF, DOCX, XLSX, PPTX
                    </p>
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
