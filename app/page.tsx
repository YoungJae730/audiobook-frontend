import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookCarousel } from "@/components/book-carousel"
import { BookGrid } from "@/components/book-grid"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function HomePage() {
  // Featured books data
  const featuredBooks = [
    {
      id: 1,
      title: "여름의 끝",
      author: "김영하",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 2,
      title: "사피엔스",
      author: "유발 하라리",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "역사",
    },
    {
      id: 3,
      title: "아몬드",
      author: "손원평",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 4,
      title: "공정하다는 착각",
      author: "마이클 샌델",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "철학",
    },
    {
      id: 5,
      title: "달러구트 꿈 백화점",
      author: "이미예",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 6,
      title: "부의 추월차선",
      author: "엠제이 드마코",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "자기계발",
    },
  ]

  // Top 10 books
  const topBooks = [
    ...featuredBooks,
    {
      id: 7,
      title: "어떻게 살 것인가",
      author: "유시민",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "에세이",
    },
    {
      id: 8,
      title: "미라클 모닝",
      author: "할 엘로드",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "자기계발",
    },
    {
      id: 9,
      title: "1984",
      author: "조지 오웰",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 10,
      title: "데미안",
      author: "헤르만 헤세",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
  ]

  // Monthly picks
  const monthlyPicks = [
    ...featuredBooks.slice(2),
    ...featuredBooks.slice(0, 2),
    {
      id: 11,
      title: "인간 실격",
      author: "다자이 오사무",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 12,
      title: "나미야 잡화점의 기적",
      author: "히가시노 게이고",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Carousel */}
        <section className="relative">
          <BookCarousel />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-lg max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-4">요약정과 함께하는 오디오북 여행</h1>
              <p className="text-white/90 mb-6">언제 어디서나 책을 들을 수 있는 새로운 독서 경험을 시작하세요</p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="font-medium">
                  무료 체험 시작하기
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  인기 오디오북 둘러보기
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Top 10 Section */}
        <section className="container mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Top 10</h2>
            <Link href="/audiobooks" className="text-sm font-medium text-primary hover:underline">
              더보기
            </Link>
          </div>
          <BookGrid books={topBooks} />
        </section>

        {/* Monthly Picks Section */}
        <section className="container mx-auto py-12 px-4 bg-gray-50 dark:bg-gray-900/30">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">월간 추천</h2>
            <Link href="/audiobooks" className="text-sm font-medium text-primary hover:underline">
              더보기
            </Link>
          </div>
          <BookGrid books={monthlyPicks} />
        </section>

        {/* Features Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">요약정의 특별한 기능</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">고품질 오디오북</h3>
              <p className="text-gray-500 dark:text-gray-400">
                전문 성우의 목소리로 생생하게 전달되는 오디오북을 언제 어디서나 즐겨보세요.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI 문서 요약</h3>
              <p className="text-gray-500 dark:text-gray-400">
                긴 문서도 AI가 핵심만 쏙쏙 요약해 드립니다. 시간을 절약하세요.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">TTS 기능</h3>
              <p className="text-gray-500 dark:text-gray-400">
                자연스러운 음성으로 텍스트를 읽어주는 TTS 기능으로 더 편리하게 콘텐츠를 즐기세요.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
