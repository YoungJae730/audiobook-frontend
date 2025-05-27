import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { HelpCircle, Search, MessageSquare, Phone, Mail } from "lucide-react"

export default function CustomerServicePage() {
  // Sample FAQ data
  const faqs = [
    {
      category: "계정",
      questions: [
        {
          question: "비밀번호를 잊어버렸어요. 어떻게 재설정하나요?",
          answer:
            "로그인 페이지에서 '비밀번호 찾기'를 클릭하고 가입 시 등록한 이메일을 입력하세요. 비밀번호 재설정 링크가 이메일로 발송됩니다.",
        },
        {
          question: "계정 정보를 변경하고 싶어요.",
          answer: "로그인 후 우측 상단의 프로필 아이콘을 클릭한 다음 '계정 설정'에서 개인 정보를 수정할 수 있습니다.",
        },
        {
          question: "회원 탈퇴는 어떻게 하나요?",
          answer:
            "계정 설정 페이지 하단의 '회원 탈퇴' 버튼을 통해 진행할 수 있습니다. 탈퇴 전 주의사항을 꼭 확인해 주세요.",
        },
      ],
    },
    {
      category: "오디오북",
      questions: [
        {
          question: "오디오북을 다운로드해서 오프라인으로 들을 수 있나요?",
          answer:
            "프리미엄 및 비즈니스 멤버십 사용자는 오디오북을 다운로드하여 오프라인으로 들을 수 있습니다. 책 상세 페이지에서 다운로드 버튼을 찾을 수 있습니다.",
        },
        {
          question: "재생 속도를 조절할 수 있나요?",
          answer: "네, 오디오북 플레이어에서 0.5배속부터 2.0배속까지 재생 속도를 조절할 수 있습니다.",
        },
        {
          question: "들었던 부분을 기억해 주나요?",
          answer:
            "네, 모든 오디오북은 마지막으로 들었던 부분을 자동으로 기억하여 다음에 접속했을 때 이어서 들을 수 있습니다.",
        },
      ],
    },
    {
      category: "문서 요약",
      questions: [
        {
          question: "어떤 형식의 문서를 업로드할 수 있나요?",
          answer: "PDF, Word(DOCX), Excel(XLSX), PowerPoint(PPTX) 형식의 문서를 업로드할 수 있습니다.",
        },
        {
          question: "문서 요약은 얼마나 걸리나요?",
          answer: "문서의 길이와 복잡성에 따라 다르지만, 일반적으로 5-30페이지 문서는 1-2분 내에 요약됩니다.",
        },
        {
          question: "요약된 문서를 다운로드할 수 있나요?",
          answer: "네, 요약된 문서는 PDF 또는 텍스트 형식으로 다운로드할 수 있습니다.",
        },
      ],
    },
    {
      category: "결제 및 멤버십",
      questions: [
        {
          question: "어떤 결제 방법을 지원하나요?",
          answer: "신용카드, 체크카드, 계좌이체, 카카오페이, 네이버페이 등 다양한 결제 방법을 지원합니다.",
        },
        {
          question: "멤버십을 변경하고 싶어요.",
          answer:
            "계정 설정의 '멤버십 관리'에서 언제든지 멤버십을 변경할 수 있습니다. 변경 사항은 다음 결제 주기부터 적용됩니다.",
        },
        {
          question: "환불 정책은 어떻게 되나요?",
          answer:
            "결제 후 7일 이내에 요청하시면 전액 환불해 드립니다. 7일이 지난 경우에는 일할 계산된 금액이 환불됩니다.",
        },
      ],
    },
  ]

  // Sample Q&A board data
  const qnaBoard = [
    {
      id: 1,
      title: "오디오북 재생 중 소리가 끊겨요",
      category: "기술 지원",
      status: "답변 완료",
      date: "2023-05-15",
      replies: 1,
    },
    {
      id: 2,
      title: "문서 요약 기능이 작동하지 않습니다",
      category: "기술 지원",
      status: "답변 완료",
      date: "2023-05-12",
      replies: 2,
    },
    {
      id: 3,
      title: "멤버십 변경 후 요금이 이상해요",
      category: "결제",
      status: "답변 대기중",
      date: "2023-05-10",
      replies: 0,
    },
    {
      id: 4,
      title: "특정 오디오북을 찾을 수 없어요",
      category: "콘텐츠",
      status: "답변 완료",
      date: "2023-05-08",
      replies: 1,
    },
    {
      id: 5,
      title: "앱에서 로그인이 안 됩니다",
      category: "계정",
      status: "답변 완료",
      date: "2023-05-05",
      replies: 3,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">고객센터</h1>

          <div className="relative mb-12">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input className="pl-10 py-6 text-lg" placeholder="질문을 검색해보세요..." />
          </div>

          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="faq">자주 묻는 질문</TabsTrigger>
              <TabsTrigger value="qna">Q&A 게시판</TabsTrigger>
              <TabsTrigger value="contact">문의하기</TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((category) => (
                  <Card key={category.category}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                        {category.category}
                      </CardTitle>
                      <CardDescription>{category.category}에 관한 자주 묻는 질문들입니다.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.questions.map((faq, index) => (
                          <div key={index} className="space-y-2">
                            <h3 className="font-medium">{faq.question}</h3>
                            <p className="text-sm text-muted-foreground">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="qna" className="mt-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Q&A 게시판</h2>
                <Button>질문 작성하기</Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">제목</th>
                      <th className="py-3 text-left font-medium">카테고리</th>
                      <th className="py-3 text-left font-medium">상태</th>
                      <th className="py-3 text-left font-medium">날짜</th>
                      <th className="py-3 text-left font-medium">답변</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qnaBoard.map((question) => (
                      <tr key={question.id} className="border-b hover:bg-muted/50 cursor-pointer">
                        <td className="py-4">
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                            {question.title}
                          </div>
                        </td>
                        <td className="py-4">{question.category}</td>
                        <td className="py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              question.status === "답변 완료"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            }`}
                          >
                            {question.status}
                          </span>
                        </td>
                        <td className="py-4">{question.date}</td>
                        <td className="py-4">{question.replies}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center mt-6">
                <nav className="inline-flex">
                  <Button variant="outline" size="icon" className="rounded-l-md">
                    &lt;
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-none bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-none">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-none">
                    3
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-r-md">
                    &gt;
                  </Button>
                </nav>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-medium mb-2">전화 문의</h3>
                    <p className="text-muted-foreground mb-4">
                      평일 09:00 - 18:00
                      <br />
                      (점심시간 12:00 - 13:00)
                    </p>
                    <p className="font-medium">02-1234-5678</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-medium mb-2">이메일 문의</h3>
                    <p className="text-muted-foreground mb-4">
                      24시간 접수 가능
                      <br />
                      (영업일 기준 24시간 내 답변)
                    </p>
                    <p className="font-medium">contact@yoyakjeong.com</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <MessageSquare className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-medium mb-2">채팅 상담</h3>
                    <p className="text-muted-foreground mb-4">
                      평일 09:00 - 18:00
                      <br />
                      (실시간 상담 가능)
                    </p>
                    <Button>채팅 시작하기</Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>문의 양식</CardTitle>
                  <CardDescription>
                    아래 양식을 작성하여 문의를 남겨주세요. 영업일 기준 24시간 내에 답변드립니다.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          이름
                        </label>
                        <Input id="name" placeholder="이름을 입력하세요" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          이메일
                        </label>
                        <Input id="email" type="email" placeholder="이메일을 입력하세요" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        제목
                      </label>
                      <Input id="subject" placeholder="문의 제목을 입력하세요" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        문의 유형
                      </label>
                      <select
                        id="category"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      >
                        <option value="">문의 유형을 선택하세요</option>
                        <option value="account">계정 문의</option>
                        <option value="payment">결제 문의</option>
                        <option value="technical">기술 지원</option>
                        <option value="content">콘텐츠 문의</option>
                        <option value="other">기타</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        문의 내용
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        placeholder="문의 내용을 자세히 입력해주세요"
                      ></textarea>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="privacy" className="ml-2 text-sm">
                        개인정보 수집 및 이용에 동의합니다.
                      </label>
                    </div>
                    <Button className="w-full">문의 제출하기</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
